/**
 * JSX 주의사항
 * 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.(for문이나 if문은 못 들어감)
 * 2. 숫자, 문자열, 배열의 값만 정상적으로 렌더링 된다.
 * 3. 모든 태그는 닫혀있어야 한다.
 * 4. 최상위 태그는 반드시 하나여야 한다.
 */

const Practice1 = () => {
  const number = 9;
  const obj = { a: 1 };

  return (
    <main>
      <h1>main 입니다.</h1>
      <h2>중괄호 안에 숫자를 넣을 수 있고: {number}</h2>
      <h2>이렇게 연산도 가능하고: {number + 10}</h2>
      <h2>
        삼항 연산자를 넣는 것도 가능하다: {number % 2 === 0 ? "짝수" : "홀수"}
      </h2>
      {/* 숫자, 문자열, 배열의 값만 정상적으로 렌더링 된다. */}
      <p>변수: {number}</p>
      <p>배열: {[1, 2, 3]}</p>
      <p>불리언: {true}</p>
      <p>undefined: {undefined}</p>
      <p>null: {null}</p>
      {/* <p>객체: {obj}</p> */}
      <p>객체의 값은 가능: {obj.a}</p>
    </main>
  );
};

export default Practice1;
