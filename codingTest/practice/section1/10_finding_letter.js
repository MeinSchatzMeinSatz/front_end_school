// 문자 찾기
/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 */

function solution(str, letter) {
  // 방법1.
  // let answer = str.split("").filter((item) => item === letter).length;

  // 방법2.
  let answer = 0;

  // for... of는 배열 변환 없이 문자열을 직접 순회할 수 있다.
  for (let item of str) {
    if (item === letter) {
      answer += 1;
    }
  }

  return answer;
}

const str1 = "COMPUTERPROGRAMMING";
const letter = "R";
console.log(solution(str1, letter)); // 기댓값 3
