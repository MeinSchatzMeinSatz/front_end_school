/**
 * 배열
 */
let numArr = [1, 2, 3];
let strArr = ["hello", "i am", "Chaejun"];
let boolArr1 = [true, false, true];
let boolArr2 = [true, false, true]; // 제네릭 문법
// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr = [1, "hello"]; // 유니온 타입
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
]; // number 타입의 배열을 저장하는 배열
/**
 * 튜플
 * 길이와 타입이 고정된 배열
 */
let tup1 = [1, 2];
// tup1 = [1, 2, 3]; // ❗️
// tup1 = ["1", "2", "3"]; // ❗️
let tup2 = [1, "2", true];
export {};
