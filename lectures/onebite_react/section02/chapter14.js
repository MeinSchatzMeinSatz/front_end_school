// 스코프란?
/**
 * 우리말로 '범위'를 뜻한다.
 * 변수나 함수에 접근하거나 호출할 수 있는 범위를 말한다.
 *
 * 변수나 함수의 제약범위를 의미한다.
 */

/**
 * 전역 스코프와 지역 스코프
 * -> 전역 스코프: 전체 영역에서 접근 가능
 * -> 지역 스코프: 특정 영역에서만 접근 가능
 */

let a = 1; // 전역 스코프를 갖는 변수

function funcA() {
  let b = 2; // 지역 스코프를 갖는 변수(funcA라는 범위 안에서만)
  console.log(a);
}

funcA();
// console.log(b); // b is not defined

if (true) {
  let c = 1; // 이것도 지역 스코프
}

// console.log(c); // c is not defined

for (let i = 0; i < 10; i++) {
  let d = 1;
  function funcB() {
    console.log("I am FuncB");
  }

  let funcC = () => {
    console.log("I am FuncC");
  };
}

funcB();
// funcC(); // funcC is not defined

// console.log(d); // d is not defined

// 반복문이나 조건문처럼 중괄호({})안에 선언된 모든 변수들은 지역 스코프를 갖기 때문에 중괄호 밖에서는 접근할 수 없다.
// 함수 또한 변수처럼 지역스코프를 갖게 된다. (단, 함수 선언문의 경우 조건문이나 반복문 제외)
// 함수선언문은 함수 선언 안에서만 지역스코프를 갖게된다.
