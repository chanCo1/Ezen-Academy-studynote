import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import Top from './components/Top';
import Covid19 from './pages/Covid19';

function App() {
  return (
    <div>
      <Top />
      <Covid19 />

      <Routes>
        <Route path='/:category' element={<Covid19 />} />
      </Routes>
    </div>
  );
}

export default memo(App);
