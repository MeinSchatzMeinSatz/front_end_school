import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  }; // 엔터키를 눌렀을 때 제출되도록 설정

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    } // 빈 칸으로 제출했을 때 제출 안시키고, 다시 포커스 시키기
    onCreate(content);
    setContent(""); // 새로운 투두 업데이트 후 비우기
  };

  return (
    <div className="Editor">
      <input
        onKeyDown={onKeydown}
        ref={contentRef}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
