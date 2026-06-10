// 배열
// 여러개의 값을 "순차적"으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴(대부분 사용)

let arrC = [1, 2, 3];
console.log(arrC);

// 배열에는 어떤 타입의 값이든 저장이 가능하다.
// 길이도 상관없다.
let arrD = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];

// 2. 배열 요소 접근(인덱스를 이용해서 배열 요소에 접근한다.)
let item1 = arrD[0];
let item2 = arrD[1];

console.log(item1, item2);

arrD[0] = "hello";
console.log(arrD);
