import "./App.css";
import { useState, useEffect } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log(`count: ${count} / input: ${input}`);
  }, [count, input]);
  // 의존성 배열(dependency array) -> deps

  const controlNumber = (num) => {
    setCount(count + num);
    // console.log(count); // 변경되기 이전의 값을 계속 출력한다. 이는 set- 함수가 비동기로 동작하기 때문이다.
  };

  // console.log(`콘솔로 출력한 count: ${count}`); // 숫자가 아예 변경되지 않은채 출력

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller controlCounter={controlNumber} />
      </section>
    </div>
  );
}

export default App;
