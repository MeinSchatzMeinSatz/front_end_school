/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;

person.name = "chaejun";
person.age = 27;

type Dog = {
  name: string;
  breed: string;
};

let dog = {
  name: "돌돌이",
  breed: "jindo",
  color: "black",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 한다.
 */

let num1 = 10 as never; // never는 모든 타입의 서브 타입이므로 가능
let num2 = 10 as unknown; // unknown은 모든 타입의 슈퍼 타입이므로 가능

// let num3 = 10 as string; // ❗️ 이건 안돼.
let num4 = 10 as unknown as string; // unknown 타입으로 변경해주고, string 으로 다중 단언이 가능하긴 함. (비권장)
/**
 * const 단언
 */

let num5 = 10 as const; // const로 선언한 것과 동일함.

let cat = {
  name: "야옹이",
  color: "yellow",
} as const; // 모든 프로퍼티가 일기전용 프로퍼티로 수정된다.

// cat.name = "미야옹"; // 읽기 전용 속성이므로 수정 불가

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string; // ⭐️
};

let post: Post = {
  title: "게시글1",
  author: "leechaejun", // ⭐️
};

// const len: number = post.author?.length; // 옵셔널 체이닝.: undefined일 수 있으므로 옵셔널 체이닝으로 처리
const len2: number = post.author!.length; // ⭐️ 이게 Non Null 단언

/**
 * 타입 단언은 실제로 그 타입으로 바꾸는 것은 아니다. 그러므로 업캐스팅과 다운캐스팅과는 다른 눈속임 같은 것. 그래서 위험성이 있다.
 */
