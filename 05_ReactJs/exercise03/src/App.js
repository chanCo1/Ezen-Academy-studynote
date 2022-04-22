import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Department from "./Department";
import Professor from "./Professor";
import Student from "./Student";

function App() {
  return (
    <div>
      <h1>Exam03</h1>
      <p>22.04.22_박찬우</p>
      <hr />

      <nav>
        <Link to="/department">학과목록</Link>&nbsp;|&nbsp;
        <Link to="/professor">교수목록</Link>&nbsp;|&nbsp;
        <Link to="/student">학생목록</Link>
      </nav>

      <Routes>
        <Route path="/department" element={<Department />} />
        <Route path="/professor" element={<Professor />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </div>
  );
}

export default App;
