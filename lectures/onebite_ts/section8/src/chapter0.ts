// 1. 인덱스드 엑세스 타입
// 인덱스를 이용해 다른 타입내의 특정 프로퍼티의 타입을 추출하는 타입이다.
// 인덱스드 엑세스 타입은 객체, 배열, 튜플에 사용할 수 있다.

// 1-1. 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이채준",
  },
};

// ❓이렇게 생긴 게시글(객체)에서 이름과 아이디를 붙여서 출력하는 함수가 있어야 한다면? -> Post 타입의 author 프로퍼티의 타입이 수정되면 매개변수도 일일이 수정해줘야 한다.
function printAuthorInfo1(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}

// ❗️이럴때 인덱스드 엑세스 타입을 이용해 Post에서 author 프로퍼티 타입을 추출해 사용하면 편리하다.
function printAuthorInfo2(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 또한 다음과 같이 인덱스를 중첩하여 사용할 수도 있다.
function printAuthorInfo3(authorId: Post["author"]["id"]) {
  console.log(authorId);
}

// 1-2. 배열 요소의 타입 추출하기
// 앞서 만든 Post 타입을 PostList 배열 타입으로 수정했다.
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이채준",
    age: 31,
  },
};

type A = PostList[0]; // 인덱스 0의 요소 타입 -> ElementType
type B = PostList[number]; // 모든 숫자 인덱스의 요소 타입 (= 배열 요소 타입 전체) -> ElementType

function printAuthorInfo4(author: PostList[number]["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 1-3. 튜플과 함께 사용하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

// type Tup3 = Tup[3]

type TupNum = Tup[number]; // 유니온 타입으로 추출한다.
