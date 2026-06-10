import "./App.css";
import Button from "./components/chapter04/Button";
import Header from "./components/Header";

function App() {
  // 스프레드 연산자를 통한 props 값 전달
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      <Button {...buttonProps} />
      <Button text={"카페"} />
      <Button text={"블로그"}>
        {/* 자식 요소들도 props로 전달이 가능 */}
        <div>자식 요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
