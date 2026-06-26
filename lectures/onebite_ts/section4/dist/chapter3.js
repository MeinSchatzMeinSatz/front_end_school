/**
 * 함수 오버로딩
 *
 * 동일한 구조의 함수의 매개변수의 개수나 타입에 따라 별도로 정의하는 것
 * -> 하나의 함수 func
 * -> 모든 매개변수의 타입 number
 * -> ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
 * -> Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값을 출력
 */
// 함수의 실제 구현부를 제작 -> [구현 시그니처]
function func(a, b, c) {
    if (typeof b === "number" && typeof c === "number") {
        return a + b + c;
    }
    else {
        return a * 20;
    }
}
// func(); // ❗️
console.log(func(1));
// func(1, 2); // ❗️
console.log(func(1, 2, 3));
export {};
