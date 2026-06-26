/**
 * 함수 타입 표현식(function type expression)
 */

const add1 = (a: number, b: number): number => a + b;

type Operation = (a: number, b: number) => number;

const add2: Operation = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;
const multi: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

const add3: (a: number, b: number) => number = (a, b) => a + b;

/**
 * 호출 시그니처(콜 시그니처)
 * 함수 타입 표현식과 동일한 역할을 한다.
 *
 * 자바스크립트의 함수도 결국 객체이므로, 객체 형태로 저장할 수 있는 것.
 */

type Operation2 = {
  (a: number, b: number): number;
};

const sub2: Operation2 = (a, b) => a - b;
const multi2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

/**
 * 하이브리드 타입
 */
