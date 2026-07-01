/**
 * 접근 제어자
 * access modifier
 * => public private protected
 * public: 아무 제약이 없는 상태
 * private: 가장 제한적인 접근 제어자: 심지어 파생 클라스에서도 접근 불가
 * protected: 외부에서는 접근 불가, 파생 클라스에선 접근 가능
 */

class Employee {
  // 필드
  protected name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} is working now`);
  }
}

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

  func() {
    this.name;
  }
}

const employee = new Employee("이채준", 31, "developer");
// employee.name = "홍길동";
// employee.age = 35;
employee.position = "designer";

console.log(employee);
