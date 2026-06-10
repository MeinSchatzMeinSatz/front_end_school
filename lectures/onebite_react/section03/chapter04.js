// Spread 연산자와 Rest 매개변수
// 1. Spread 연산자 : 흩뿌리다, 펼치다
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];

console.log(arr2);

// 위처럼 인덱스로 배열을 펼쳐놓는 것은 위험하다.
// 기존에 사용하던 배열이 변형되는 위험이 있기 때문이다.

// => spread 연산자를 사용해서 안전하게 배열을 펼쳐놓을 수 있다.
let arr3 = [4, ...arr1, 5, 6];

console.log(arr3);

// 마찬가지로 객체에서도 spread 연산자를 사용할 수 있다.
let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

console.log(obj2);

// 함수 호출시에도 사용할 수 있다.
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. REST 매개변수
// -> REST 나머지, 나머지 매개변수

function funcB(...rest) {
  console.log(rest);
}

funcB(...arr1);
