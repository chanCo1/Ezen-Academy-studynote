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

  /** ????????? ?????? ????????? */
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.Professor);

  /** ????????? ?????? ????????????????????? ?????? naviagte?????? ?????? */
  const navigate = useNavigate();

  /** QueryString ????????? ?????? */
  const { query, rows, page } = useQueryString({
    query: '',
    rows: 10,
    page: 1,
  });

  /** ?????? ??? ??????????????? ????????? ???????????? */
  const refRowsDropdown = useRef();

  /** ?????? ????????? ????????? ?????? ?????? */
  const refTextInput = useRef();

  /** ?????? ????????? ?????? QueryString??? ????????? ??? ?????? ???????????? hook -> ???????????? ?????? ?????? ????????????. */
  useEffect(() => {
    dispatch(getList({
      query: query,
      rows: rows,
      page: page,
    }));

    refRowsDropdown.current.value = rows;
    refTextInput.current.value = query;

  }, [dispatch, rows, query, page]);

  /** ?????? ????????? */
  const onSearchSubmit = useCallback(e => {
    e.preventDefault();

    const dropdown = refRowsDropdown.current;
    const input = refTextInput.current;

    navigate(`/?query=${input.value}&rows=${dropdown.value}`);
  }, [navigate]);

  /** ?????? ?????? ?????? ????????? ?????? -> ?????? ???????????? ??????. ?????? ????????? ?????? id??? path??????????????? ????????? */
  const onEditClick = useCallback(e => {
    e.preventDefault();

    const current = e.target;
    const profno = current.dataset.profno;

    navigate(`/professor_edit/${profno}`)
  }, [navigate]);

  /** ?????? ?????? ?????? ????????? ?????? -> ???????????? ?????? ?????? ?????? -> data ?????? ??????????????? ????????? ?????? ????????????. */
  const onDeleteClick = useCallback(e => {
    e.preventDefault();

    const current = e.target;

    if(window.confirm(`?????? ${current.dataset.name}???(???) ?????????????????????????`)) {
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
          <option value='10'>10?????? ??????</option>
          <option value='20'>20?????? ??????</option>
          <option value='30'>30?????? ??????</option>
        </select>

        <div>
          <input type='text' ref={refTextInput} />
          <button type='submit'>??????</button>
        </div>
        <NavLink to='/professor_add'>????????????</NavLink>
      </form>

      {error ? (
        <ErrorView error={error} />
      ) : data && (
        <>
          <Table>
            <thead>
              <tr>
                <th>????????????</th>
                <th>??????</th>
                <th>?????????</th>
                <th>??????</th>
                <th>??????</th>
                <th>????????????</th>
                <th>??????</th>
                <th>????????????</th>
                <th>??????</th>
                <th>??????</th>
              </tr>
            </thead>
            <tbody>
              {data.item.length > 0 ? (
                data.item.map((v,i) => {
                  return (
                    <tr key={v.profno}>
                      {/* ???????????? ???????????? ?????? */}
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
                          ????????????
                        </button>
                      </td>
                      <td>
                        <button type='button' data-profno={v.profno} data-name={v.name} onClick={onDeleteClick}>
                          ????????????
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan='5' align='center'>
                    ??????????????? ????????????.
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