// 단락 평가
// Short-circuit Evaluation

let varA = false;
let varB = true;

// AND
console.log(varA && varB);

// OR
console.log(varB || varA);

// 적용1
function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

// 적용2
function returnUndefined() {
  console.log("undefined 값");
  return undefined;
}

function returnTruthy() {
  console.log("Truthy한 값");
  return 10;
}

console.log(returnUndefined() && returnTruthy());
console.log(returnTruthy() || returnUndefined());

// 단락 평가 활용 사례

// function printName () {
//   if (!person) {
//     console.log("person에 값이 없음")
//   }
//   return person.name
// }

// 실전 패턴
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

let person;
printName(person);
