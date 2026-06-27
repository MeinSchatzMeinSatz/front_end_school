/**
 * 제네릭
 */

// 같은 형식의 함수에 여러 타입의 파라미터를 집어넣고 싶다면?
// 1. any 를 사용하면 된다.(비추천)
function func(value: any) {
  return value;
}

let num1 = func(10);
// 타입 좁히기를 통해 number에서 사용하는 메서드를 사용한다.
if (typeof num1 === "number") {
  num1.toFixed();
}
let bool1 = func(true);
let str1 = func("string");

// 2. generic 을 사용한다.(추천)
// 제네릭: 일반적인, 포괄적
// 즉 제네릭 함수는 모든 함수에 두루두루 쓰이는 함수

function funcG<T>(value: T): T {
  // T 라는 타입 변수를 지정해준다.
  return value;
}

// 위에서 any 로 추정되었던과 비교해서 타입이 잘 추론되는 아래의 사례들.
let num2 = funcG(10);
let bool2 = funcG(true);
let str2 = funcG("hello");

// 제네릭 함수에서 타입은 함수가 호출되는 시점에 결정된다.

let arr2 = funcG<[number, number, number]>([1, 2, 3]); // 튜플 타입으로 추론된다.
