import { useState } from "react";

const Register = () => {
  // 여러 개의 state로 관리하던 상태들을 한 개의 객체로 관리하는 방법

  const [input, setInput] = useState({
    name: "",
    birth: "",
    nation: "",
    bio: "",
  });

  // 통합된 이벤트 헨들러
  // 통합된 이벤트 핸들러를 각 요소에 적용
  // 각각의 input 요소에 name이라는 속성을 넣어준다.
  const onChange = (e) => {
    console.log(e.target.name, e.target.value);

    setInput({
      ...input,
      [e.target.name]: e.target.value, // ⭐️객체의 괄호 표기법
    });
  };

  return (
    <div>
      <div>
        {/* 이름을 입력받는 폼 */}
        <input
          name="name"
          type="text"
          placeholder="이름"
          onChange={onChange}
          value={input.name}
        />
        {/* {input.name} */}
      </div>

      <div>
        {/* 생년월일 */}
        <input type="date" onChange={onChange} name="birth" />
        {/* {input.birth} */}
      </div>

      <div>
        {/* 국적 */}
        <select onChange={onChange} name="nation">
          <option value=""></option>
          <option value="korea">한국</option>
          <option value="USA">미국</option>
          <option value="japan">일본</option>
          <option value="germany">독일</option>
        </select>
        {/* {input.nation} */}
      </div>

      <div>
        {/* 자기소개 */}
        <textarea value={input.bio} onChange={onChange} name="bio"></textarea>
      </div>
    </div>
  );
};

export default Register;
