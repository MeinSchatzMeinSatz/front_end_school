// 1. 함수 선언

function greeting() {
  console.log("안녕하세요.");
}

// 2. 함수 호출
console.log("호출 전");
greeting();
console.log("호출 후");

// 3. 직사각형의 넓이를 구하는 함수
function getArea() {
  let width = 10;
  let height = 20;
  let area = width * height;

  console.log("getArea: " + area);
}

getArea();

function getArea1(width, height) {
  let area = width * height;

  console.log("getArea1: " + area);
}

getArea1(10, 20);
// 4. 인수(arguments)와 매개변수(parameter)의 개념
getArea1(20, 30);
getArea1(120, 200);

// 5. 반환값의 개념: console.log 대신 return에 결과값을 할당
// 반환값의 개념 -> 함수 호출의 결과값
function getArea2(width, height) {
  let area = width * height;

  return area;
}

let area1 = getArea2(10, 20);
console.log("getArea2: " + area1);

let area2 = getArea2(30, 20);
console.log("getArea2: " + area2);

// 6. 중첩함수
function getArea3(width, height) {
  function another() {
    console.log("another");
  }

  another();
  let area = width * height;

  return area;
}

let area3 = getArea3(10, 20);
console.log("getArea2: " + area1);

let area4 = getArea3(30, 20);
console.log("getArea3: " + area2);

// 호이스팅
// -> 끌어올리다.
// 프로그램에서 변수나 함수를 호출하거나 접근하는 코드가 함수 선언보다 위에 있음에도 불구하고, 마치 선언 코드가 위에 있는 것처럼 동작하는 자바스크립트만의 독특한 기능.

func();

function func() {
  console.log("hello");
}
