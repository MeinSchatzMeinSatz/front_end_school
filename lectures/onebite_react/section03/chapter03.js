// 구조분해할당
// 배열이나 객체에 저장된 값을 분해해서 각각의 변수에 할당하는 문법

// 1. 배열의 구조분해 할당
let arr = [1, 2, 3];

// 기존의 방식
// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 구조분해할당
let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조분해할당
let person = {
  name: "이채준",
  age: 31,
  hobby: "running",
};

// 기존의 방식
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

// 구조분해할당
let { name, age: myAge, hobby, extra = "hello" } = person; // 중괄호를 통해 할당
console.log(name, myAge, hobby, extra);

// 함수에 여러 인수들을 전달할때 자주사용한다.

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra = "hello" }) => {
  console.log(name, age, hobby, extra);
};

func(person);

// 객체를 인수로 넘겼을때만 구조분해할당을 통해서 변수에 값을 할당할 수 있다.
