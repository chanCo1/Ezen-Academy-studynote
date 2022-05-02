/**
 * @filename : About.js
 * @author : 박찬우
 * @description : Footer영역의 텍스트와 스타일 정의
 */

import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  & {
    width: 100%;
    background-color: #f1f1f1;
    padding: 32px 0;

    p {
      font-size: 15px;
      text-align: center;
      margin: 15px;
      
      &>span {
        text-decoration: underline;

        &:hover {
          color: green;
          cursor: pointer;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Powered by <span>w3.css</span>
      </p>
    </FooterContainer>
  );
};

export default Footer;
