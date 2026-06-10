const Practice2 = () => {
  // 조건에 따른 다른 UI를 보여주는 로직
  const user = {
    name: "이채준",
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Practice2;
