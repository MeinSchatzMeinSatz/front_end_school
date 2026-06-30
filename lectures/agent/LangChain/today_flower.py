# 환경 설정
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langchain_tavily import TavilySearch
from dotenv import load_dotenv

file_path = '/Users/leechaejun/selfstudy-repo/lectures/agent/.env'
load_dotenv(file_path)

# 도구 생성하기
## 검색 도구 생성
search_tool = TavilySearch(max_results=3)

## 계산 도구 생성
import ast
import operator

# 허용할 연산자만 명시적으로 매핑 (그 외의 코드는 실행 자체가 불가능)
_ALLOWED_OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.FloorDiv: operator.floordiv,
    ast.Mod: operator.mod,
    ast.Pow: operator.pow,
    ast.USub: operator.neg,
    ast.UAdd: operator.pos,
}


def _safe_eval(node):
    """
    파이썬 AST를 직접 순회하면서 숫자 연산만 허용하는 안전한 평가 함수.
    함수 호출, 변수 접근, import, 속성 접근 등은 전부 차단됩니다.
    """
    if isinstance(node, ast.Constant):
        if isinstance(node.value, (int, float)):
            return node.value
        raise ValueError(f"허용되지 않는 상수입니다: {node.value!r}")

    if isinstance(node, ast.BinOp):
        op_type = type(node.op)
        if op_type not in _ALLOWED_OPERATORS:
            raise ValueError(f"허용되지 않는 연산자입니다: {op_type.__name__}")
        left = _safe_eval(node.left)
        right = _safe_eval(node.right)
        return _ALLOWED_OPERATORS[op_type](left, right)

    if isinstance(node, ast.UnaryOp):
        op_type = type(node.op)
        if op_type not in _ALLOWED_OPERATORS:
            raise ValueError(f"허용되지 않는 단항 연산자입니다: {op_type.__name__}")
        operand = _safe_eval(node.operand)
        return _ALLOWED_OPERATORS[op_type](operand)

    # 함수 호출(Call), 이름 참조(Name), 속성 접근(Attribute) 등은
    # 명시적으로 처리하지 않으므로 자동으로 차단됩니다.
    raise ValueError(f"허용되지 않는 구문입니다: {type(node).__name__}")


@tool
def python_calculator(code: str) -> str:
    """
    주어진 수식 문자열을 안전하게 계산하여 결과를 반환합니다.
    사칙연산, 거듭제곱, 나머지 연산 등 순수 수학 계산에만 사용하세요.
    (예: "1500 * 1.05", "(2000 + 300) * 0.95")
    함수 호출, 변수, 외부 모듈 사용은 지원하지 않습니다.
    """
    try:
        # 수식만 파싱 (대입문, 함수 정의 등은 SyntaxError로 자동 차단됨)
        parsed = ast.parse(code, mode="eval")
        result = _safe_eval(parsed.body)
        return str(result)
    except ZeroDivisionError:
        return "Error: 0으로 나눌 수 없습니다."
    except (ValueError, SyntaxError, TypeError) as e:
        return f"Error: 계산할 수 없는 수식입니다 ({e})"
    except Exception as e:
        return f"Error: {e}"

# 도구 목록 생성
tools = [search_tool, python_calculator]
## 도구의 이름을 키(key)로, 도구의 값을 value로 매핑(도구 사전 생성)
tool_by_name = {tool.name: tool for tool in tools}

# llm 생성(llm + 도구)
llm = ChatOpenAI(
  model_name='gpt-4o-mini',
  temperature=0
)

## llm에 도구를 바인딩
llm_with_tools = llm.bind_tools(tools)

# 프롬프트 생성

prompt = ChatPromptTemplate.from_messages([
  ("system", 
 "당신은 유능한 AI 에이전트입니다. 질문에 답하기 위해 사용 가능한 도구들을 활용하세요.\n"
 "- 정확한 절대 가격을 찾지 못했더라도, 검색 결과에서 얻은 등락률이나 일반적인 시세 정보를 "
 "근거로 합리적인 추정 범위를 제시하세요.\n"
 "- 단, 이 경우 '실시간 정확한 수치가 아닌 추정값'이라는 점을 답변에 반드시 명시하세요.\n"
 "- 동일하거나 유사한 검색을 2회 이상 시도했는데도 핵심 정보를 찾지 못했다면, "
 "더 이상 검색을 반복하지 말고 지금까지 찾은 정보를 토대로 답변을 마무리하세요.\n"
 "답변은 반드시 한국어로 작성해야 합니다."),
  MessagesPlaceholder(variable_name="chat_history"),
  ("human", "{input}")
])

# chain 생성
## 프롬프트와 LLM 연결, chain 생성
agent_chain = prompt | llm_with_tools

# AI agent 실행
print("에이전트 가동...")

print('-'*80)

# 무한 루프 방지용 최대 반복 횟수
MAX_ITERATIONS = 6

# 대화 기록을 담을 리스트 생성 -> 메모리 생성
chat_history = []


# 사용자 입력 생성
user_input = (
    "양재 꽃시장(또는 한국 화훼공판장)에서 장미 1단(또는 1단/10송이) 기준 "
    "도매가격이 보통 '원' 단위로 얼마인지 검색해줘. "
    "정확한 오늘자 가격을 찾기 어렵다면, 최근 시세나 일반적인 가격대를 근거로 "
    "추정 가격을 제시하고 그 위에 5% 마진을 더한 최종가를 계산해줘."
)

iteration = 0

# while 반복문 정의
while True:
    iteration += 1

    if iteration > MAX_ITERATIONS:
      print(f"[종료] 최대 반복 횟수({MAX_ITERATIONS}회)를 초과하여 강제 종료합니다.")
      print("[최종 답변]: 요청하신 정보를 충분히 찾지 못해 정확한 답변을 드리기 어렵습니다. ")
      break

    # 체인 호출, 프롬프트에 input과 대화 기록을 주입합니다.
    ai_msg = agent_chain.invoke({
        "input": user_input,
        "chat_history": chat_history
    })
    print(f'agent 실행 결과: {ai_msg}')


    print('-'*80)


    # 도구 호출이 없다면 최종 답변이 완성된 것이므로 에이전트 종료
    if not ai_msg.tool_calls:
        print(f"[최종 답변]: {ai_msg.content}")
        break


    # 도구 호출이 필요한 경우, AI의 생각(도구 호출 메시지)을 대화 기록(메모리)에 기록
    chat_history.append(ai_msg)


    # 지시받은 도구들을 순차적으로 실행
    for tool_call in ai_msg.tool_calls:
        tool_name = tool_call["name"]
        tool_args = tool_call.get("args", {})
        selected_tool = tool_by_name[tool_name]
        
        print(f"시스템이 {tool_name} 도구를 실제로 실행합니다. 인자: {tool_args}")
        print('-'*80)


        # 도구를 실행하고 결과(ToolMessage)를 생성
        tool_msg = selected_tool.invoke(tool_call)
        print(f"[도구 응답]: {tool_msg.content}")
        print('-'*80)


        # 도구 실행 결과를 대화 기록에 추가하여 다음 턴에 LLM이 인지하도록 함
        chat_history.append(tool_msg)