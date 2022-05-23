/**
 * @filename : App.jsx
 * @author : chanCo
 * @description : 모든 컴포넌트 참조 및 배치
 */

// 패키지 참조
import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

// 컴포넌트 참조
import Header from './components/Header';
import Main from './pages/Main';
import Login from './pages/Login';
import Footer from './components/Footer';

// TODO: 화면을 구성할 컴포넌트들을 배치한다.
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' exact={true} element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default memo(App);
