/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

// num1 = num2; // ✅

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "poodle",
};

// animal = dog; // ✅ (업캐스팅?)
// dog = animal; // ❗️ (다운캐스팅?)
// 객체 타입도 기본 타입들처럼 수퍼-서브 관계를 갖는다. 그 기준은 프로퍼티!

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook; // ✅
// programmingBook = book; // ❗️

/**
 * 초과 프로퍼티 검사
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs", // ❗️이건 초과 프로퍼티
};

let book3: Book = programmingBook; // ✅ 이렇게 할당하는 건 가능

function func(book: Book) {}

// ❗️ 이건 안되고
func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

// ✅ 이건 된다.
func(programmingBook);
