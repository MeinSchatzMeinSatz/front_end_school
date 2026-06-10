// 배열 메서드3: 변형

// 5가지의 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr1 = [
  { name: "이채준", hobby: "running" },
  { name: "홍길동", hobby: "running" },
  { name: "허심청", hobby: "diving" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "running");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하며, 각각 콜백함수를 실행해서 그 결과값을 모아 새로운 배열로 반환.
let arr2 = [1, 2, 3];
let mappedArr = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

console.log(mappedArr);

let names = arr1.map((item) => item.name);

console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3);

let arr4 = [10, 3, 5];
arr4.sort();

console.log(arr4);

// 오름차순
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라 -> b, a
    return 1;
  } else if (a < b) {
    // a가 b 앞에 와라 -> a, b
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라 (ex: 10과 10을 비교하는경우)
    return 0;
  }
});

console.log(arr4);

// 내림차순
arr4.sort((a, b) => {
  if (a > b) {
    // a가 b 앞에 와라 -> a, b
    return -1;
  } else if (a < b) {
    // b가 a 앞에 와라 -> b, a
    return -1;
  } else {
    // 두 값의 자리를 바꾸지 마라 (ex: 10과 10을 비교하는경우)
    return 0;
  }
});

console.log(arr4);

// 4. toSorted(가장 최근에 추가된 최신 함수)
// 원본 배열 자체를 정렬하기 보단, 원본 배열을 내버려두고, 새로운 배열을 반환
let arr6 = ["c", "a", "b"];
const sorted = arr6.toSorted();

console.log(arr6);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 반환하는 메서드
let arr7 = ["Hi", "I am", "이채준"];
const joined = arr7.join(" ");

console.log(joined);
