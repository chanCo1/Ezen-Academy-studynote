/**
 * @filename : Main.js
 * @author : 박찬우
 * @description : Header영역의 이미지 및 텍스트 정의
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';
// 이미지 참조
import headerImage from '../assets/img/architect.jpg';

// TODO: 스타일 정의
const HeaderContainer = styled.div`
  & {
    width: 100%;

    .imgWrap {
      position: relative;
      width: 1500px;
      height: 800px;
      margin: auto;

      .innerTitle {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-top: 15px;

        h1 {
          font-size: 35px;
          font-weight: 400;
          color: #fff;
          letter-spacing: 2px;

          span {
            background-color: #000;
            padding: 7px 16px;
            font-weight: 600;
            opacity: 0.7;
          }
        }
      }
    }
  }
`;

// TODO: Header 영역 작성
const Header = () => {
  return (
    <HeaderContainer>
      <div className="imgWrap">
        <img src={headerImage} width="1500px" height="800px" alt="메인이미지" />
        <div className="innerTitle">
          <h1>
            <span>BR</span> Architects
          </h1>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
