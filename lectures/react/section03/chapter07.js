// 배열 메서드1 : 요소 조작

// 6가지 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);

console.log(arr1);

const newLength = arr1.push(5, 6, 7);

console.log(arr1); // 변경된 배열의 길이를 반환
console.log(newLength);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 그 값을 반환
const poppedItem = arr1.pop();

console.log(poppedItem);
console.log(arr1);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem);
console.log(arr3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const unshiftedItem = arr4.unshift(0);

console.log(unshiftedItem); // 변경된 배열의 길이를 반환
console.log(arr4);

// shift, unshift vs. push, pop

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
const slicedItem = arr5.slice(2, 5);
const slicedItem2 = arr5.slice(2);
const slicedItem3 = arr5.slice(-3);

console.log(slicedItem);
console.log(slicedItem2);
console.log(slicedItem3);
// 단 slice로 잘라내도 원본 배열의 값은 바뀌지 않는다.

// 6. concat
// 두개의 서로다른 배열을 이어 붙여서 새로운 배열을 반환하는 메서드
arr6 = [1, 2];
arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
