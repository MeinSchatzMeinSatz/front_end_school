/**
 * Types
 */

let helloText: string = "Hello";
// helloText = true;

/**
 * JS에 존재하는
 * 7개의 타입
 */
const stringVar: string = "String";
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any: 아무 타입이나 입력할 수 있는 치트키같은 타입
// any를 남용하지 않는 방법 깨우치게 될 것.
let anyVar: any;
anyVar = 100;
anyVar = "코드팩토리";
anyVar = true;

// any는 다른 타입의 변수에 들어갈 수 있다.
let testNumber: number = anyVar;
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = "codeFactory";
unknownType = true;

// 1. unknown은 다른 타입의 변수에 들어갈 수 없다.
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
// 2. unknown이나 any 타입에는 들어갈 수 있다.
let unknowType2: unknown = unknownType;
let anyType2: any = unknownType;

// never - 어떤한 값도 저장되거나 반환되지 않을 때 사용하는 타입 -> 함수 파트에서 학습할 예정.

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ["아이브", "레드벨벳", "블랙핑크"];
const booleanList: boolean[] = [true, false, false, true];
