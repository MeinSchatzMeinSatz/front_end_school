import asyncio
from typing import Annotated
from dotenv import load_dotenv
from pydantic import BaseModel, Field
from langchain_core.messages import BaseMessage, HumanMessage, AIMessage
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.output_parsers import StrOutputParser
from langgraph.graph import add_messages, StateGraph, END
from langgraph.checkpoint.sqlite.aio import AsyncSqliteSaver

FILE_PATH = '/Users/leechaejun/selfstudy-repo/lectures/agent/.env'
load_dotenv(FILE_PATH, override=True)

# 1. RAG 시스템 기반 설정
## 가상 기업 매뉴얼 파일 로드
loader = TextLoader(file_path="/Users/leechaejun/selfstudy-repo/lectures/agent/data/manual.txt", encoding="utf-8")
documents = loader.load()

## 텍스트 분할 처리 (청크 생성)
text_splitter = RecursiveCharacterTextSplitter(chunk_size = 200, chunk_overlap = 0)
docs = text_splitter.split_documents(documents)

## HuggingFace 문장 임베딩 모델 로드 및 벡터 저장소(FAISS) 생성
embeddings = HuggingFaceEmbeddings(
  model_name="BAAI/bge-m3",
  encode_kwargs={'normalize_embeddings': True}
)
vectorstore = FAISS.from_documents(docs, embeddings)

## 검색기(Retriever) 생성 (가장 유사한 문서 1개 추출)
retreiver = vectorstore.as_retriever(search_kwargs={'k':1})


# LCEL 기반 RAG 체인 구성
## 2. 프롬프트 생성
system_prompt = """당신은 친절한 온라인 교육 플랫폼 직원입니다. 주어진 컨텍스트
정보를 바탕으로 고객의 질문에 정중하게 답변해주세요.
주어진 컨텍스트 정보는 고객의 질문에 대한 답변입니다. 컨텍스트를 그대로 사용하여
답변하거나, 컨텍스트의 내용을 바탕으로 자연스럽게 답변을 재구성해주세요.
답변을 할 때는 '답변:'이라는 표현을 사용하지 말아야 하며, 컨텍스트에 질문에 대한
정보가 없다면, '죄송하지만 문의하신 내용에 대해서는 아는 바가 없습니다.'라고 답변해주세요."""

prompt = ChatPromptTemplate.from_messages([
  ("system", system_prompt),
  MessagesPlaceholder(variable_name="chat_history"),
  ("human", "컨텍스트:\n{context}\n\n질문:\n{question}")
])

## LLM 생성
llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.7)

## output parser 생성
output_parser = StrOutputParser()

## LCEL 기반 RAG 체인 구성
rag_chain = prompt | llm | output_parser

# 그래프 상태(Graph State) 정의
class AgentState(BaseModel):
  messages: Annotated[list[BaseMessage], add_messages] = Field(default_factory=list)

# 그래프 노드 함수 정의: 비동기 함수(async def)로 노드를 선언한다.
async def rag_node(state: AgentState):
  print("\n--- 에이전트: 컨텍스트 검색 및 답변 생성 진행 중 ---")

  # 상태(State)에서 가장 최근에 입력된 사용자의 질문 추출
  question = state.messages[-1].content

  # 전체 메시지 중 마지막 질문을 제외한 나머지를 대화 기록으로 추출
  chat_history = state.messages[:-1]

  print(f"[디버깅] 현재까지 누적된 대화 메시지 수: {len(state.messages)}개")

  # 컨택스트 검색 -> 외부 I/O 작업(임베딩 검색)에 await와 ainvoke() 적용
  retrieved_docs = await retreiver.ainvoke(question)
  context_text = retrieved_docs[0].page_content

  # RAG 체인 호출 시 chat_history를 함께 전달
  response = await rag_chain.ainvoke({
    "context": context_text,
    "chat_history": chat_history,
    "question": question
  })

  # 결과를 상태에 누적 업데이트하기 위해 AIMessage 리스트 구조로 반환합니다.
  return {"messages": [AIMessage(content=response)]}

# 그래프 구성 및 컴파일

## 그래프 생성
workflow = StateGraph(AgentState)

## 그래프에 노드 추가
workflow.add_node("rag_node", rag_node)

## 시작점 설정
workflow.set_entry_point("rag_node")

## edge 추가: 노드 실행 완료 후 워크플로우가 안전하게 종료(END)되도록 엣지 연결
workflow.add_edge("rag_node", END)


# DB 기반 영속성 체크ㅗㅍ인터 및 비동기 실행 실시간 채팅 루프 구현: Chatbot Agent 실행
## 비동기 메인 함수 정의
async def main():
  # 대화 기록을 지정할 SQLite DB 파이명 지정
  db_file = "history_single_agent.sqlite"

  # async with 문법 -> 비동기 DB 커넥션을 안전하게 열고 관리
  async with AsyncSqliteSaver.from_conn_string(db_file) as memory:
    # 그래프를 컴파일할 때 체크포인터(DB)를 등록
    agent = workflow.compile(checkpointer=memory)

    # 이 대화 세션을 식별할 고유 ID(Thread ID)를 설정
    config = {"configurable": {"thread_id": "user-1"}}

    # print(f"\n메모리 주입 완료! (DB 파일: {db_file})")
    print("이전 대화가 자동으로 이어집니다. 테스트 후 'exit'를 입력해 종료해보세요.")
    print("-" * 80)

    while True:
      try:
        user_question = input("\n사용자: ")
        
        if user_question.lower() == 'exit':
          print("챗봇을 종료합니다.")
          break

        if not user_question.strip():
          continue

        # 더이상 이전 기록을 수동으로 유지할 필요없이
        # 새로운 질문(HumanMessage)만 단독으로 그래프에 전달
        initial_state = {"messages": [HumanMessage(content=user_question)]}

        # agent 호출 시 반드시 config(thread_id 포함)을 함께 입력해서 DB에서 기록을 찾아온다.
        final_state = await agent.ainvoke(initial_state, config=config)

        # 최신 답변 출력
        assistant_response = final_state["messages"][-1].content
        print(f"\nAI 응답: {assistant_response}")
        print("-"*80)

      except Exception as e:
        print(f"오류 발생: {e}")

if __name__ == "__main__":
  asyncio.run(main())