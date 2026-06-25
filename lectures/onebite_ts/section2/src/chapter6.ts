/**
 * any와 unknown
 */

// any
// 동적 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "Hello";

anyVar = true;
anyVar = [];
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;
// any는 타입스크립트의 타입 검사를 어떻게든 통과하는 치트키 => 타입 검사를 안하는 것과 같음.(런타임에서야 오류가 발생)

// unknown
let unknownVar: unknown;
unknownVar = 1;
unknownVar = "";
unknownVar = () => {};

// num = unknownVar; // any 타입은 number 타입에 할당할 수 있었던 반면, unknown 타입인 할당할 수 없다.
// unknownVar.toUpperCase(); // ❗️

if (typeof unknownVar === "number") {
  // 타입 정제 과정을 거쳐야 한다.
  num = unknownVar;
}
