/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법은
// 자바스크립트) 이 함수가 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는 것.

// 타입스크립트) 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기하는 것.
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수
 */

const add = (a: number, b: number): number => {
  return a + b;
};

/**
 * 함수의 매개변수
 */

function intro(name = "이채준", age?: number) {
  console.log(`name: ${name}`);
  if (typeof age === "number") {
    console.log(`age: ${age - 10}`);
  }
}

// intro(1); // ❗️
intro("이정환"); // 선택적 매개변수를 설정해서 생략할 수 있다.

// 선택적 매개변수는 필수 매개변수의 앞에 오면 안된다.
// function intro2(name = "이채준", age?: number, tall: number) { // ❗️
//   console.log(`name: ${name}`);
//   if (typeof age === "number") {
//     console.log(`age: ${age - 10}`);
//   }
// }

/**
 * rest parameter(나머지 매개변수) 타입정의하기
 */

function getSum(...args: number[]) {
  let sum = 0;
  args.forEach((item) => (sum += item));
}

getSum(1, 2, 3); // 6
getSum(1, 2, 3, 4, 5); // 15

function getSum2(...args: [number, number, number]) {
  let sum = 0;
  args.forEach((item) => (sum += item));
}

getSum2(1, 2, 3);
// getSum2(1, 2, 3, 4, 5); // ❗️
