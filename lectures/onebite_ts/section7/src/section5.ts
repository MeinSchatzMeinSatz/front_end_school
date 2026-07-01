/**
 * 프로미스
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

// promise는 비동기로 받아온 응답의 타입을 추론하는 기능은 없다.
// 기본적으로 unknown으로 추정
promise.then((res) => {
  console.log(res + 10);
});

// 제네릭으로 결과값으로 도출하는 값의 타입을 정해줄 수 있다.
// 실패한 경우
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    reject("~때문에 실패");
  }, 3000);
});

promise2.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 1.
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "content",
      });
    }, 3000);
  });
}

// 2.
function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글 제목",
        content: "content",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
