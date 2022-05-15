/**
 * @filename : index.js
 * @author : 박찬우
 * @description : index.html의 root에 랜더링할 컴포넌트 정의
 */

// 패키지 참조 //
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// 컴포넌트 참조 //
import App from './App';
import Meta from './Meta';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta />
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
