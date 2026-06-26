/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는지 여부
 * 2. 매개변수의 타입이 호환되는지 여부
 */
let a = () => 10; // number Type
let b = () => 10; // number Literal Type
a = b; // ✅ 업캐스팅은 가능
let c = (value) => { };
let d = (value) => { };
// c = d; // ❗️ 업캐스팅일때 호환안됨
d = c; // ✅ 다운캐스팅일때 호환됨
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.name);
    console.log(dog.color);
};
// 프로퍼티 개수의 문제?
// animalFunc = dogFunc; // ❗️ 업캐스팅일때 호환안되는 이유.
dogFunc = animalFunc; // ✅ 다운캐스팅일때 호환되는 이유.
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2; // ✅
export {};
// func2 = func1; // ❗️ 매개변수가 적은 곳에 매개변수가 많은 것을 할당하는 것은 불가능
