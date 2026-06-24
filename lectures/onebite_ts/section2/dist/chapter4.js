/**
 * 타입 별칭과 인덱스 시그니처
 */
// 타입 별칭 X
let user = {
    id: 1,
    name: "Lee",
};
// type User = {} // ❗️ 중복된 이름의 타입명은 허용되지 않음
function func() {
}
let user1 = {
    id: 1,
    name: "Lee",
    nickName: "Nomad Coder",
    birth: "1995.05.03",
    bio: "안녕하세요. 프론트엔드 개발자 이채준입니다.",
    location: "광진구",
};
let user2 = {
    id: 1,
    name: "Kim",
    nickName: "Kimchi",
    birth: "1995.05.03",
    bio: "안녕하세요. 프론트엔드 개발자 이채준입니다.",
    location: "광진구",
};
export {};
