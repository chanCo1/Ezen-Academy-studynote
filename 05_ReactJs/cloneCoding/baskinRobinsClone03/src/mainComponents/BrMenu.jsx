/**
 * @filename : BrMenu.jsx
 * @author : 박찬우
 * @description : BrMenu 영역 정의
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BrMenuContainer = styled.div`
  & {
    position: relative;
    width: 100%;
    height: 1157px;
    background: url(./img/bg_menu.jpg) no-repeat center center;
    overflow: hidden;

    .menuTitle {
      padding: 78px 0 0;
      text-align: center;
    }

    .menuList {
      position: relative;
      width: 981px;
      margin: 50px auto 0;
      text-align: center;

      .icecream {
        position: absolute;
        top: 3%;
        left: 22%;
        width: 400px;
        height: 300px;
        opacity: 0;
      } 

      .icecreamCake {
        position: absolute;
        top: 3%;
        right: 6%;
        width: 276px;
        height: 472px;
        opacity: 0;
      } 

      .beverage {
        position: absolute;
        top: 40%;
        left: 1%;
        width: 230px;
        height: 366px;
        opacity: 0;
      } 

      .coffee {
        position: absolute;
        top: 40%;
        left: 29%;
        width: 329px;
        height: 292px;
        opacity: 0;
      } 

      .gift {
        position: absolute;
        bottom: 21%;
        right: 6%;
        width: 275px;
        height: 183px;
        opacity: 0;
      } 

      .dessert {
        position: absolute;
        bottom: 4%;
        left: 29%;
        width: 329px;
        height: 177px;
        opacity: 0;
      } 
    }
  }
`;

const BrMenu = () => {
  return (
    <BrMenuContainer>
      <div className='menuTitle'>
        <img src="./img/h_menu.png" alt="BR Menu" />
      </div>
      <div className='menuList'>
        <img src="./img/img_menu_list_220429.png" alt="메뉴 리스트" />
        <Link to="/" className='icecream'><h4>ICECREAM</h4></Link>
        <Link to="/" className='icecreamCake'><h4>ICECREAMCAKE</h4></Link>
        <Link to="/" className='beverage'><h4>BEVERAGE</h4></Link>
        <Link to="/" className='coffee'><h4>COFFEE</h4></Link>
        <Link to="/" className='gift'><h4>GIFT</h4></Link>
        <Link to="/" className='dessert'><h4>DESSERT</h4></Link>
      </div>
    </BrMenuContainer>
  );
};

export default memo(BrMenu);