import React from "react";

const ProfessorSub = ({item: {id, name, userid, position, sal, hiredate, comm, deptno}}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{userid}</td>
      <td>{position}</td>
      <td>{sal}</td>
      <td>{new Date(hiredate).toLocaleDateString()}</td>
      <td>{comm}</td>
      <td>{deptno}</td>
    </tr>
  );
};

export default ProfessorSub;