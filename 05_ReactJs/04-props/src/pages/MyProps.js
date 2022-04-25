import React from 'react';
import MyPropsSub from '../components/MyPropsSub';
import Meta from '../components/Meta';

const MyProps = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js에서의 설정을 덮어 쓰게 된다. */}
      <Meta title="MyProps.js" description="여기는 MyProps.js 파일 입니다." url={window.location.href} />

      <h2>MyProps</h2>

      {/* 컴포넌트에게 props 전달하기 - 문자열 값은 따옴표로 감싼다. 그 외의 형식은 "{}"로 감싼다. */}
      <MyPropsSub />
      <MyPropsSub name="민호" age="19" />
      <MyPropsSub name="수영" age={21} />
    </div>
  );
};

export default MyProps;