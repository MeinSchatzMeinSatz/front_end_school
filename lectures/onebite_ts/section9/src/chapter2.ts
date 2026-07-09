/**
 * infer
 * inference: 추론하다.
 */

type FuncA = () => string;
type FuncB = () => number;

// 이 Func 타입의 반환값에 해당하는 타입만 가져오려면 어떻게 해야 할까?

type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;

type ReturnTypeB<T> = T extends () => infer R ? R : never;

type C = ReturnTypeB<FuncA>;
type D = ReturnTypeB<FuncB>;

type E = ReturnTypeB<number>;

/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;

type PromiseB = PromiseUnpack<Promise<string>>;
