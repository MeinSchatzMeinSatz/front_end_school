import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import NotFound from "./pages/NotFound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  return (
    <>
      <Routes>
        {/* 1. Routes 컴포넌트 안에는 Route 컴포넌트만 들어갈 수 있다 */}
        {/* 2. Routes 컴포넌트 바깥에 있는 요소는 전부 렌더링 된다 */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        {/* Not Found 처리 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
