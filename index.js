function solution(arr) {
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  let flag = 0; // flag의 존재!

  // 이중 for문을 통한 해결
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }

    if (flag === 1) break;
  }

  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
