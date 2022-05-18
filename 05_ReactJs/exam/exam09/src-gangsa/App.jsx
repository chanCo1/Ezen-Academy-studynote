/**
 * @description: 연습문제 09 - 풀이
 */

import React, { memo, useCallback, useEffect, useState } from 'react';
import useMounterRef from './hook/useMounterRef';

// 패키지 참조
import styled from 'styled-components';
import Spinner from './components/Spinner';
import Table from './components/Table';
import useAxios from 'axios-hooks';

// 드롭다운을 배치하기 위한 박스
const SelectContainer = styled.div`
  position: sticky;
  top: 0;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 0;

  select {
    margin-left: 15px;
    font-size: 16px;
    padding: 5px 10px;

  }
`;

function App() {

  const [{ data, loading, error }, refetch] = useAxios('http://localhost:3001/traffic_acc');
  const [ year, setYear ] = useState('');

  // 이 컴포넌트가 화면에 마운트 되옸는지를 확인하기 위한 hook
  const mountedRef = useMounterRef();

  // 드롭다운 선택 변경시 호출되는 이벤트
  const onSelectChagne = useCallback(e => {
    e.preventDefault();

    // 드롭다운의 입력값 취득
    const current = e.target;
    const value = current[current.selectedIndex].value;

    setYear(value);
  }, []);

  // state 상태값이 변경되었을 때 실행될 hook
  useEffect(() => {
    // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
    if(mountedRef.current) {
      const params = {};

      if(year) {
        params.year = parseInt(year);
      }

      // ajax 재요청
      refetch({
        params: params,
      })
    }
    // hook 함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야 한다.
  }, [mountedRef, refetch, year]);

  // TODO: 에러가 발생했다면 에러 메세지를 표시
  if(error) {
    console.error(error);

    // 컴포넌트 자체가 함수이고, 함수가 실행도중 리턴을 하므로 이 내용을 화면에 표시하고 컴포넌트의 실행은 중단된다.
    return (
      <div>
        <h1>{error.code} Error</h1>
        <p>{error.message}</p>
      </div>
    );
  };

  
  const head = ['번호', '년도', '월', '교통사고 건수', '사망자 수', '부상자 수'];
  
  // 메인화면 구성
  return (
    <div>
      <h1>EXAM09</h1>

      {/* 로딩 화면 */}
      <Spinner visible={loading} />

      <SelectContainer>
        <select name="year" onChange={onSelectChagne}>
          <option value="">-- 년도 선택 --</option>
          {[...new Array(2018 - 2005 + 1)].map((v,i) => {
            return (<option key={i} value={2005 + i}>{2005 + i} 년도</option>);
          })}
        </select>
      </SelectContainer>

      {data && (
        <Table>
          <thead>
            <tr>
              {head.map((v,i) => <th key={i}>{v}</th>)}
            </tr>
          </thead>
          <tbody>
          {data && data.map(({
            id, year, month, accident, death, injury
          }, i) => {
            return (
              <tr key={i}>
                <td>{id}</td>
                <td>{year} 년</td>
                <td>{month} 월</td>
                <td>{accident.toLocaleString()} 건</td>
                <td>{death.toLocaleString()} 명</td>
                <td>{injury.toLocaleString()} 명</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th colSpan={3}>합계</th>
            <th>{data.map((v,i) => v.accident).reduce((a,b) => a + b, 0).toLocaleString()} 건</th>
            <th>{data.map((v,i) => v.death).reduce((a,b) => a + b, 0).toLocaleString()} 명</th>
            <th>{data.map((v,i) => v.injury).reduce((a,b) => a + b, 0).toLocaleString()} 명</th>
          </tr>
        </tfoot>
        </Table>
      )}
    </div>
  );
}

export default memo(App);
