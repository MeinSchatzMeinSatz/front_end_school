/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말한다.
 */

// string 타입과 number 타입은 교집합이 없는 서로소 관계이다.
// 이처럼 교집합이 하나도 없는 서로소 관계에 있는 유니온 타입을 서로소 유니온 타입이라고 한다.

// 그래서 언제 쓰는건데?
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";

  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

/**
 * Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
 * Member -> {name}님 현재까지 {point}점 모았습니다.
 * Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
 */
function login(user: User) {
  if ("kickCount" in user) {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}본 오셨습니다.`);
  }
}
// 코드 자체는 문제없이 동작하도록 작성되었다. 하지만 다른 누군가가 와서 확인한다면?
// 즉 이 코드는 직관적이지 않다.

function login2(user: User) {
  if (user.tag === "ADMIN") {
    // admin 타입
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    // member 타입
    console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
  } else {
    // guest 타입
    console.log(`${user.name}님 현재까지 ${user.visitCount}본 오셨습니다.`);
  }
}

function login3(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}점 모았습니다.`);
      break;
    case "GUEST":
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
  }
}

// 원리: tag의 값이 리터럴로 정해지면서 교집합이 존재할 수 없는 서로소 집합이 탄생한다.

/**
 * 예제
 */

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 => 콘솔에 로딩 중 출력
// 실패 => 실패: 에러메시지 출력
// 성공 => 성공: 데이터 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩중");
      break;
    case "FAILED":
      console.log(`에러 발생: ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터~~",
  },
};

console.log(processResult(loading));
console.log(processResult(failed));
console.log(processResult(success));
