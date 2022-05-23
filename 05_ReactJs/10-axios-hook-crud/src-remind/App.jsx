import React from 'react'
import { Routes, Route } from 'react-router-dom';

import GradeList from './pages/GradeList';
import GradeAdd from './pages/GradeAdd';
import GradeEdit from './pages/GradeEdit';

function App() {
  return (
    <div>
      <h1>10-Axios-hooks-CRUD 다시풀기</h1>

      <Routes>
        <Route path='/' exact={true} element={<GradeList />} />
        <Route path='/add' element={<GradeAdd />} />
        <Route path='/edit/:id' element={<GradeEdit />} />
      </Routes>
    </div>
  );
}

export default App;
