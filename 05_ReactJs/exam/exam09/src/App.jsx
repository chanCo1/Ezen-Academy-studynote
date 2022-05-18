import React, { memo, useCallback, useEffect, useState } from 'react';
// useAxios 참조
import useAxios from 'axios-hooks';

// 커스텀 hook 참조
import useMounterRef from './hook/useMounterRef';

const App = () => {

  // ------------------------------------------------------- hook 정의 시작
  // useAxios로 데이터 호출
  const [{ data, loading, error }, refetch] = useAxios('http://localhost:3001/traffic_acc');
  // 연도에 따른 상태값 정의
  const [ year, setYear ] = useState('');
  // ------------------------------------------------------- hook 정의 끝


  // ------------------------------------------------------- 드롭다운 이벤트 시작
  // 드롭다운 선택 변경시 호출되는 이벤트
  const onSelectChagne = useCallback(e => {
    e.preventDefault();

    // 드롭다운의 입력값 가져온다.
    const current = e.target;
    const value = current[current.selectedIndex].value;

    setYear(value);
  }, []);

  // 이 컴포넌트가 화면에 마운트 되었는지를 확인
  const mountedRef = useMounterRef();

  // 상태값이 변경되었을 때 실행될 hook
  useEffect(() => {
    // 화면이 마운트 된 후 true값이라면
    if(mountedRef.current) {
      const setParams = {};
      console.log(setParams);

      if(year) {
        setParams.year = parseInt(year);
      }

      // ajax 재요청
      refetch({
        params: setParams,
      });
    }
    // hook 함수 안에서 다른 상태값을 사용할 경우 해당 상태값을 모니터링 해야한다.
  }, [mountedRef, refetch, year]);
  // ------------------------------------------------------- 드롭다운 이벤트 끝


  // ------------------------------------------------------- 에러발생 시작
  if(error) {
    console.error(error);

    return (
      <div>
        <h1>{error.code} Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }
  // ------------------------------------------------------- 에러발생 끝

  const head = ['번호', '년도', '월', '교통사고 건수', '사망자 수', '부상자 수'];

  return (
    <div>
      <select name="year" onChange={onSelectChagne}>
        <option value="">-- 연도 선택 --</option>
        {[...new Array(2018-2005+1)].map((v,i) => 
          <option key={i} value={2005+i}>{2005 + i}</option> 
        )}
      </select>

      {data && (
        <table border='1'>
          <thead align='center'>
            <tr>
              {head.map((v,i) => <th key={i}>{v}</th>)}
            </tr>
          </thead>
          <tbody align='center'>
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
              <th>{data.map((v,i) => v.accident).reduce((a, b) => a + b).toLocaleString()} 건</th>
              <th>{data.map((v,i) => v.death).reduce((a, b) => a + b).toLocaleString()} 건</th>
              <th>{data.map((v,i) => v.injury).reduce((a, b) => a + b).toLocaleString()} 건</th>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default memo(App);