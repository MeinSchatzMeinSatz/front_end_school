import "./App.css";
import { useState } from "react";
import State from "./components/chapter06/State";

function App() {
  const [state, setState] = useState("초깃값");
  console.log(state);

  return (
    <>
      <State />
    </>
  );
}

export default App;
