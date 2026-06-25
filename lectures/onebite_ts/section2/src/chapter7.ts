/**
 * void와 Never 타입
 */

// void -> 공허
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
} // 이렇게 아무것도 반환하지 않는 함수의 타입을 void로 정하면 된다.

let a: void;
// a = 1; // ❗️
// a = "hello"; // ❗️
// a = {}; // ❗️
a = undefined; // void 타입의 값에는 undefined만 할당할 수 있다.

// never
// never -> 존재하지 않는
// 불가능한 타입

function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
// 아무런 값도 담을 수 없는 타입
