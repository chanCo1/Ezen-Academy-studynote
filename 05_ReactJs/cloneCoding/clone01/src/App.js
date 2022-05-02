/**
 * @filename : App.js
 * @author : 박찬우
 * @description : 모든 컴포넌트 참조 및 배치
 */

import React from 'react';
// import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * 모든 컴포넌트 참조 및 배치
 */
function App() {
  return (
    <>
     <Header />
     <Main />
     <About />
     <hr />
     <Menu />
     <hr />
     <Contact />
     <Footer />
    </>
  );
}

export default App;
