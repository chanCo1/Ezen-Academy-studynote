import React from 'react';

// scss 모듈 참조 -> 참조변수 이름을 지정한다.
import myScssModule from "../assets/scss/style.module.scss";

/**
 * SCSS를 사용하는 컴포넌트
 * - 패키지 필요
 *    yarn add node-sass
 */

const ScssMoudle = () => {
  return (
    <div>
      <h2>ScssMoudle</h2>
      <div className={myScssModule.myScss}>
        <div className={`${myScssModule.myScssBox} ${myScssModule.red}`} />
        <div className={`${myScssModule.myScssBox} ${myScssModule.green}`} />
        <div className={`${myScssModule.myScssBox} ${myScssModule.blue}`} />
        <div className={`${myScssModule.myScssBox} ${myScssModule.orange}`} />
        <div className={`${myScssModule.myScssBox} ${myScssModule.yellow}`} />
        <div className={`${myScssModule.myScssBox} ${myScssModule.pink}`} />
      </div>
    </div>
  );
};

export default ScssMoudle;
