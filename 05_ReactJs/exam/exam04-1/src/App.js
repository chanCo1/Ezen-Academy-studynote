import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

import GradeTable from "./GradeTable";
import Meta from "./components/Meta";

function App() {
  return (
    <div>
      <Meta />
      <h1>성적표</h1>

      <nav>
        <NavLink to="/grade_table/1">1학년</NavLink> |&nbsp;
        <NavLink to="/grade_table/2">2학년</NavLink> |&nbsp;
        <NavLink to="/grade_table/3">3학년</NavLink> |&nbsp;
        <NavLink to="/grade_table/4">4학년</NavLink>
      </nav>

      <hr />

      <Routes>
        <Route path="/grade_table/:level" element={<GradeTable />} />
      </Routes>
      
    </div>
  );
}

export default App;
