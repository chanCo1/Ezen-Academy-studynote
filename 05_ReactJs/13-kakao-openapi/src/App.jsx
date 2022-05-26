import React, { memo } from 'react';

import { Routes, Route } from 'react-router-dom';

import Top from './components/Top';
import KakaoSearch from './pages/KakaoSearch';

function App() {
  return (
    <div>
      <Top />

      <Routes>
        <Route path='/:api' element={<KakaoSearch />}  />
      </Routes>
    </div>
  );
}

export default memo(App);
