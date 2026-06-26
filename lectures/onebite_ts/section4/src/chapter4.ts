/**
 * 사용자 정의 타입가드
 *
 * 참 또는 거짓을 반환하는 함수를 이용해 우리 입맛대로 타입 가드를 만들 수 있도록 도와주는 타입스크립트 문법
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warn(animal: Animal) {
  if (isDog(animal)) {
    animal;
    console.log(animal.isBark);
  } else if (animal && "isScratch" in animal) {
    animal;
    console.log(animal.isScratch);
  }
}
