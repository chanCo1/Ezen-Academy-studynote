/**
 * @filename : Menu.js
 * @author : 박찬우
 * @description : Menu 영역에 쓰이는 이미지와 텍스트 정의
 */

 import React from 'react';
 import styled from "styled-components";
 import menuImg from '../assets/img/tablesetting.jpg';

 const MenuContainer = styled.div`
  & {
    width: 1100px;
    margin: auto;
    padding: 64px 0;
    display: flex;

    .contentWrap {
      img {
        width: 502px;
        opacity: .8;
      }

      h1 {
        font-size: 36px;
        letter-spacing: 5px;
        text-align: center;
        margin: 10px 0 50px;
        font-family: sans-serif;
        font-weight: 400;
      }

      h4 {
        font-size: 20px;
        font-family: sans-serif;
        font-weight: 400;
        letter-spacing: 5px;
        margin: 10px 0;
        line-height: 1.5;
      }

      p {
        margin: 15px 0;
        font-size: 15px;
        color: #777;
      }
    }
  }
 `;

 const Menu = () => {
   return (
    <MenuContainer>
      <div className='contentWrap'>
        <h1>Our Menu</h1>
        <h4>Bread Basket</h4>
        <p>Assortment of fresh baked fruit breads and muffins 5.50</p>
        <br />
        <h4>Honey Almond Granola with Fruits</h4>
        <p>Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p>
        <br />
        <h4>Belgian Waffle</h4>
        <p>Vanilla flavored batter with malted flour 7.50</p>
        <br />
        <h4>Scrambled eggs</h4>
        <p>Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p>
        <br />
        <h4>Blueberry Pancakes</h4>
        <p>With syrup, butter and lots of berries 8.50</p>
      </div>
      <div className='contentWrap'>
        <img src={menuImg} alt='메뉴 이미지' />
      </div>
    </MenuContainer>
   );
 };

 export default Menu;

 