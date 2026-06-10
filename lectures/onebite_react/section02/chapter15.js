// 객체 1
/**
 * - 원시 타입이 아닌 객체 타입의 자료형.
 * - 여러가지 값을 동시에 저장할 수 있는 자료형을 의미한다.
 *
 * 현실 세계에 존재하는 어떤 사물이나 개념을 표현하기 용이하다.
 */

// 1. 객체 생성 방법
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이채준",
  age: 31,
  hobby: "running",
  job: "FE developer",
  extra: {},
  10: 20,
  "like cat": true,
};
// key: value의 형식으로 데이터를 저장한다.

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근하는 법(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3-2. 새로운 프로퍼티를 추가하는 방법
person.job = "FE developer";

person["favoriteFood"] = "Guksoo";

console.log(person);

// 3-3. 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "KimchiJigae";

console.log(person);

// 3-4. 프로퍼티를 삭제하는 법
delete person.job;
delete person["favoriteFood"];
console.log(person);

// 3-5. 프로퍼티의 존재 유무를 확인하는 방법(in 연산자)
let result1 = "name" in person;
console.log(result1);

let result2 = "favoriteFood" in person;
console.log(result2);
