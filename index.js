// 주어진 문자열이 펠린드롬인지 확인하라. 대소문자를 구분하지 않으며, 영문자와 숫자만을 대상으로 한다.

const isPalindrome = (str) => {
  // 1. 영문자, 숫자만 남기고 소문자로 변환
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // 2. 뒤집은 문자열과 비교
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
