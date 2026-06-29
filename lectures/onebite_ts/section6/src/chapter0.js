/**
 * 클래스
 */

// let studentA = {
//   name: "Lee Chaejun",
//   grade: "A+",
//   age: 31,
//   study() {
//     console.log("열심히 공부 중");
//   },
//   intro() {
//     console.log("안녕하세요!");
//   },
// };

// let studentB = {
//   name: "Hong Gildong",
//   grade: "B+",
//   age: 31,
//   study() {
//     console.log("열심히 공부 중");
//   },
//   intro() {
//     console.log("안녕하세요!");
//   },
// };

// 이처럼 동일한 형식의 비슷한 객체를 만들어야 하는 경우, 클래스를 이용해서 객체를 정의해주면 매우 편리

class Student {
  // 필드 -> 클래스가 만들어낼 객체의 프로퍼티를 정의
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부중");
  }

  intro() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("홍길동", "A+", 31);
console.log(studentB);
studentB.study();
studentB.intro();

/**
 * 실습2
 */

class StudentDev extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // ⭐️
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 중`);
  }
}

const studentDeveloper = new StudentDev("이채준", "B+", 31, "TypeScript");
console.log(studentDeveloper);
studentDeveloper.programming();
