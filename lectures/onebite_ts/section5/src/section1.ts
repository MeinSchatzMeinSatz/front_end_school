/**
 * 인터페이스의 확장
 */

// 중복된 프로퍼티가 많음(기존의 선언방식)
interface Animal {
  name: string;
  color: number;
}

interface Dog {
  name: string;
  color: string;
  isBark: boolean;
}

interface Cat {
  name: string;
  color: string;
  isScratch: boolean;
}

interface Rooster {
  name: string;
  color: string;
  isCock: boolean;
}

// extends 키워드를 통해 확장 (상속)
// super type 과 sub type의 관계 주의!
interface Dog2 extends Animal {
  name: "돌돌이";
  isBark: boolean;
}

const dog1: Dog = {
  name: "바둑이",
  color: "brown",
  isBark: false,
};

interface Cat2 extends Animal {
  isScratch: boolean;
}

interface Rooster2 extends Animal {
  isCock: boolean;
}

// 다중 확장도 가능하다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "개냥이",
  color: "cheese",
  isBark: false,
  isScratch: false,
};
