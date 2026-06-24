// number
let num1 = 123;
// type annotation(주석)
let num2 = -123;
let num3 = 0.123;
let num4 = -0.123;
let num5 = Infinity;
let num6 = -Infinity;
let num7 = NaN;
// num1 = "hello"; // ❗️
num1.toFixed();
// string
let str1 = "hello";
let str2 = "hello";
let str3 = `hello`;
let str4 = `hello ${num1}`;
// str1 = 123; // ❗️
str1.toUpperCase();
// boolean
let bool1 = true;
let bool2 = false;
// null
let null1 = null;
// undefined
let undefined1 = undefined;
// let numA: number = null; // ❗️ -> strictNullChecks
/**
 * 리터럴 타입
 * 리터럴 -> 값
 */
// string, number 처럼 범용적으로 많은 값을 포함하는 타입 뿐만 아니라 하나의 값만 포함하는 타입도 존재한다. 따라서 아래와 같이 타입을 숫자 10으로 설정하는 것 또한 가능하다.
let numA = 10;
// numA = 12; // ❗️
let strA = "hello";
// strA = "world"; // ❗️
let boolA = true;
export {};
// boolA = false; // ❗️
