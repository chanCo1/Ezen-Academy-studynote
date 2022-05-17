import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import propType from 'prop-types';
import Spinner from './Spinner';

const Professor = ({deptno}) => {
  // ------------------------------------------------------hooks 정의 시작
  // TODO: 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [ loading, setLoading ] = useState(false);

  // TODO: 화면에 표시할 student 상태값 정의
  const [ professor, setProfessor ] = useState([]);
  // ------------------------------------------------------hooks 정의 끝

  useEffect(() => {
    setLoading(true);

    const getStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/professor?deptno=${deptno}`);
        setProfessor(professor => response.data);
      } catch(e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    getStudent();
  }, [deptno]);


  const head = ['교수번호', '이름', '아이디', '직급', '급여', '입사일', '보직수당', '소속학과번호'];

  return (
    <div>
      <Spinner visible={loading} />

      <h2>교수목록</h2>
      
      <table border='1'>
        <thead>
          <tr>
            {head.map((v,i) => <th key={i}>{v}</th>)}
          </tr>
        </thead>
        <tbody align='center'>
          {professor.map((v,i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.userid}</td>
                <td>{v.position}</td>
                <td>{v.sal}</td>
                <td>{new Date(v.hiredate).toLocaleDateString()}</td>
                <td>{v.comm}</td>
                <td>{v.deptno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// 속성들에 대한 타입 정의
Professor.propType = {
  deptno: propType.number.isRequired,
}

// 속성들에 대한 기본값 정의
Professor.defaultProps = {
  deptno: -1,
}

export default memo(Professor);