// 1단계: Promise 기본 구조

// Promise는 new Promise((resolve, reject) => {...}) 로 만든다.
// resolve() -> 성공 / reject() -> 실패

const myFirstPromise = new Promise((resolve, reject) => {
  const isSuccess = true;

  if (isSuccess) {
    resolve("Successed!");
  } else {
    reject(new Error("Failed"));
  }
});

myFirstPromise
  .then((result) => console.log("[1단계]", result))
  .catch((err) => console.log("[1단계]", err.message));

//  2단계: 비동기 타이머와 Promise

// setTimeout으로 1초 뒤에 resolve되는 Promise

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${ms}ms 기다렸어요.`);
    }, ms);
  });
}

wait(2000).then((msg) => console.log("[2단계]", msg));

// 3단계: Promise 체이닝

// .then()은 새 Promise를 반환하므로 계속 이어붙일 수 있다.
// 이전 .then()의 return 값이 다음 .then()의 인자로 들어온다.

function double(num) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(num * 2), 3000);
  });
}

double(1)
  .then((result) => {
    console.log("[3단계] 1번:", result);
    return double(result);
  })
  .then((result) => {
    console.log("[3단계] 2번:", result);
    return double(result);
  })
  .then((result) => {
    console.log("[3단계] 3번:", result);
    return double(result);
  });

// 4단계: .catch() 에러 처리
// 체인 중간에 reject 되면 아래 .then()을 건너뛰고 .catch()로 이동한다.

function riskyJob(success) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("작업 완료!");
      } else {
        reject(new Error("작업 중 에러 발생"));
      }
    }, 4000);
  });
}

riskyJob(true)
  .then((result) => {
    console.log("[4단계] 성공: ", result);
    return "다음 작업도 실행";
  })
  .then((result) => {
    console.log("[4단계] 이어서: ", result);
  })
  .catch((err) => {
    console.log("[4단계] 에러 잡힘: ", err.message);
  })
  .finally(() => {
    console.log("[4단계] finally: 성공/실패 상관없이 실행됨");
  });
