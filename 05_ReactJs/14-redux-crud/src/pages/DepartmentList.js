import React, { memo, useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import Table from '../components/Table';

import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../slice/DepartmentSlice';

// 입력 컨드롤들을 포함하는 박스
const ControlForm = styled.form`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;

  .controll {
    margin-right: 5px;
    display: inline-block;
    font-size: 16px;
    padding: 7px 10px 5px 10px;
    border: 1px solid #ccc;
  }

  .clickable {
    background-color: #fff;
    color: #000;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #06f2;
    }

    &:active {
      transform: scale(.9, .9);
    }
  }
`;

const DepartmentList = memo(() => {

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.Department);

  /** 백엔드에 전달할 파라미터 상태 값 */
  // 검색어
  const [query, setQuery] = useState('');
  // 목록 수
  const [rows, setRows] = useState(10);


  /** 입력 요소에 접근할 참조 변수 */
  const refTextInput = useRef();

  /** 페이지 마운트와 동시에 실행되는 hook -> 리덕스를 통해 목록 조회한다. */
  useEffect(() => {
    dispatch(getList({
      query: query,
      rows: rows,
    }));
  }, [dispatch, rows, query]);

  /** 검색 이벤트 */
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();

    const input = refTextInput.current;
    setQuery(input.value);
  }, []);

  /** 목록 수 변경 이벤트 */
  const onRowsChange = useCallback(e => {
    e.preventDefault();
    setRows(parseInt(e.currentTarget.value));
  }, []);

  return (
    <div>
      <Spinner visible={loading} />

      <ControlForm onSubmit={onSearchSubmit}>
        <select name='rows' className='controll' defaultValue={rows} onChange={onRowsChange}>
          <option value='10'>10개씩 보기</option>
          <option value='20'>20개씩 보기</option>
          <option value='30'>30개씩 보기</option>
        </select>

        <input type='text' name='query' className='controll' defaultValue={query} ref={refTextInput} />
        <button type='submit' className='controll clickable'>검색</button>
        <NavLink to='/department_add' className='controll clickable'>학과정보 추가하기</NavLink>
      </ControlForm>

      {error ? (
        <ErrorPage error={error} />
      ) : data && (
        <Table>
          <thead>
            <tr>
              <th>학과번호</th>
              <th>학과명</th>
              <th>학과위치</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {data.item.length > 0 ? ( 
              data.item.map((v,i) => {
                return (
                  <tr key={v.deptno}>
                    {/* 데이터를 텍스트로 출력 */}
                    <td>{v.deptno}</td>
                    <td>{v.dname}</td>
                    <td>{v.loc}</td>
                    <td>
                      <button type='button' data-deptno={v.deptno}>
                        수정하기
                      </button>
                    </td>
                    <td>
                      <button type='button' data-deptno={v.deptno} data-dname={v.dname}>
                        삭제하기
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan='5' align='center'>
                  검색결과가 없습니다.
                </td>
              </tr>
            )
           }
          </tbody>
        </Table>
      )}
    </div>
  );
});

export default DepartmentList;