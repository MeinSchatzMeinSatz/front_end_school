import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  // 1. 브라우저 라우터는 브라우저의 현재 주소를 저장하고 감지하는 역할을 한다
  // 컨텍스트를 통해 Navigation.Provider와 Location.Provider의 기능을 제공하고 있다.
  // 즉, BrowserRouter를 통해 라우팅과 관련된 모든 데이터를 공급받을 수 있다.
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
