// 1. Common JS 모듈 시스템 이용하기
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log(moduleData);

// 2. ES Module 시스템 이용하기(확장자를 꼭 붙여줘야한다.)
import { add, sub } from "./math.js"; // (Named Export) 모듈에서 여러 값을 내보낼 때 사용한다. 이 방식을 사용하면, 내보낸 각각의 값에 이름을 지정해야 하며, 다른 모듈에서 이 값을 가져올 때는 그 정확한 이름을 사용해야 한다.
import multiply from "./math.js"; // (Default Export) 단 하나의 값만 내보낼 때 사용한다. 이 방식은 모듈이 주로 하나의 기능을 제공할 때 유용하며, 가져올 때는 어떤 이름을 사용해도 된다.

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(multiply(3, 4));
