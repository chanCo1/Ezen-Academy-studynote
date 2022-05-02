/**
 * @filename : Header.js
 * @author : 박찬우
 * @description : Header 영역 정의
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.div `
  & {
    position: fixed;
    width: 100%;
    background-color: #fff;
    padding: 8px 16px;
    box-shadow: 0 1px 8px rgba(0,0,0,.3);
    display: flex;
    justify-content: space-between;
    z-index: 9;
    
    .linkWrap {
      padding: 8px 0;

      .link {
        text-decoration: none;
        font-size: 15px;
        font-weight: bold;
        color: #222;
        padding: 8px 16px;
        letter-spacing: 3px;

        &:hover {
          background-color: #e5e5e5;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className='linkWrap'>
        <NavLink className='link' to='/home'>Gourmet au Catering</NavLink>
      </div>
      <div className='linkWrap'>
        <NavLink className='link' to='/about'>About</NavLink>
        <NavLink className='link' to='/menu'>Menu</NavLink>
        <NavLink className='link' to='/contact'>Contact</NavLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;
