import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfessorList from './pages/ProfessorList';
import ProfessorAdd from './pages/ProfessorAdd';
import ProfessorEdit from './pages/ProfessorEdit';

function App() {
  return (
    <div>
      <h1>Exam 10</h1>

      <Routes>
        <Route path="/" exact={true} element={<ProfessorList />} />
        <Route path="/add" element={<ProfessorAdd />} />
        <Route path="/edit/:id" element={<ProfessorEdit />} />
      </Routes>
    </div>
  );
}

export default App;
