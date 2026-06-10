// 가운데 문자 출력
// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

function solution(str) {
  let answer = [...str];
  let length = str.length;

  if (length % 2) {
    let idx = Math.ceil(length % 2);
    return answer.slice(idx - 1, idx);
  } else {
    let idx = length % 2;
    return answer.slice(idx - 1, idx);
  }
}

console.log(solution("abce"));
