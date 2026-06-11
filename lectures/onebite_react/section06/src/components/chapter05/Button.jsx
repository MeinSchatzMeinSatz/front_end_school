import React from "react";

/**
 * 정리 포인트
 * 이벤트 핸들러의 개념
 * - onClick, onMouseEnter 등등
 * 합성 이벤트 객체의 개념
 * - 기본적으로 주어지는 어느 브라우저에서나 사용할 수 있는 이벤트 객체
 */

const Button = ({ text }) => {
  // 2️⃣ 이벤트 객체 e
  const onClickButton = (e) => {
    console.log(e); // SynteticBaseEvnet: 여러 브라우저의 규격을 참고해서 하나의 에벤트 객체를 포맷팅 해주는 기능. 즉 모든 브라우저에서 이용할 수 있는 표준화된 이벤트 객체다.
    console.log(text);
  };

  return (
    <button
      // onClick={() => {
      //   console.log(text);
      // }}
      onClick={onClickButton} // 1️⃣ 클릭(이벤트)를 다루는 이벤트 핸들러
      onMouseEnter={() => {
        console.log(`${text}에 관심 있나요?`);
      }} // 마우스를 올렸을때(이벤트)를 발생할 이벤트 처리
    >
      {text}
    </button>
  );
};

export default Button;
