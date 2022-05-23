import React, { memo, useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

const LinkConatiner = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  padding: 10px 0;
`;

const TopLink = styled(NavLink)`
  margin-right: 15px;
  display: inline-block;
  font-size: 16px;
  padding: 7px 10px 5px 10px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #06f2;
  }
`;

const ProfessorList = () => {
  // 화면에 표시할 성적 데이터를 저장하기 위한 상태 변수
  const [professor, setProfessor] = useState([]);

  // 백엔드로 부터 데이터 가져오기
  const [{ data, loading1, error }, refetch] = useAxios('http://localhost:3001/professor', {
    useCache: false,
  });

  // axios-hook에 의해 생성된 상태값인 data가 변경되었을 때 실행될 hook
  // -> axios-hook의 data는 직접적으로 수정이 불가능하다.
  useEffect(() => {
    setProfessor(data);
  }, [data]);

  // 데이터 삭제 - 수동
  const [{ loading2 }, sendDelete] = useAxios({ method: 'DELETE' }, { useCache: false, manual: true });

  // 삭제 버튼 클릭시 호출 함수
  const onDeleteClick = (e) => {
    e.preventDefault();

    // 이벤트가 발생한 대상을 가져옴 -> 삭제링크
    const current = e.target;

    // 클릭된 링크에 숨겨져 있는 일련번호와 학생이름 가져오기
    const getId = parseInt(current.dataset.id);
    const getName = current.dataset.name;

    if (window.confirm(`${getName} 교수 해고 ㄱㄱ?`)) {
      (async () => {
        let json = null;

        try {
          const response = await sendDelete({
            method: 'DELETE',
            url: `http://localhost:3001/professor/${getId}`,
          });

          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert('에러발생');
        }

        // 삭제 결과가 정상이라면?
        if (json !== null) {
          // 화면에 출력중인 데이터에서 동일한 일련번호를 갖는 항목을 제외한 나머지를 추려낸다.
          setProfessor((professor) => professor.filter((v) => v.id !== getId));
        }
      })();
    }
  };

  const head = ['No', '이름', '아이디', '직급', '급여', '입사일', '보직수당', '소속학과번호', '수정', '삭제'];

  return (
    <div>
      <Spinner visible={loading1 || loading2} />

      <LinkConatiner>
        <TopLink to="add">교수 등록하기</TopLink>
      </LinkConatiner>

      {error ? (
        <div>
          <h1>{error.code} Error</h1>
          <p>{error.message}</p>
        </div>
      ) : (
        <Table>
          <thead>
            <tr>
              {head.map((v, i) => (
                <th key={i}>{v}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {professor &&
              professor.map(({ id, name, userid, position, sal, hiredate, comm, deptno }, i) => {
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{userid}</td>
                    <td>{position}</td>
                    <td>{sal}만원</td>
                    <td>{new Date(hiredate).toLocaleDateString()}</td>
                    <td>{comm && `${comm}만원`}</td>
                    <td>{deptno}</td>
                    <td>
                      <NavLink to={`edit/${id}`}>수정하기</NavLink>
                    </td>
                    <td>
                      <a href="#!" data-id={id} data-name={name} onClick={onDeleteClick}>
                        삭제하기
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default memo(ProfessorList);
