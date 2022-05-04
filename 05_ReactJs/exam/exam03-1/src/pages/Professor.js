import React from "react";
import data from "../data"
import ProfessorSub from "../components/ProfessorSub";

const { professor } = data;
const head = ["교수번호", "교수이름", "아이디", "직급", "급여", "입사일", "보직수당", "소속학과번호"];

const Professor = () => {
  return (
    <table border="1">
      <thead>
        <tr>
          {head.map((v,i) => {
            return (
              <th key={i}>{v}</th>
            );
          })}
        </tr>
      </thead>
      <tbody align="center">
        {professor.map((v,i) => <ProfessorSub key={i} item={v} />)}
      </tbody>
    </table>
  );
};

export default Professor;