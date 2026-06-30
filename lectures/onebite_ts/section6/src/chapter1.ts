/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이채준",
  age: 31,
  position: "developer",
  work() {
    console.log("I'm working now");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("I'm working now");
  }
}

const employeeB = new Employee("이채준", 31, "developer");
console.log(employeeB);

// 타입스크립트의 클래스는 실제 타입으로도 취급된다.

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const executive = new ExecutiveOfficer("이채준", 31, "developer", 505);
