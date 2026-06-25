/**
 * 1. unknown
 * 2. never
 * 3. void
 * 4. any
 */

/**
 * unknown 타입
 * -> 전체 집합
 */

function unknownExam() {
  // 모든 타입의 값을 할당할 수 있다.
  // (업캐스팅은 모두 허용)
  let a: unknown = 1;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // (다운캐스팅은 불가)
  // let num: number = unknownVar; // ❗️
  // let str: string = unknownVar; // ❗️
  // let bool: boolean = unknownVar; // ❗️
}

/**
 * never 타입
 * -> 모든 타입의 서브 타입
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업캐스팅은 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운캐스팅은 불가능
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 * 포인트: void 타입은 undefined 타입의 슈퍼 타입이다.
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  // 업캐스팅은 당연히 가능
  let voidVar: void = undefined;
  function voidFunc2(): void {
    return undefined;
  } // 이것도 가능
}

/**
 * any 타입
 */

function anyExam(): any {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 업캐스팅이 가능하네.

  undefinedVar = anyVar; // 다운캐스팅이 가능하다.

  // neverVar = anyVar; // ❗️ 이건 안됨
} // => 타입 계층도를 무시하는 치트키다.
