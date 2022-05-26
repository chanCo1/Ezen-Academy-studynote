import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useMountedRef from '../hook/useMounterRef';
import dayjs from 'dayjs';
import styled from 'styled-components';

import { getMovieRank } from '../slices/MovieRankSlice';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import Table from '../components/Table'
import BarChartView from '../components/BarChartView';

const MovieRank = () => {

  // Redux Store로 부터 ajax 관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.movieRank);

  // dispatch 함수 사용
  const dispatch = useDispatch();

  // 검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetDt, setTargetDt] = useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));

  // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
  const mountedRef = useMountedRef();

  // 페이지가 열림 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 -> ajax 호출
  useEffect(() => {
    dispatch(getMovieRank({ targetDt: targetDt.replaceAll('-', '') }));
  }, [targetDt, dispatch]);

  // 드롭다운 선택값이 변경된 경우의 이벤트
  const onDateChange = useCallback((e) => {
    e.preventDefault();

    setTargetDt(e.target.value);
  }, []);

  // 그래프에 전달할 데이터
  const [chartData, setChartData] = useState();

  // ajax 연동 결과에서 그래프에 표시할 데이터만 추려내어 chartData 상태값에 반영한다.
  // ajax는 컴포넌트가 화면에 마운트됨과 동시에 실행되므로, 이 처리는 컴포넌트가 화면에 마운트 된 이후에 수행되어야 한다.
  useEffect(() => {
    // 컴포넌트가 화면에 마운트 된 이후에만 동작하도록 한다.
    if(mountedRef.current) {
      const newData = {
        movieNm: [],
        audiCnt: [],
      };

      data.boxOfficeResult.dailyBoxOfficeList.forEach((v,i) => {
        console.log(v);
        newData.movieNm.push(v.movieNm);
        newData.audiCnt.push(v.audiCnt);
      });

      setChartData(newData);
    }
  }, [mountedRef, data]);

  const head = ['순위', '제목', '관람객 수', '매출액', '누적 관람객 수', '누적 매출액'];

  return (
    <div>
      <Spinner visible={loading} />

      <form>
        <input type="date" placeholder='날짜 선택' value={targetDt} onChange={onDateChange} />
      </form>

      <hr />

      {error ? <ErrorPage error={error} /> : (
        <>
          <Table>
            <thead>
              <tr>
                {head.map((v,i) => <th key={i}>{v}</th>)}
              </tr>
            </thead>
            <tbody>
              {data && data.boxOfficeResult.dailyBoxOfficeList.map((v,i) => {
                return (
                  <tr key={i}>
                    <td>{v.rank}</td>
                    <td>{v.movieNm}</td>
                    <td>{parseInt(v.audiCnt).toLocaleString()}명</td>
                    <td>{parseInt(v.salesAmt).toLocaleString()}원</td>
                    <td>{parseInt(v.audiAcc).toLocaleString()}명</td>
                    <td>{parseInt(v.salesAcc).toLocaleString()}원</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            <BarChartView chartData={chartData} />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(MovieRank);