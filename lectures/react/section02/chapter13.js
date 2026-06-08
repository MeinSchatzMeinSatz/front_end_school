// 1. 콜백 함수(Callback Function)란?
// 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 한다.

function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);

// 이때 sub와 같은 함수를 콜백함수라고 한다.

// 함수 표현식 적용
// 사용하는 함수 내에서 바로 선언해서 사용할 수 있다.(익명 함수도 가능하다.)
main(function sub2() {
  console.log("i am sub2");
});

main(() => {
  console.log("i am anonymous");
});

// 콜백함수를 언제 사용하면 좋을까?
// 2. 콜백함수의 활용

// (2-1) 구조가 흡사한 함수를 생성해야하는 경우
function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5);
repeatDouble(5);

function repeatAsYouWant(count, callback) {
  console.log("-----repeatAsYouWant-----");
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeatAsYouWant(5, (idx) => {
  console.log(idx);
});

repeatAsYouWant(5, (idx) => {
  console.log(idx * 2);
});

repeatAsYouWant(5, (idx) => {
  console.log(idx * 3);
});
