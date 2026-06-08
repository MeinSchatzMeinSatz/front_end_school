// 동기와 비동기
/**
 * 동기
 * 여러개의 작업을 '순서대로', '하나씩' 처리하는 것.
 *
 * JavaScript는 "동기"적으로 코드를 실행한다.
 */

console.log(1);
console.log(2);
console.log(3);

// 동기 방식에는 치명적인 단점이 존재한다.
// 이렇게 짧게 걸리는 작업에는 상관이 없다. 하지만 그렇지 않다면?
function taskA() {
  console.log("taskA");
}

function taskB() {
  console.log("taskB");
}

function taskC() {
  console.log("taskC");
}

taskA();
taskB();
taskC();

// 이를 해결하기 위한 방법1: 멀티 스레드
// 하지만 JS 엔진에는 쓰레드가 1개 있음
// 방법2: 비동기

/**
 * 비동기란 무엇일까?
 * - 동기적이지 않다.
 * - 작업을 순서대로 처리하지 않는다.
 *
 * 비동기 작업 각각에 callback을 붙여서 작업을 처리해줄 수 있다.
 */

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

// 어떻게 동시에 작업을 처리하는거지?
// 비동기 작업들은 자바스크립트 엔진이 아닌 Web APIs에서 실행됨
// setTimeout같은 비동기 함수를 WebAPI에 전달하고
// 앞의 과정들이 다 끝나고 나면, setTimeout안의 콜백함수를 실행
