/**
 * 타입 변수 응용하기
 */

/**
 * 첫번째 사례 - 여러 개의 타입 변수를 사용하기
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [x, y] = swap(1, 2);
const [a, b] = swap("1", 2);

/**
 * 두번째 사례 - 배열에서의 활용
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0]; // T에 할당된 데이터 타입을 함수 내에선 unknown으로 추정 => unknown[]으로 처리하자.
}

let num = returnFirstValue([0, 1, 2]); // 0

let str = returnFirstValue([1, "hello", "mynameis"]); // "hello"

/**
 * 세번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("12345"); // 5
let var3 = getLength({ length: 10 }); // 10
let var4 = getLength(10); // ❗️
