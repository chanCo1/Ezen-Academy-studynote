import React, { memo, useEffect, useCallback, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { useQueryString } from '../hooks/useQueryString';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';
import { getList, deleteItem } from '../slice/ProfessorSlice';

const ContainerDiv = styled.div`
  position: relative;
  width: 800px;
  margin: auto;

  form {
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;

    select {
      border: none;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #999;
      }
    }
    
    input {
      width: 200px;
      padding: 5px 10px;
      outline: none;
      border: none;
      border-bottom: 1px solid #888;
    }

    button {
      margin-left: 10px;
      padding: 7px 10px;
      cursor: pointer;
      border: none;

      &:active {
        transform: scale(.9, .9);
      }
    }

    a {
      display: flex;
      color: #222;
      align-items: center;

      &:hover {
        border-bottom: 1px solid #999;
      }
    }
  }
`;

const Table = styled.table`
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;

  th {
    padding: 20px 0;
  }

  td {
    padding: 10px 0;
  }

  button {
    padding: 5px 10px;
    cursor: pointer;
    border: none;

    &:active {
      transform: scale(.9, .9);
    }
  }
`;

const Pagination = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  display: flex;
  justify-content: center;

  a {
    color: #000;
    padding: 5px 12px;
    text-decoration: none;
    transition: background-color .3s;
    margin: 0 5px;

    &.current-page {
      background-color: #232a2d;
      color: #fff;
      border-radius: 5px;
    }

    &.disabled {
      color: #ccc;
      cursor: not-allowed;
    }

    &:hover:not(.current-page) {
      background-color: #ddd;
      border-radius: 5px;
    }
  }
`;


const ProfessorList = memo(() => {

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.Professor);

  /** 페이지 강제 이동을처리하기 위한 naviagte함수 생성 */
  const navigate = useNavigate();

  /** QueryString 문자열 얻기 */
  const { query, rows, page } = useQueryString({
    query: '',
    rows: 10,
    page: 1,
  });

  /** 목록 수 드롭다운에 접근할 참조변수 */
  const refRowsDropdown = useRef();

  /** 입력 요소에 접근할 참조 변수 */
  const refTextInput = useRef();

  /** 최초 마운트 혹은 QueryString이 변경될 때 마다 실행되는 hook -> 리덕스를 통해 목록 조회한다. */
  useEffect(() => {
    dispatch(getList({
      query: query,
      rows: rows,
      page: page,
    }));

    refRowsDropdown.current.value = rows;
    refTextInput.current.value = query;

  }, [dispatch, rows, query, page]);

  /** 검색 이벤트 */
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();

    const dropdown = refRowsDropdown.current;
    const input = refTextInput.current;

    navigate(`/?query=${input.value}&rows=${dropdown.value}`);
  }, [navigate]);

  /** 수정 버튼 클릭 이벤트 처리 -> 수정 페이지로 이동. 수정 대상에 대한 id를 path파라미터로 전달함 */
  const onEditClick = useCallback(e => {
    e.preventDefault();

    const current = e.target;
    const profno = current.dataset.profno;

    navigate(`/professor_edit/${profno}`)
  }, [navigate]);

  /** 삭제 버튼 클릭 이벤트 처리 -> 리덕스를 통해 삭제 처리 -> data 값이 갱신되므로 화면에 자동 반영된다. */
  const onDeleteClick = useCallback(e => {
    e.preventDefault();

    const current = e.target;

    if(window.confirm(`정말 ${current.dataset.name}을(를) 삭제하시겠습니까?`)) {
      dispatch(deleteItem({
        profno: current.dataset.profno,
      }));
    }
  }, [dispatch]);

  return (
    <ContainerDiv>
      <Spinner visible={loading} />

      <form onSubmit={onSearchSubmit}>
        <select name='rows' onChange={onSearchSubmit} ref={refRowsDropdown}>
          <option value='10'>10개씩 보기</option>
          <option value='20'>20개씩 보기</option>
          <option value='30'>30개씩 보기</option>
        </select>

        <div>
          <input type='text' ref={refTextInput} />
          <button type='submit'>검색</button>
        </div>
        <NavLink to='/professor_add'>교수등록</NavLink>
      </form>

      {error ? (
        <ErrorView error={error} />
      ) : data && (
        <>
          <Table>
            <thead>
              <tr>
                <th>교수번호</th>
                <th>이름</th>
                <th>아이디</th>
                <th>직급</th>
                <th>급여</th>
                <th>입사날짜</th>
                <th>수당</th>
                <th>학과번호</th>
                <th>수정</th>
                <th>삭제</th>
              </tr>
            </thead>
            <tbody>
              {data.item.length > 0 ? (
                data.item.map((v,i) => {
                  return (
                    <tr key={v.profno}>
                      {/* 데이터를 텍스트로 출력 */}
                      <td>{v.profno}</td>
                      <td>{v.name}</td>
                      <td>{v.userid}</td>
                      <td>{v.position}</td>
                      <td>{v.sal}</td>
                      <td>{v.h_date}</td>
                      <td>{v.comm}</td>
                      <td>{v.deptno}</td>
                      <td>
                        <button type='button' data-profno={v.profno} onClick={onEditClick}>
                          수정하기
                        </button>
                      </td>
                      <td>
                        <button type='button' data-profno={v.profno} data-name={v.name} onClick={onDeleteClick}>
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

          {data && (
            <Pagination>
              {data.pagination.prevGroupLastPage > 0 ? (
                <li>
                  <NavLink to={`/query=${query}&rows=${rows}&page=${data.pagination.prevGroupLastPage}`}>&laquo;</NavLink>
                </li>
              ) : (
                <li><NavLink to='#' className='disabled'>&laquo;</NavLink></li>
              )}

              {(() => {
                const li = [];
                const start = data.pagination.groupStart;
                const end = data.pagination.groupEnd + 1;

                for(let i = start; i < end; i++) {
                  if(i === data.pagination.nowPage) {
                    li.push(
                      <li key={i}>
                        <NavLink to='#' className='current-page'>{i}</NavLink>
                      </li>
                    );
                  } else {
                    li.push(
                      <li key={i}>
                        <NavLink to={`/?query=${query}&rows=${rows}&page=${i}`}>{i}</NavLink>
                      </li>
                    );
                  }
                }
                return li;
              })()}

              {data.pagination.nextGroupLastPage > 0 ? (
                <li>
                  <NavLink to={`/query=${query}&rows=${rows}&page=${data.pagination.nextGroupLastPage}`}>&raquo;</NavLink>
                </li>
              ) : (
                <li><NavLink to={`/?query=${query}&rows=${rows}&page=${data.pagination.groupEnd}`} className="disabled">&raquo;</NavLink></li>
              )}
            </Pagination>
          )}
        </>
      )}
    </ContainerDiv>
  );
});

export default ProfessorList;