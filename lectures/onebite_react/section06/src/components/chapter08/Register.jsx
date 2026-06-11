// 간단한 회원가입 폼
/**
 * 1. 이름
 * 2. 생년월일
 * 3. 국적
 * 4. 자기소개
 */
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("이름");
  const [birth, setBirth] = useState("");
  const [nation, setNation] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChangeNation = (e) => {
    setNation(e.target.value);
  };

  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        {/* 이름을 입력받는 폼 */}
        <input
          type="text"
          placeholder="이름"
          onChange={onChangeName}
          value={name}
        />
        {/* {name} */}
      </div>

      <div>
        {/* 생년월일 */}
        <input type="date" onChange={onChangeBirth} />
        {/* {birth} */}
      </div>

      <div>
        {/* 국적 */}
        <select onChange={onChangeNation}>
          <option value=""></option>
          <option value="korea">한국</option>
          <option value="USA">미국</option>
          <option value="japan">일본</option>
          <option value="germany">독일</option>
        </select>
        {/* {nation} */}
      </div>

      <div>
        {/* 자기소개 */}
        <textarea value={bio} onChange={onChangeBio}></textarea>
        {bio}
      </div>
    </div>
  );
};

export default Register;
