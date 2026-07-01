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
