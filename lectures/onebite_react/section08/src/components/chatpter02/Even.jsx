import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리 함수(해당 컴포넌트가 없어질때 출력)
    return () => {
      console.log("unmount");
    };
  }, []);

  return <div>짝수입니다.</div>;
};

export default Even;
