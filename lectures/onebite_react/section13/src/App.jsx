import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Button from "./components/Button";
import Header from "./components/Header";

import { getEmotionImage } from "./util/getEmotionImage";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />

      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
