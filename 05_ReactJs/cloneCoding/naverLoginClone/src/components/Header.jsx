import React from 'react';
import styled from 'styled-components';

// Header style
const HeaderContainer = styled.div`
  position: relative;
  width: 768px;
  margin: auto;
  padding: 60px 0 20px;
  overflow: hidden;

  a {
    margin: 0 264px;
    display: flex;
    
    img {
      width: 240px;
      height: 44px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <a href="https://www.naver.com" target='_blank' rel="noreferrer">
        <img src="./img/Naver_Logo.png" alt="네이버 로고" />
      </a>
    </HeaderContainer>
  );
};

export default Header;