/**
 * interface의 선언 합침
 */

// 기존의 type으로는 동일한 타입을 두번 선언할 수 없다.
type Person = {
  name: string;
};

// type Person = {
//   age: number;
// };

// 하지만 interface는 중복 선언이 가능
interface Animal {
  isRun: boolean;
}

interface Animal {
  // isRun: string;
  isFly: boolean;
}
// 그 이유는 동일한 이름으로 선언된 interface는 결국 합쳐지기 때문
// 하지만 중복된 프로퍼티의 타입이 달라지는 경우는 불허
// 반면 상속의 경우에는 동일한 프로퍼티의 타입이 달라지는 것이 가능했어.

const aniaml: Animal = {
  isRun: true,
  isFly: false,
};

// 모듈 보강이라는 작업을 할때 사용하는 기능
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello", // 이것을 모듈 보강이라고 한다.
};
