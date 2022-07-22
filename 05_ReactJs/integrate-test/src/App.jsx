import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';

import ProfessorList from './page/ProfessorList';
import ProfessorAdd from './page/ProfessorAdd';
import ProfessorEdit from './page/ProfessorEdit';

const App = memo(() => {
  return (
    <div>
      <Routes>
        <Route path='/' exact={true} element={<ProfessorList />} />
        <Route path='/professor_add' element={<ProfessorAdd />} />
        <Route path='/professor_edit/:profno' element={<ProfessorEdit />} />
      </Routes>
    </div>
  );
});

export default App;