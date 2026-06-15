function solution(str) {
  // return [...new Set(str)].join("");

  let answer = "";

  for (let i = 0; i < str.length; i++) {
    // 해당 인덱스와 해당 문자열이 나오는 인덱스가 일치하는 경우 answer에 해당 문자열 더하기
    if (str.indexOf(s[i]) === i) return (answer += s[i]);
  }
}

console.log(solution("asddcsd"));
