// 3가지 hook 관련된 팁
// 1. hook은 반드시 함수 컴포넌트 내부나, 커스텀 훅 내부에서만 호출이 가능하다.
// 2. 조건문 내 혹은 반복문 내에서 훅은 호출될 수 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

import { useState } from "react";
import useInput from "./hooks/useInput";

// const state = useState(); // ...1

// function useInput() {
//   // 3.
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

const Hook = () => {
  // 2.
  // if (true) {
  //   const state = useState();
  // }

  // for (let i = 0; i < 10; i++) {
  //   const state2 = useState();
  // }

  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <input type="text" value={input2} onChange={onChange2} />
    </div>
  );
};

export default Hook;
