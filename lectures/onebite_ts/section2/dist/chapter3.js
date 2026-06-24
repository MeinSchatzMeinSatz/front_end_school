/**
 * object
 */
let user1 = {
    id: 1,
    name: "Lee",
};
// user.id; // ❗️
// 객체는 객체 리터럴 타입으로 정의해야 한다.
let user2 = {
    id: 1,
    name: "Lee",
};
let dog = {
    name: "pocky",
    color: "black",
};
// 옵셔널 프로퍼티
user2 = {
    name: "홍길동",
};
let config = {
    apiKey: "MYAPIKEY",
};
user2.id;
dog.name;
export {};
// config.apiKey = "hacked"; // ❗️ 읽기 전용
