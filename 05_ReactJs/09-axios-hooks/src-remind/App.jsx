import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';

import Spinner from './components/Spinner';
// import Table from './components/Table';
import useMounterRef from './hook/useMounterRef';

// 생존여부를 표시하기 위한 텍스트 라벨
const SurvivedBox = styled.span`
  &::before {
    background-color: ${({survived}) => survived ? '#090' : '#e00'};
    content: '${({survived}) => survived ? '생존' : '사망'}';
    color: #fff;
    font-weight: 600;
  }
`;

function App() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - hook 정의 시작
  const [{ data, loading, error }, refetch] = useAxios('http://localhost:3001/titanic');

  const [state, setState] = useState({
    sex: '',
    embarked: '',
    survived: '',
  });

  const mountedRef = useRef(false);
  // const mountedRef = useMounterRef();
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - hook 정의 끝

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - onChange 이벤트 시작
  const onSelect = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;
      const key = current.name;
      const getSelect = current[current.selectedIndex].value;
      const newState = { ...state, [key]: getSelect };

      setState(newState);
    },
    [state]
  );
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - onChange 이벤트 끝

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 페이지 마운트 확인 시작
  useEffect(() => {
    setTimeout(() => {
      mountedRef.current = true;
    }, []);
  });
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 페이지 마운트 확인 끝

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - refetch 정의 시작
  useEffect(() => {
    if (mountedRef.current) {
      const setParams = {};

      for (const i in state) {
        if (state[i]) {
          setParams[i] = state[i];
        }
      }

      refetch({
        params: setParams,
      });
    }
  }, [mountedRef, refetch, state]);
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - refetch 정의 끝

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 에러 정의 시작
  if (error) {
    console.error(error);
    return <h2>{error.code} Error</h2>;
  }
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 에러 정의 끝

  let count = 0;

  const head = [
    '승객번호',
    '승객이름',
    '성별',
    '나이',
    '동승자 수',
    '객실등급',
    '방 호수',
    '티켓번호',
    '요금',
    '탑승지',
    '생존여부',
  ];

  return (
    <div>
      <Spinner visible={loading} />

      <h1>09-Axios-Hooks 복습</h1>

      {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 성별 선택 시작 */}
      <select name="sex" onChange={onSelect}>
        <option value="">성별 선택</option>
        <option value="male">남자</option>
        <option value="female">여자</option>
      </select>
      {/* // - - - - - - - - - - - - - - - - - - - - - - - - - - - - 성별 선택 끝 */}

      <select name="embarked" onChange={onSelect}>
        <option value="">탑승지 선택</option>
        <option value="C">세르브루</option>
        <option value="Q">퀸즈타운</option>
        <option value="S">사우샘프턴</option>
      </select>

      <select name="survived" onChange={onSelect}>
        <option value="">생존 선택</option>
        <option value="true">생존</option>
        <option value="false">사망</option>
      </select>

      <table border="1">
        <thead>
          <tr>
            {head.map((v, i) => (
              <th key={i}>{v}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map(
              ({ id, survived, pclass, name, sex, age, sibsp, parch, ticket, fare, cabin, embarked }, i) => {

                count++;

                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{sex}</td>
                    <td>{age}</td>
                    <td>{sibsp + parch}</td>
                    <td>{pclass}</td>
                    <td>{cabin}</td>
                    <td>{ticket}</td>
                    <td>{fare}</td>
                    <td>{embarked}</td>
                    <td><SurvivedBox survived={survived}/></td>
                  </tr>
                );
              }
            )}
        </tbody>
        <tfoot>
          <tr align="center">
            <td colSpan={10}>합계</td>
            <td>{count} 명</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default memo(App);
