import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';

import { getCovid19 } from '../slice/Covid19Slice';
import { useQueryString } from '../hooks/useQueryString';
import useMountedRef from '../hooks/useMounterRef';

import LineChartView from '../components/LineChartView';
import ErrorPage from '../components/ErrorPage';
import Spinner from '../components/Spinner';

const Covid19 = () => {

  // path 파라미터 받아오기
  const { category } = useParams();

  // querystring의 값 가져오기
  const { date_gte } = useQueryString();
  const { date_lte } = useQueryString();

  // Redux Store로 부터 ajax 관련 상태값 구독
  const { data, loading, error } = useSelector((state) => state.covid19);

  // dispatch 함수 사용
  const dispatch = useDispatch();

  // 이 컴포넌트가 화면에 마운트 되었는지를 확인하기 위한 hook
  const mountedRef = useMountedRef();

  // 날짜값에 따라 액션함수 디스패치
  useEffect(() => {
    dispatch(getCovid19({
      gte: date_gte + 'T00:00:00Z',
      lte: date_lte + 'T00:00:00Z',
    }));
  }, [dispatch, date_gte, date_lte]);

  const [chartData, setChartData] = useState();

  useEffect(() => {
    if(mountedRef.current) {
      const newData = {
        category: [],
        date: [],
      };

      data.forEach((v,i) => {
        // newData.category.push(parseInt(v[category]).toLocaleString());
        newData.category.push(v[category]);
        newData.date.push(dayjs(v.date).add(1, 'm').format('MM/DD'));
      })

      setChartData(newData);
    }
  }, [mountedRef, data, category])

  return (
    <div>
      <Spinner visible={loading} />

      {error ? <ErrorPage error={error} /> : (
        <div>
          {category && <LineChartView chartData={chartData} />}
        </div>
      )}
      
    </div>
  );
};

export default Covid19;