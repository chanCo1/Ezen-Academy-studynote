import React, { memo, useCallback, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Spinner from '../components/Spinner';
import { NavLink } from 'react-router-dom';

const GradeList = () => {

  const [grade, setGrade] = useState([]);

  const [{data, loading, error}] = useAxios(
    'http://localhost:3001/grade',
    { useCache: false },
  );

  useEffect(() => {
    setGrade(data);
  }, [data]);

  // - - - - - - - - - - - - - - - - - - - - - - - - - 삭제 이벤트 시작
  const [{loading2}, setDelete] = useAxios(
    {method: 'DELETE'},
    {useCache: false, manual: true}
  );

  const onDelete = useCallback((e) => {
    e.preventDefault();

    const current = e.target;
    const getId = parseInt(current.dataset.id);
    const getName = current.dataset.name;

    if(window.confirm(`${getName} 학생 삭제할껴?`)) {
      (async () => {
        let json = null;

        try {
          const response = await setDelete({
            method: 'DELETE',
            url: `http://localhost:3001/grade/${getId}`
          });

          json = response.data;
        } catch(e) {
          console.error(e);
          window.alert('데이터 요청 실패!')
        }

        if(json !== null) {
          setGrade(grade => grade.filter((v,i) => v.id !== getId));
        }
      })();
    }
  }, [setDelete]);
  // - - - - - - - - - - - - - - - - - - - - - - - - - 삭제 이벤트 끝

  return (
    <div>
      <Spinner visible={loading || loading2} />

      <NavLink to='add'>성적 추가하기</NavLink>

      {error ? (
        <h1>{error.code} Error</h1>
      ) : (
        <table border='1'>
          <thead>
            <tr>
              <th rowSpan='2'>No.</th>
              <th rowSpan='2'>이름</th>
              <th rowSpan='2'>학년</th>
              <th rowSpan='2'>성별</th>
              <th colSpan='4'>과목별점수</th>
              <th colSpan='2'>집계</th>
              <th colSpan='2' rowSpan='2'>수정 | 삭제</th>
            </tr>
            <tr>
              <th>국어</th>
              <th>영어</th>
              <th>수학</th>
              <th>과학</th>
              <th>총점</th>
              <th>평균</th>
            </tr>
          </thead>
          <tbody align='center'>
            {grade && grade.map(({id, name, level, sex, kor, eng, math, sin}, i) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{level}학년</td>
                  <td>{sex}</td>
                  <td>{kor}점</td>
                  <td>{eng}점</td>
                  <td>{math}점</td>
                  <td>{sin}점</td>
                  <td>{kor + eng + math + sin}점</td>
                  <td>{Math.round((kor + eng + math + sin) / 4)}점</td>
                  <td>
                    <NavLink to={`edit/${id}`}>수정</NavLink>
                  </td>
                  <td>
                    <button type='button' href="#!" data-id={id} data-name={name} onClick={onDelete}>
                      삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default memo(GradeList);