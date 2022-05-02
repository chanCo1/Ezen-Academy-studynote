/**
 * @filename : index.js
 * @author : 박찬우
 * @description : index.html의 root에 랜더링할 컴포넌트 정의
 */

// === 패키지 및 JS 참조 === //
import React from 'react';
import ReactDOM from 'react-dom/client';
// 라우팅 범위 설정
import {BrowserRouter} from 'react-router-dom';

// SEO 정의
import Meta from './Meta';
// 전역 스타일 정의
import GlobalStyle from './GlobalStyle';
// 프로그램 시작
import App from './App';

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

