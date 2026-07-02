/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal =
  | "red-dog"
  | "red-cat"
  | "red-chicken"
  | "black-dog"
  | "black-cat"
  | "black-chicken";

type ColoredAnimal2 = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal2 = "black-cat";
