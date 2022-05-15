import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';

import NewsList from './pages/NewsList';
import Department from './pages/Department';

const App = () => {
  return (
    <div>
      <h1>8단원 Ajax</h1>

      <nav>
        <NavLink to='/news'>[ 뉴스목록 ]</NavLink>
        <NavLink to='/department'>[ 학과관리 ]</NavLink>
      </nav>

      <Routes>
        <Route path='/news' element={<NewsList />} />
        <Route path='/department' element={<Department />} />
      </Routes>
    </div>
  );
}

export default App;