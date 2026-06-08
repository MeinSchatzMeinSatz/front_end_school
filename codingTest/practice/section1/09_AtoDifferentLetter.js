// A를 #으로
/**
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.
 */

function solution(s) {
  // 방법 1.
  // let answer = s
  //   .split("")
  //   .map((item) => (item === "A" ? (item = "#") : item))
  //   .join("");

  // 방법 2.
  // let answer = "";

  // for (let x of s) {
  //   if (x === "A") answer += "#";
  //   else answer += x;
  // }

  // 방법 3.
  let answer = s;
  answer = answer.replace(/A/g, "#");

  return answer;
}

let str = "BANANA";
console.log(solution(str));
