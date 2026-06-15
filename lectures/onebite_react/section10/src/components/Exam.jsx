import { useReducer } from "react";

// reducer: 변환기
//  -> 상태를 실제로 변환시키는 변환기 역할을 하는 함수
function reducer(state, action) {
  console.log(state, action);
  // if (action.type === "INCREASE") {
  //   return state + action.data;
  // } else if (action.type === "DECREASE") {
  //   return state - action.data;
  // }

  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    case "INIT": // 이렇게 기능을 확장 시킬 수 있다.
      return 0;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch: 발송하다, 급송하다.
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  const onClickInit = () => {
    dispatch({
      type: "INIT",
    });
  };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <p>{state}</p>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
      <button onClick={onClickInit}>초기화</button>
    </div>
  );
};

export default Exam;
