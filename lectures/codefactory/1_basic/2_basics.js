"use strict";
/**
 * Types
 */
Object.defineProperty(exports, "__esModule", { value: true });
let helloText = "Hello";
// helloText = true;
/**
 * JS에 존재하는
 * 7개의 타입
 */
const stringVar = "String";
const numberVar = 3;
const bigIntVar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입
 */
// any: 아무 타입이나 입력할 수 있는 치트키같은 타입
// any를 남용하지 않는 방법 깨우치게 될 것.
let anyVar;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;
// any는 다른 타입의 변수에 들어갈 수 있다.
let testNumber = anyVar;
let testString = anyVar;
let testBoolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = "codeFactory";
unknownType = true;
// 1. unknown은 다른 타입의 변수에 들어갈 수 없다.
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
// 2. unknown이나 any 타입에는 들어갈 수 있다.
let unknowType2 = unknownType;
let anyType2 = unknownType;
// never - 어떤한 값도 저장되거나 반환되지 않을 때 사용하는 타입 -> 함수 파트에서 학습할 예정.
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList = [true, false, false, true];
//# sourceMappingURL=2_basics.js.map