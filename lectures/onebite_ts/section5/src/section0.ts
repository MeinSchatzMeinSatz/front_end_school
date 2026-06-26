/**
 * 인터페이스
 *
 * 상호간에 약속된 규칙
 * 인터페이스란 타입 별칭과 동일하게 타입에 이름을 지어주는 또 다른 문법이다.
 * + 특히 객체의 구조를 정의하는데 특화된 문법(상속, 합침 등의 특수한 기능 제공)
 */

interface Person {
  readonly name: string;
  age?: number;
  // sayHi: () => void; // ✅
  sayHi(): void; // 호출 시그니처로도 정의 가능
  sayHi(a: number, b: number): void; // ✅ 호출 시그니처를 사용하면 함수 오버로딩이 가능하다.
}

const person: Person = {
  name: "leechaejun",
  // age: 31,
  sayHi: () => {
    console.log("Hi");
  },
};

// person.name = "홍길동" // ❗️

person.sayHi();
person.sayHi(1, 2);

/**
 * interface로 만든 타입은 union 타입이나 intersection 이 안된다. 따라서 별도의 타입에 붙여줘야 한다.
 */
type Type1 = number | string | Person;
type Type2 = number & string & Person;
