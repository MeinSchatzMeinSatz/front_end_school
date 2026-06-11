import "./App.css";
import { useState } from "react";
import Light from "./components/chapter07/Light";

function App() {
  const [state, setState] = useState("초깃값");
  console.log(state);

  return (
    <>
      <Light />
    </>
  );
}

export default App;
