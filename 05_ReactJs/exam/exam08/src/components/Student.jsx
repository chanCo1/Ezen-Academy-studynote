import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import propType from 'prop-types';
import Spinner from './Spinner';

const Student = ({deptno}) => {
  // ------------------------------------------------------hooks 정의 시작
  // // TODO: 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [ loading, setLoading ] = useState(false);

  // TODO: 화면에 표시할 student 상태값 정의
  const [ student, setStudent ] = useState([]);
  // ------------------------------------------------------hooks 정의 끝

  useEffect(() => {
    setLoading(true);

    const getStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/student?deptno=${deptno}`);
        setStudent(student => response.data);
      } catch(e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getStudent();
  }, [deptno]);

  const head = ['학번', '이름', '아이디', '학년', '주민번호', '생년월일', '연락처', '키', '몸무게', '소속학과번호', '담당교수번호'];

  return (
    <div>
      <Spinner visible={loading} />

      <h2>학생목록</h2>
      
      <table border='1'>
        <thead>
          <tr>
            {head.map((v,i) => <th key={i}>{v}</th>)}
          </tr>
        </thead>
        <tbody align='center'>
          {student.map((v,i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.grade}</td>
                <td>{v.idnum.substring(0,6)}-*******</td>
                <td>{new Date(v.birthdate).toLocaleDateString()}</td>
                <td>{v.tel}</td>
                <td>{v.height}</td>
                <td>{v.weight}</td>
                <td>{v.deptno}</td>
                <td>{v.profno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// 속성들에 대한 타입 정의
Student.propType = {
  deptno: propType.number.isRequired,
}

// 속성들에 대한 기본값 정의
Student.defaultProps = {
  deptno: -1,
}

export default memo(Student);