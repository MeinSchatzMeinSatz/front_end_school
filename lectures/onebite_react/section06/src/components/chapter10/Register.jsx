// useRef로 컴포넌트의 변수 생성하기
import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  const countRef = useRef(0);
  // console.log("register rendering"); // ⭐️ useRef를 변경한다고 재랜더링 되지 않음
  const inputRef = useRef();

  let count = 0; // ⭐️이렇게 쓰면 안되나? => 이벤트 핸들러 안에 넣었을 경우, 컴포넌트가 리렌더링 되면서 해당 변수의 값이 초기화 된다. 그러므로 1만 계속 출력되는 결과가 발생할 것.

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current); // 이렇게 출력하면 몇번 변경했는지 확인할 수 있다.
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // ⭐️ 이름을 입력하는 DOM 요소에 포커스
      // DOM 요소에 접근하기 위해서 useRef를 사용하면 된다.
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <button onClick={onChange}>ref + 1</button>

      <div>
        <input
          ref={inputRef}
          name="name"
          type="text"
          placeholder="이름"
          onChange={onChange}
          value={input.name}
        />
      </div>

      <div>
        <input type="date" onChange={onChange} name="birth" />
      </div>

      <div>
        <select onChange={onChange} name="nation">
          <option value=""></option>
          <option value="korea">한국</option>
          <option value="USA">미국</option>
          <option value="japan">일본</option>
          <option value="germany">독일</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChange} name="bio"></textarea>
      </div>

      {/* 제출버튼 */}
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
