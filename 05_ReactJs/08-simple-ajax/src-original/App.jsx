import React from 'react';
import MenuLink from './components/MenuLink';
import { Routes, Route } from 'react-router-dom';

import NewsList from './pages/NewsList';
import Department from './pages/Department';


function App() {
  return (
    <div>
      <h1>08-Simple-Ajax</h1>

      <nav>
        <MenuLink to='/news'>뉴스목록</MenuLink>
        <MenuLink to='/department'>학과관리</MenuLink>
      </nav>

      <hr />

      <Routes>
        <Route path='/news' element={<NewsList />} />
        <Route path='/department' element={<Department />} />
      </Routes>
    </div>
  );
}

export default App;
