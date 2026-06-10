// 계산 기능
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// Common JS를 이용해서 모듈 시스템 이용하기
// module.exports = {
//   add,
//   sub,
// };

// ES Module 시스템 이용하기
export { add, sub };
