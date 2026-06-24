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
// tuple도 배열로 인식하므로 배열 메서드를 사용할 떄 별 오류가 발생하지 않는다. -> 각별히 유의!
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();
// 그래서 튜플은 언제 사용하는데?
const users = [
    ["이정환", 1],
    ["이채준", 2],
    ["박아무개", 3],
    // [4, "최아무개"], // ❗️
];
export {};
// 튜플 타입을 사용해서 배열안에 들어가는 값의 타입을 순서대로 맞춰줄 수 있다.
