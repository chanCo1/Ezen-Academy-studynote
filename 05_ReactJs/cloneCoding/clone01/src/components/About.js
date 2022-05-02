/**
 * @filename : About.js
 * @author : 박찬우
 * @description : About 영역에 쓰이는 이미지와 텍스트 정의
 */

import React from 'react';
import styled from "styled-components";
import aboutImg from '../assets/img/tablesetting2.jpg';

const AboutContainer = styled.div `
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

      h5 {
        font-size: 18px;
        letter-spacing: 5px;
        margin: 10px 0;
        text-align: center;
        font-family: sans-serif;
        font-weight: 400;
      }

      p {
        margin: 19px 0;
        font-size: 16px;
        line-height: 1.8;
        font-weight: bold;

        &:last-child {
          color: #777;
        }

        span {
          padding: 3px 6px;
          background-color: #e1e1e1;
        }
      }
    }
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <div className='contentWrap'>
        <img src={aboutImg} alt='어바웃 이미지' />
      </div>
      <div className='contentWrap'>
        <h1>About Catering</h1>
        <h5>Tradition since 1889</h5>
        <p>
          The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span>seasonal</span>  ingredients.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </AboutContainer>
  );
};

export default About;
