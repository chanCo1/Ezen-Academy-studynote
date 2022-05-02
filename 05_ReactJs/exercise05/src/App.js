import React from 'react';
import { Routes, Route } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';  // 그냥 Helmet으로 감싸면 에러나서 HelmetProvider로 추가 감싼ㄷㅏ.

import Header from './components/Header';
import Content from './pages/Content';
import Footer from './components/Footer';

// 전역에 적용할 CSS
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR';
  }

  body {
    margin: 0;
    padding: 0;
  }

  .container {
    padding: 20px;
  }

  .fakeImg {
    background-color: #aaa;
    width: auto;
    padding: 20px;
    height:200px;
  }
`;

// meta 설정
const Meta = props => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{props.title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Gugi&family=Noto+Sans+KR:wght@100;300;400;500&display=swap" rel="stylesheet"></link>
      </Helmet>
    </HelmetProvider>
  );
};

function App() {
  return (
    <>
      <Meta title='연습문제 05'/>
      <GlobalStyle />

      {/* App.js에는 Routes, 각 메뉴는 NavLink로 구현하라는게 맞는지 모르겠습니다. */}
      <Routes>
        <Route path='/*' element={<Header />} exact={true} />
      </Routes>

      <Content />
      <Footer />
    </>
  );
}

export default App;
