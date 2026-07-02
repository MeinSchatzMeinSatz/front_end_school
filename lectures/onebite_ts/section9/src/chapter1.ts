/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>; // 이렇게 타입 변수에 유니언 타입을 넣으면 기존의 동작방식과 차이가 있다. 두 가지 타입이 분산되어서 들어간다. 각 타입의 결과를 유니언으로 묶어준다.

// 복습
let d: StringNumberSwitch<boolean | number | string>;

// 실용적인 예제1
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 결과적으로 string 타입만 제거한 결과를 도출 => number | boolean

// 실용적인 예제2
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;

// 분산 방지도 가능
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let e: StringNumberSwitch2<number | string>;
