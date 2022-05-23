/**
 * @filename : index.js
 * @author : 박찬우
 * @description : index.html의 root에 랜더링할 컴포넌트 정의
 */

// 패키지 참조
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";

// 컴포넌트 참조
import App from './App';
import Meta from './Meta';

// 전역 스타일 정의
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
    list-style: none;
    text-decoration: none;
    outline: none;
  }

  body {
    background-color: #f5f6f7;
  }

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Meta />
    <App />
  </React.StrictMode>
);

