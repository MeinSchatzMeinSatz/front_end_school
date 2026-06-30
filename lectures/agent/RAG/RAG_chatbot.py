# 환경설정
from dotenv import load_dotenv
from langchain_community.document_loaders import TextLoader, DirectoryLoader, PyMuPDFLoader, CSVLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import FAISS
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

file_path = '/Users/leechaejun/selfstudy-repo/lectures/agent/.env'
load_dotenv(file_path)

# 데이터 인입 및 변환
## 데이터 인입 및 변환(텍스트를 분할해주는) 모델 생성
loader = TextLoader(file_path='/Users/leechaejun/selfstudy-repo/lectures/agent/data/manual.txt', encoding='utf-8')

## load() 함수 호출, Document 자료형 생성
documents = loader.load()
# print(f'documents: {documents}')

# 텍스트 분할
file_path = '/Users/leechaejun/selfstudy-repo/lectures/agent/data/manual.txt'

with open(file_path, "r", encoding="utf-8") as file:
  manual_text = file.read()

## 문자열을 질문-답변 쌍으로 분할
qa_pairs = []

for pair in manual_text.split("\n\n"):
  qa_pairs.append(pair)

print(qa_pairs)

print('-' * 80)

## 각 Q&A 쌍 별 글자수 계산
character_length = []

for pair in qa_pairs:
  character_length.append(len(pair))

print(character_length)

print('-' * 80)

## Q&A 쌍 중 가장 글자 수가 긴 경우의 길이 추출
max_char_length = max(character_length)
print(f"가장 긴 Q&A 단락의 글자 수: {max_char_length}자")

print('-' * 80)

# 안전 마진(Margin)을 50자 정도 추가하여 최종 chunk_size를 결정
# 이렇게 하면 가장 긴 단락도 절대 중간에 잘리지 않음
optimal_chunk_size = max_char_length + 50
print(f"설정할 최적의 chunk_size: {optimal_chunk_size}자")

# 텍스트 분할 모델 생성
text_splitter = RecursiveCharacterTextSplitter(chunk_size=207, chunk_overlap=0)

# split_documents() 함수 함수, 분할된 문서 생성
docs = text_splitter.split_documents(documents)

# 텍스트 임베딩
## 사전 학습된 모델 이름
model_name = "BAAI/bge-m3"

## '검색 속도 증가' 설정
encode_kwargs = {'normalize_embeddings': True}
model = HuggingFaceEmbeddings(
  model_name=model_name,
  encode_kwargs=encode_kwargs
)

# 벡터 저장소 및 검색 도구 생성
## 벡터 저장소 생성
vectorstore = FAISS.from_documents(docs, model)

# 검색 도구 생성
retriever = vectorstore.as_retriever(search_kwargs={'k': 3})
print(f'retriever: {retriever}')

# 프롬프트 작성
system_prompt = """당신은 친절한 온라인 교육 플랫폼 직원입니다. 주어진 컨텍스트
정보를 바탕으로 고객의 질문에 정중하게 답변해주세요.
주어진 컨텍스트 정보는 고객의 질문에 대한 답변입니다. 컨텍스트를 그대로 사용하여
답변하거나, 컨텍스트의 내용을 바탕으로 자연스럽게 답변을 재구성해주세요.
답변을 할 때는 '답변:'이라는 표현을 사용하지 말아야 하며, 컨텍스트에 질문에 대한
정보가 없다면, '죄송하지만 문의하신 내용에 대해서는 아는 바가 없습니다.'라고 답변해주세요."""

# 사용자 프롬프트 생성
user_prompt = """
컨텍스트:
{context}

질문:
{question}
"""

prompt  = ChatPromptTemplate.from_messages([
  ("system", system_prompt),
  ("human", user_prompt)
])

# LLM 생성
## LangChain의 ChatOpenAI 함수 호출, llm 생성
llm = ChatOpenAI(model_name="gpt-4o-mini", temperature=0.7)

# Output parser 생성
output_parser = StrOutputParser()

# RAG 체인 구성
rag_chain = prompt | llm | output_parser


print("안녕하세요! 고객 응대 챗봇입니다. 궁금한 점을 질문해주세요. (종료하려면 'exit' 입력)")

## while 반복문 정의
while True:
    try:
        user_question = input("질문: ")
        ### 종료 조건 설정
        if user_question.lower() == 'exit':
            print("챗봇을 종료합니다.")
            break

        ### 검색 도구를 사용하여 사용자 질문과 가장 유사한 문서(Document) 리스트 추출
        retrieved_docs = retriever.invoke(user_question)
        print(f'가장 유사한 문서: \n{retrieved_docs}')

        print('-'*80)

        ### 가져온 문서로부터 page_content 추출
        context_text = retrieved_docs[0].page_content
        print(f'답변의 근거: \n{context_text}')

        print('-'*80)

        ### rag_chain.invoke()를 호출하여 사용자 질문에 대한 답변 생성
        response = rag_chain.invoke({"context": context_text, "question": user_question})

        ### Chatbot 응답 표시
        print(f"Chatbot Agent 응답: \n{response}")
        print('='*80)


    ### 포괄적 예외처리
    except Exception as e:
        print(f"오류가 발생했습니다.: {e}")