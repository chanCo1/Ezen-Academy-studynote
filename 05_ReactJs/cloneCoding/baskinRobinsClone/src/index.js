/**
 * @filename : index.js
 * @author : chanCo
 * @description : index.html의 root에 랜더링할 컴포넌트 정의
 */

// 패키지 참조
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
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
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Meta />
    <GlobalStyle />
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </>
);
