/**
 * @filename : App.jsx
 * @author : 박찬우
 * @description : 모든 컴포넌트 참조 및 배치
 */

// 패키지 참조
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 참조
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './page/Main';
import Footer from './components/Footer';

// TODO: 화면을 구성할 모든 컴포넌트들을 배치한다.
function App() {
  return (
    <>
      {/* Nav 컴포넌트 */}
      <Nav />
      {/* Header 컴포넌트 */}
      <Header />

      <Routes>
        {/* Main 컴포넌트 */}
        <Route path="/*" exact={true} element={<Main />} />
      </Routes>

      {/* Footer 컴포넌트 */}
      <Footer />
    </>
  );
}

export default App;
