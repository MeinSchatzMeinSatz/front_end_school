/**
 * object
 */
let user1: object = {
  id: 1,
  name: "Lee",
};

// user.id; // ❗️

// 객체는 객체 리터럴 타입으로 정의해야 한다.
let user2: {
  id?: number; // 선택적 프로퍼티가 된 id
  name: string;
} = {
  id: 1,
  name: "Lee",
};

type puppy = {
  name: string;
  color: string;
};

let dog: puppy = {
  name: "pocky",
  color: "black",
};

// 옵셔널 프로퍼티
user2 = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MYAPIKEY",
};

user2.id;
dog.name;
// config.apiKey = "hacked"; // ❗️ 읽기 전용
