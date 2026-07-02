/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ... 기능
  return {
    id: 1,
    name: "이채준",
    age: 31,
  };
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "이채준",
  age: 25,
});

// 연습
type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

// keyof 연산자를 사용해서 더 쉽게!
type KeyOfUser = {
  [key in keyof User]: boolean;
};

type ReadinlyUser = {
  readonly [key in keyof User]: User[key];
};

function fetchUser2(): ReadinlyUser {
  // ... 기능
  return {
    id: 1,
    name: "이채준",
    age: 31,
  };
}
