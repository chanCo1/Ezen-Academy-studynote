import React from "react";

// Main에서 서브라우팅을 사용하기 위해 다시 호출
import { Link, Routes, Route } from "react-router-dom";

import MainSub1 from "./MainSub1";

const Main = () => {
  return (
    <div>
      <h2>여기는 Main.js 파일 입니다.</h2>

      {/* === 링크 구성 부분 === */}
      <nav>
        <Link to="sub1">[MainSub1]</Link>
      </nav>

      {/* === 페이지 역할을 할 컴포넌트를 명시하기 === */}
      <Routes>
        <Route path="sub1" element={<MainSub1 />} />
      </Routes>
    </div>
  );
};

export default Main;


