import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieRank } from '../slices/MovieRankSlice';
import dayjs from 'dayjs';

import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import Table from '../components/Table'

const MovieRank = () => {

  // Redux Store로 부터 ajax 관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.movieRank);
  const dispatch = useDispatch();

  // 검색을 위해 파라미터로 전달할 날짜값을 관리하는 상태변수
  const [targetDt, setTargetDt] = useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));

  // 페이지가 열림 직후와 날짜값이 변경된 경우 리덕스 액션함수 디스패치 -> ajax 호출
  useEffect(() => {
    dispatch(getMovieRank({ targetDt: targetDt.replaceAll('-', '') }));
  }, [targetDt, dispatch]);

  // 드롭다운 선택값이 변경된 경우의 이벤트
  const onDateChange = useCallback((e) => {
    e.preventDefault();

    setTargetDt(e.target.value);
  }, []);

  const head = ['순위', '제목', '관람객 수', '매출액', '누적 관람객 수', '누적 매출액'];

  return (
    <div>
      <Spinner visible={loading} />

      <form>
        <input type="date" placeholder='날짜 선택' value={targetDt} onChange={onDateChange} />
      </form>

      <hr />

      {error ? <ErrorPage error={error} /> : (
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
      )}
    </div>
  );
};

export default memo(MovieRank);