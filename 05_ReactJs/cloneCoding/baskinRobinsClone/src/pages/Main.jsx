/**
 * @filename : Main.jsx
 * @author : chanCo
 * @description : 메인 페이지에 쓰이는 모든 컴포넌트 참조
 */

import React, { memo } from 'react';

import BrMainSlide from '../mainComponents/BrMainSlide';
import BrEvent from '../mainComponents/BrEvent';
import BrMenu from '../mainComponents/BrMenu';
import BrStore from '../mainComponents/BrStore';
import BrSns from '../mainComponents/BrSns';

const Main = () => {
  return (
    <>
      <BrMainSlide />
      <BrEvent />
      <BrMenu />
      <BrStore />
      <BrSns />
    </>
  );
};

export default memo(Main);