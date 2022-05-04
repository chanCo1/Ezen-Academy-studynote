import React from "react";
import MySchool from "./MySchool";

const Student = () => {

  const studentList = MySchool.student.map((v,i) => {
    
    // const idnum = v.idnum;

    const ellipsis = (id, len) => {
      let str = id;

      if(str.length > len) {
        str = str.substring(0, len) + `-*******`;
      }
      return str;
    }

    return (
      <tr>
        <td>{v.id}</td>
        <td>{v.name}</td>
        <td>{v.userid}</td>
        <td>{v.grade}</td>
        <td>{ellipsis(v.idnum,6)}</td>
        <td>{new Date(v.birthdate).toLocaleDateString()}</td>
        <td>{v.tel}</td>
        <td>{v.height}</td>
        <td>{v.weight}</td>
        <td>{v.deptno}</td>
        <td>{v.profno}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학생번호</th>
            <th>학생이름</th>
            <th>아이디</th>
            <th>학년</th>
            <th>주민번호</th>
            <th>생년월일</th>
            <th>연락처</th>
            <th>키</th>
            <th>몸무게</th>
            <th>소속학과번호</th>
            <th>담당교수번호</th>
          </tr>
        </thead>
        <tbody>
          {studentList}
        </tbody>
      </table>
    </div>
  );
};

export default Student;