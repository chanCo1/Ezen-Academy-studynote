import React, { memo, useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';

import { getMovieRank } from '../slices/MovieRankSlice';
import ErrorPage from '../components/ErrorPage';

const MovieRank = () => {

  const { data, loading, error } = useSelector((state) => state.movieRank);

  const dispatch = useDispatch();

  const [targetDt, setTargetDt] = useState(dayjs().add(-1, 'd').format('YYYY-MM-DD'));

  const onDateChange = useCallback(e => {
    e.preventDefault();

    setTargetDt(e.target.value);
  }, [])
  
  useEffect(() => {
    dispatch(getMovieRank({ targetDt: targetDt.replaceAll('-', '') }));
  }, [dispatch, targetDt]);

  const head = ['순위', '제목', '관람객 수', '매출액', '누적 관람객 수', '누적 매출액'];

  return (
    <div>

      <form>
        <input type="date" placeholder='날짜 선택' value={targetDt} onChange={onDateChange} />
      </form>
      <hr />

      {error ? <ErrorPage error={error} /> : (
        <table border='1'>
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
        </table>
      )}
      
    </div>
  );
};

export default memo(MovieRank);