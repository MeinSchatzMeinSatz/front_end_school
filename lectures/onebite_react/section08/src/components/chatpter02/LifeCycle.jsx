import { useState, useEffect, useRef } from "react";
import Even from "./Even";

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  const isMount = useRef(false);

  // 1. 마운트: 탄생 -> 빈 배열을 전달
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트: 변화, 리렌더링 -> 배열없이
  useEffect(() => {
    // 진짜 업데이트 되었을떄 만 렌더링 되도록 설정(useRef를 사용)
    if (!isMount.current) {
      isMount.current = true;
      return;
    }

    console.log("update");
  });

  // 3. 언마운트: 죽음

  return (
    <>
      <p>현재 숫자:</p>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      {count % 2 === 0 ? <Even /> : null}
    </>
  );
};

export default LifeCycle;
