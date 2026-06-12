import "./App.css";
import { useState } from "react";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);

  /**
   * State Lifting
   * state값이나, set 함수를 여러 컴포넌트에서 사용하는 경우, 이들을 상위 컴포넌트에서 관리하는데, 이를 state lifting이라고 한다.
   */

  // 별도의 이벤트 핸들러로 감싸서 setCount 함수 전달하기
  const controlNumber = (num) => {
    setCount(count + num);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
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
