from dotenv import load_dotenv
from langchain_tavily import TavilySearch

env_file_path = '/Users/leechaejun/selfstudy-repo/lectures/agent/.env'
load_dotenv(env_file_path)

# 검색 도구 생성
search_tool = TavilySearch(max_result=3)

# 검색 실행
## 검색 쿼리 생성
query = "2026년 5월 14일 양재동 꽃시장 장미 1단 가격"

## 결과 확인
query_result = search_tool.invoke(query)
# print(query_result)

# 검색 결과 정제
for result_dict in query_result['results']:
  # 개발 검색 결과 -> 딕셔너리 -> 키: results -> 검색 결과 -> 딕셔너리의 리스트 -> 첫 번째 딕셔너리 -> 키: content
  print(result_dict['content'])
  print('-' * 80)