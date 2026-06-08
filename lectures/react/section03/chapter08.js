// 배열 메서드2: 순회와 탐색
// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);

// 탐색과 관련된 메서드
// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(1);
let isInclude2 = arr2.includes(10);

console.log(isInclude);
console.log(isInclude2);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3, 2];
let idx = arr3.indexOf(2);
let idx2 = arr3.indexOf(5);

console.log(idx); // 동일한 값이 배열에 있다면 첫번째 index를 반환
console.log(idx2);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 첫번째 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});
const findedIndex2 = arr4.findIndex((item) => item % 2 !== 0);
const findedIndex3 = arr4.findIndex((item) => item % 2 === 999);

console.log(findedIndex);
console.log(findedIndex2);
console.log(findedIndex3);

// ❗️객체 타입의 값을 가진 데이터의 인덱스를 찾기 위함
let objectArr = [{ name: "이채준" }, { name: "홍길동" }, { name: "허심청" }];

console.log(objectArr.indexOf({ name: "이채준" })); // -1 반환
console.log(objectArr.findIndex((item) => item.name === "이채준")); // 0 반환

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾아, 요소를 그대로 반환
let arr5 = [{ name: "이채준" }, { name: "홍길동" }, { name: "허심청" }];

const found = arr5.find((item) => item.name === "홍길동");

console.log(found);
