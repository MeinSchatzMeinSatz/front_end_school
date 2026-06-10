// 객체2

// 1. 상수 객체
const animal = {
  type: "cat",
  name: "navi",
  color: "black",
};

// animal = { a: 2 }; // Assignment to constant variable
animal.age = 2; // 추가
animal.name = "땡칠"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 프로퍼티를 상수에다 저장하더라도 프로퍼티를 추가, 수정, 삭제하는 것은 가능하다.

// 2. 메서드
// -> 값이 함수인 프로퍼티를 의미함
const person = {
  name: "이채준",
  // 메서드
  sayHi: function () {
    console.log("안녕하세요.");
  },
};

person.sayHi();
person["sayHi"]();
// 메서드를 통해 객체의 동작을 설명?
