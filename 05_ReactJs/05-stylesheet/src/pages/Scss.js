import React from 'react';
import "../assets/scss/style.scss";

/**
 * SCSS를 사용하는 컴포넌트
 * - 패키지 필요
 *    yarn add node-sass
 */

const Scss = () => {
  return (
    <div>
      <h2>Scss</h2>
      <div className='myScss'>
        <div className='myScssBox red' />
        <div className='myScssBox green' />
        <div className='myScssBox blue' />
        <div className='myScssBox orange' />
        <div className='myScssBox yellow' />
        <div className='myScssBox pink' />
      </div>
    </div>
  );
};

export default Scss;
