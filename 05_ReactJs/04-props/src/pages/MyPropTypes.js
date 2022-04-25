import React from "react";
import MyPropTypeSub from "../components/MyPropTypesSub";
import Meta from "../components/Meta";

const MyPropType = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어쓰게 된다. */}
      <Meta title="MyPropTypes.js" description="여기는 MyPropType.js 파일 입니다." url={window.location.href} />

      <h2>MyPropsTypes</h2>

      {/* 문자열이 아닌 형식은 {}로 감싼다/ */}
      <MyPropTypeSub name="민호" age={19} hobby="사진찍기" />
      <MyPropTypeSub name="수영" age="스물한살" hobby="영화보기" />
      <MyPropTypeSub name="철민" age={22} />
    </div>
  );
};

export default MyPropType;