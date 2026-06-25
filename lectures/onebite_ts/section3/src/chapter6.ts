/**
 * 타입 추론
 * 변수의 초깃값을 해당 변수의 타입으로 추론
 */

let a: number = 10; // 명시적 타입선언
let b = 10;

// b = "hello"; // 타입을 추론해서 number로 간주

let c = "hello";

// c = 2 // 타입을 추론해서 string으로 간주

let d = {
  id: 1,
  name: "chaejun",
  profile: {
    nickname: "liebeCode",
  },
  url: ["https://velog.io/@liebe_code/posts"],
}; // 변수 d에 호버했을 때 타입 추론이 이루어지는 것을 확인할 수 있다.

let { id, name, profile } = d;

let [one, two, three] = [1, "hello", true];

function func1() {
  // 함수는 반환값을 기준으로 타입을 추론한다.
  return "hello";
}

function func2(message = "hello") {
  // 매개변수의 기본값을 바탕으로 타입을 추론
  return "hello";
}

/**
 * 조금 당황스러운 케이스 -> any 타입의 진화
 */

let e; // any 로 추론
e = 10; // number로 진화
e.toFixed();
// e.toUppperCase();

e = "hello"; // string으로 진화
e.toUpperCase();
// e.toFixed();

/**
 * const 로 선언한 변수는 타입이 해당 리터럴 타입으로 선언된다.
 * 어차피 상수이므로 해당 리터럴 타입으로 선언된다.
 */
const num = 10;
const str = "hello";

let arr = [1, "string"];
