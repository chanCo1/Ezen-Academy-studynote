import React from "react";
import data from "../data"
import DepartmentSub from "../components/DepartmentSub";

const { department } = data;
const head = ["학과번호", "학과이름", "위치"];

const Department = () => {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {head.map((v,i) => <th key={i}>{v}</th>)} 
          </tr>
        </thead>
        <tbody align="center">
          {department.map((v,i) => <DepartmentSub key={i} item={v} />)}
        </tbody>
      </table>
    </div>
  );
};

export default Department;