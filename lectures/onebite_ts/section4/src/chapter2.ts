/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는지 여부
 * 2. 매개변수의 타입이 호환되는지 여부
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number Type
let b: B = () => 10; // number Literal Type

a = b; // ✅ 업캐스팅은 가능
// b = a; // ❗️ 다운캐스팅이 불가.

// 기준2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // ❗️ 업캐스팅일때 호환안됨
d = c; // ✅ 다운캐스팅일때 호환됨

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 프로퍼티 개수의 문제?
// animalFunc = dogFunc; // ❗️ 업캐스팅일때 호환안되는 이유.
dogFunc = animalFunc; // ✅ 다운캐스팅일때 호환되는 이유.

// 2-2. 매개변수의 개수가 다를 때(적어도 타입이 같은 매개변수여야 함.)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2; // ✅
// func2 = func1; // ❗️ 매개변수가 적은 곳에 매개변수가 많은 것을 할당하는 것은 불가능
