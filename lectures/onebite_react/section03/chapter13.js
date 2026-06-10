// 비동기 작업 처리하기2: Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체
// 비동기 작업을 감싸는 객체

// 프로미스 객체 생성
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 수행할 함수를 제작
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("입력받은 데이터가 숫자가 아닙니다.");
      }
    }, 2000);
  });

  return promise;
}

add10("안녕")
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);

    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
