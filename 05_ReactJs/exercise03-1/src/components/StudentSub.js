import React from "react";

const StudentSub = ({item: {id, name, userid, grade, idnum, birthdate, tel, height, weight, deptno, profno}}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{userid}</td>
      <td>{grade}</td>
      <td>{idnum}</td>
      <td>{new Date(birthdate).toLocaleDateString()}</td>
      <td>{tel}</td>
      <td>{height}</td>
      <td>{weight}</td>
      <td>{deptno}</td>
      <td>{profno}</td>
    </tr>
  );
};

export default StudentSub;