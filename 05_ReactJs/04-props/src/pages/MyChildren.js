import React from "react";
import MyChildrenSub from "../components/MyChildremSub";
import Meta from "../components/Meta";

const MyChildren = () => {
  return (
    <div>
      {/* Route처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어 쓰게 된다. */}
      <Meta title="MyChildren.js" description="여기는 MyChildren.js 파일 입니다." url={window.location.href} />

      <h2>MyChildren</h2>

      {/* props 전달시 문자열 이외의 데이터 타입은 중괄호로 묶어야 함 */}
      <MyChildrenSub w={700} h={100}><b>Hello World</b></MyChildrenSub>
      <MyChildrenSub w={300} h={80}>안녕 React</MyChildrenSub>
      <MyChildrenSub w={200} h={50} />
    </div>
  );
};

export default MyChildren;