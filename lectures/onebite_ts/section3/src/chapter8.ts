/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기한다.
 */

type Person = {
  name: string;
  age: number;
};

/**
 * @param value
 * value => number: toFixed()
 * value => string: toUppercase()
 * value => Date: getTime()
 * value => Person: name은 age살입니다.
 */
// value => number: toFixed()
// string => string: toUpperCase()
// value =>
function func(value: number | string | Date | null | Person) {
  value; // value = number | string
  // value.toFixed(); // ❗️
  // value.toUpperCase(); // ❗️

  // 1️⃣ typeof 가드
  if (typeof value === "number") {
    console.log(value.toFixed()); // value = number
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // value = string
  } // 2️⃣ instanceof 가드 (왼쪽의 값이 Date에 속하는 값인지 확인)
  else if (value instanceof Date) {
    console.log(value.getTime());
  } // 3️⃣ in 연산자를 통해 특정 프로퍼티가 해당 객체에 있는지 확인
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
