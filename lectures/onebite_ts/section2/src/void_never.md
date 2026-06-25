# void와 never 사용 시점 정리

## void - "반환값이 없음"

함수가 정상적으로 실행되고 종료되지만, 의미있는 반환값이 없을 때 사용한다.

```ts
// 1. 이벤트 핸들러
button.addEventListener("click", (): void => {
  console.log("클릭됨");
});

// 2. 반환값을 사용하지 않는 콜백 타입 정의
type Callback = (data: string) => void;

// 3. 부수효과(side effect)만 있는 함수
function logError(msg: string): void {
  console.error(msg);
}

// 4. React: setState나 dispatch
const handleClick = (): void => {
  setCount((prev) => prev + 1);
};
```

## never - "절대 반환되지 않음"

함수가 끝까지 실행되지 않는다는 것을 타입으로 표현한다. void와 달리 함수가 정상 종료 자체를 하지 않는다.

```ts
// 1. 항상 throw하는 함수
function throwError(msg: string): never {
  throw new Error(msg);
}

// 2. 무한 루프 (종료 없음)
function listenForever(): never {
  while (true) {
    processQueue();
  }
}

// 3. Exhaustive check — 가장 실용적인 패턴!
type Shape = "circle" | "square";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI;
    case "square":
      return 1;
    default:
      // 여기 도달하면 컴파일 에러 → 타입 누락 감지
      const _exhaustive: never = shape;
      throw new Error(`Unknown shape: ${shape}`);
  }
}

// 4. 불가능한 타입 교차
type Impossible = string & number; // never
```
