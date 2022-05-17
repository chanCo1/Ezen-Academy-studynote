import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Proptypes from 'prop-types';

const Student = ({deptno}) => {

  const [student, setStudent] = useState([]);

  useEffect(() => {
    if(deptno > -1) {

      (async () => {
        try {
          const response = await axios.get('http://localhost:3001/student', {
            params: {
              deptno : deptno,
            }
          });
          setStudent(student => response.data);
        } catch(e) {
          console.error(e);
        }
      })();
    } else {
      setStudent([]);
    }
  }, [deptno]);

  return (
    <div>
      <h2>학생목록</h2>

      <table border='1' cellPadding={5}>
        <thead>
          <tr>
            <th>학번</th>
            <th>이름</th>
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
          {student.map((v,i) => {
            return (
              <tr key={v.id}>
                {Object.keys(v).map((w,j) => {
                  let value = v[w];

                  if(w === 'idnum') {
                    value = value.substring(0,6) + '-*******';
                  } 
                  // else if(w === 'birthdate') {
                  //   value = dayjs(value).format('YYYY-MM-DD');
                  // }
                  return (<td key={`${v.id}_${j}`}>{value}</td>)
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Student;