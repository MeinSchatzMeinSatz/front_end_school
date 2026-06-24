// number
let num1: number = 123;
// type annotation(주석)
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1 = "hello"; // ❗️
num1.toFixed();

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1 = 123; // ❗️
str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// let numA: number = null; // ❗️ -> strictNullChecks

/**
 * 리터럴 타입
 * 리터럴 -> 값
 */

// string, number 처럼 범용적으로 많은 값을 포함하는 타입 뿐만 아니라 하나의 값만 포함하는 타입도 존재한다. 따라서 아래와 같이 타입을 숫자 10으로 설정하는 것 또한 가능하다.
let numA: 10 = 10;
// numA = 12; // ❗️

let strA: "hello" = "hello";
// strA = "world"; // ❗️

let boolA: true = true;
// boolA = false; // ❗️
