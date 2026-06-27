/**
 * 제네릭 인터페이스와 제네릭 타입 별칭
 */

/**
 * ⭐️제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처와 함께 사용하기
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1234,
  key2: 1234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "halo",
};

/**
 * 언제 써먹을 수 있을까?
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분: 학생 / 개발자
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   console.log("잘못오셨습니다.");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "leechaejun",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentUser: User<Student> = {
  name: "gildong",
  profile: {
    type: "student",
    school: "부산대학교",
  },
};

// goToSchool(developerUser); // ❗️
goToSchool(studentUser);
