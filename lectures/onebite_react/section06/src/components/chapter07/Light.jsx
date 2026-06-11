import { useState } from "react";
import Bulb from "./Bulb";
import Counter from "./Counter";

const Light = () => {
  /**
   * 이 예제를 통해 확인할 수 있는 사실
   * - Bulb같은 자식 컴포넌트는 부모로부터 받은 props의 값이 변경되면 리렌더링이 발생한다.
   * - 부모 컴포넌트가 리렌더링되면 자식컴포넌트도 리렌더링된다.
   */

  // const [light, setLight] = useState("OFF");
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Bulb />
        {/* <button
          onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
          }}
        >
          {light === "ON" ? "Turn Off" : "Turn On"}
        </button> */}
      </div>

      <div>
        {/* <h1>{count}</h1>
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
        </button> */}
        <Counter />
      </div>
    </>
  );
};

export default Light;
