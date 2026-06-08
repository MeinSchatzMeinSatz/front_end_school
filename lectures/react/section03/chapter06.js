// 반복문으로 배열과 객체 순회하기

// 1. 예시 배열
let numbers = [1, 2, 3];

// 1.1 배열의 인덱스 (인덱스정보o)
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 1.2 for of 반복문(인덱스정보x)
for (number of numbers) {
  console.log(number);
}

// 2. 예시 객체
let person = {
  name: "이채준",
  age: 31,
  hobby: "running",
};

// 2.1 Object.keys 사용
// -> 주어진 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}

for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}

// 2.2 Object.values 사용
// -> 주어진 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// 2.3 for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
