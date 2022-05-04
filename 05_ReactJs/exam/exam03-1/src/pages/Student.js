import React from "react";
import data from "../data"
import StudentSub from "../components/StudentSub";

const { student } = data;
const head = ["학생번호", "학생이름", "아이디", "학년", "주민번호", "생년월일", "연락처", "키", "몸무게", "소속학과번호", "담당교수번호"];

const Student = () => {
  return (
    <table border="1">
      <thead>
      <tr>
        {head.map((v,i) => <th key={i}>{v}</th>)}
      </tr>
      </thead>
      <tbody align="center">
        {student.map((v,i) => <StudentSub key={i} item={v} />)}
      </tbody>
    </table>
  );
};

export default Student;