// 1. 함수 표현식
// 함수 선언문을 변수에 할당하기
// 특징: 호이스팅의 대상이 되지 않는다.
// varA();
// varB();

function funcA() {
  console.log("funcA");
}

let varA = funcA;
varA();

// 함수 선언과 동시에 변수에 할당하기(함수 표현식)
let varB = function funcB() {
  console.log("funcB");
};

varB();

// 2. 화살표 함수
let varC = (value) => value + 1;
console.log(varC(10));

let varD = (value) => {
  console.log(value);
  return value + 1;
};

varD(10);
