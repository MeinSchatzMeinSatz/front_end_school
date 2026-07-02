// 2. keyof 연산자
interface Person {
  name: string;
  age: number;
  isOld: boolean;
}

type PersonKey = keyof Person;
// 실제로는 이런 의미:
// type PersonKey = "name" | "age" | "isOld"
// 즉, `keyof Person`을 실행해서 Person 인터페이스의 키 이름들을 뽑아서 문자열 리터럴 유니온 타입으로 만들어 준다.

const personkey: PersonKey = "isOld";

// person의 타입은 Person으로 쉽게 정해줄 수 있다.
// 하지만 person의 key값에 대해서 타입을 정해줄땐 keyof 연산자를 사용하면 된다.
function getPropertyKey(person: Person, key: PersonKey) {
  return person[key];
}

const person: Person = {
  name: "이채준",
  age: 31,
  isOld: false,
};

console.log(getPropertyKey(person, "name")); // 이채준

// typeof 연산자와 적용

const person2 = {
  name: "이채준",
  age: 31,
  isOld: false,
};

type Person2 = typeof person2;

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}
