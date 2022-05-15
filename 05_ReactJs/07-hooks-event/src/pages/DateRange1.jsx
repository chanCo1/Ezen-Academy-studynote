import React, { useState } from 'react';
import dayjs from 'dayjs';

/**
 * useState를 사용하여 날짜 범위 선택 기능 구현
 */

const DateRange1 = () => {

  const day = dayjs();

  // const [startDate, setStartDate] = useState();
  // const [endDate, setEndDate] = useState();
  
  // 위에꺼를 이렇게 축약할수 있다.
  // 화면에 출력할 상태값을 JSON객체 myDate로 정의하고, 이 객체의 값을 갱신할 수 있는 함수를 setMyDate로 선언
  const [myDate, setMydate] = useState({
    startDate: day.format('YYYY-MM-DD'),
    endDate: day.format('YYYY-MM-DD'),
  });

  return (
    <div>
      <h2>DateRange1</h2>

      <p>
        {myDate.startDate} ~ {myDate.endDate}
      </p>

      <p>
        <button type='button' onClick={(e) => {
          setMydate({...myDate, startDate: day.add(-7, 'd').format('YYYY-MM-DD')});
        }}>7일 전</button>

        <button type='button' onClick={(e) => {
          setMydate({...myDate, startDate: day.add(-15, 'd').format('YYYY-MM-DD')});
        }}>15일 전</button>

        <button type='button' onClick={(e) => {
          setMydate({...myDate, startDate: day.add(-1, 'M').format('YYYY-MM-DD')});
        }}>1개월 전</button>

        <button type='button' onClick={(e) => {
          setMydate({...myDate, startDate: day.add(-3, 'M').format('YYYY-MM-DD')});
        }}>3개월 전</button>

        <button type='button' onClick={(e) => {
          setMydate({...myDate, startDate: day.add(-6, 'M').format('YYYY-MM-DD')});
        }}>6개월 전</button>
      </p>
    </div>
  );
};

export default DateRange1;