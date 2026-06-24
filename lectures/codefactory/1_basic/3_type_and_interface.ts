/**
 * Type and Interface
 */

/**
 * Type
 *
 * 타입은 쉽게 말해서 TS의 타입에 이름을 지어주는 역할을 한다.
 */

type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

// 유니언을 쓰면 or의 기능을 한다.
type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};

const yujin1: {
  name: string;
  year: number;
} = {
  name: "안유진",
  year: 2002,
};

const yujin2: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yujin3: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yujin4: IdolIT = {
  name: "안유진",
  year: 2002,
};

// optional
interface IdolOptional {
  name: string;
  year?: number;
}

const yujin5: IdolOptional = {
  name: "안유진",
  // year: 2002,
};
