import React from "react";
import { useState } from "react";

const State = () => {
  /**
   * State란
   * - 현재 가지고 있는 형태나 모양을 정의
   * - 변화할 수 있는 동적인 값
   *
   * -> State란 컴포넌트의 현재상태를 보관하는 곳
   * 따라서 State의 값에 따라 렌더링되는 UI가 결정된다
   *  */

  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  /**
   * Q. state 대신에 let이나 const로 만든 변수를 사용해도 될 것 같은데?
   * 똑같이 값의 변화를 줄 수 있다. 하지만 변수의 값이 바뀐다고 해서 리렌더링 되지는 않는다.
   *
   * 리액트 컴포넌트는 state의 값이 변화했을 때에만 리렌더링이 발생한다.
   */

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "Turn Off" : "Turn On"}
        </button>
      </div>

      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          더하기
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          빼기
        </button>
      </div>
    </>
  );
};

export default State;
