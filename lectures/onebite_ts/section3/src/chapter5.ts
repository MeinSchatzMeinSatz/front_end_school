/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입 / 교집합 타입
 */

/**
 * 1. 합집합 - Union 타입
 */

// 숫자도 문자도 할당 가능하다.
let a: string | number | boolean;
a = 1;
a = "hello";

a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// 객체 타입을 활용한 유니언 타입
type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "kii",
  color: "black",
};

let union2: Union1 = {
  name: "철수",
  language: "korean",
};

let union3: Union1 = {
  name: "angdu",
  color: "red",
  language: "korean",
};

// let union4: Union1 = { // ❗️
//   name: "kiku",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // : never

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "haha",
  color: "black",
  language: "korean",
};
