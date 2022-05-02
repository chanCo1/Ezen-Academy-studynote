/**
 * @filename : Main.js
 * @author : 박찬우
 * @description : 메인에 이미지 및 텍스트 정의
 */

import React from 'react';
import styled from 'styled-components';
import mainImage from '../assets/img/hamburger.jpg';

const MainContainer = styled.div `
  & {
    width: 100%;

    .imgWrap {
      width: 1600px;
      height: 800px;
      margin: auto;
      
      .innerTitle {
        position: relative;
        bottom: 12%;
        padding: 12px 24px;
        
        h1 {
          font-size: 36px;
          color: #555;
          letter-spacing: 2px;
          margin: 10px 0;
        }
      }
    }
  }

`;

const Main = () => {
  return (
    <MainContainer>
      <div className='imgWrap'>
        <img src={mainImage} width='1600px' height='800px' alt='메인이미지' />
        <div className='innerTitle'>
          <h1>Le Catering</h1>
        </div>
      </div>
    </MainContainer>
  );
};

export default Main;
