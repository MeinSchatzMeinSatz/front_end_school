/**
 * 조건부 타입
 * 삼항 연산자를 사용해서 타입을 지정 및 할당
 */

// 기본 문법
type A = number extends string ? string : number;

// 예제1
type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭과 조건부 타입 1
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

// 제네릭과 조건부 타입 2
function removeSpaces(text: string | undefined | null) {
  if (typeof text === "string") return text.replaceAll(" ", "");
  else return undefined;
}

let result = removeSpaces("hi im chae jun");

console.log(result);
// result.toUpperCase(); // ❗️undefined 일 수 있으므로 해당 메서드 사용불가

// 함수오버로딩과 함께 조건부 타입 적용
function removeSpaces2<T>(text: T): T extends string ? string : undefined;
function removeSpaces2<T>(text: any) {
  if (typeof text === "string") return text.replaceAll(" ", "");
  else return undefined;
}

let result2 = removeSpaces2("hi im leechae jun");

let result3 = removeSpaces2(undefined);
