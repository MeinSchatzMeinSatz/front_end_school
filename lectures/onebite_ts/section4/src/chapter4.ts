/**
 * 사용자 정의 타입가드
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
