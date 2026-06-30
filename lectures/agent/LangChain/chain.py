from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

env_file_path = '/Users/leechaejun/selfstudy-repo/lectures/agent/.env'
load_dotenv(env_file_path)

# Chain 기본 구조 생성
## 1. LLM 모델 생성(언어 모델 생성)
llm = ChatOpenAI(
  model = 'gpt-4o-mini'
)

## 2. 프롬프트 생성
prompt = ChatPromptTemplate.from_messages(
  [
    ("system","당신은 LLM 전문가 입니다. 사용자의 질문에 100글자 이내로 정확하고 간결하게 답변해야 합니다."),
    ("human","{topic}에 대해서 설명해 주세요.")
  ]
)

## 3. 출력형식 정의: parser를 미리 정의 => 문자열로 결과 받기
output_parser = StrOutputParser()

# Chain 연결하기
chain = prompt | llm | output_parser

print(chain)

# chain 작동 시키기
## invoke()
response = chain.invoke({"topic": "양자 컴퓨터"})

print(response)