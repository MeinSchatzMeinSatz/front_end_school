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
