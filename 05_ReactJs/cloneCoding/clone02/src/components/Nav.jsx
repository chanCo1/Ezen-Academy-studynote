/**
 * @filename : Nav.js
 * @author : 박찬우
 * @description : Nav 영역 정의
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// TODO: 스타일 정의
const NavContainer = styled.div`
  & {
    position: fixed;
    width: 100%;
    background-color: #fff;
    padding: 8px 16px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: space-between;
    z-index: 9;

    .linkWrap {
      padding: 8px 0;

      span {
        font-weight: bold;
      }

      .link {
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        color: #222;
        padding: 8px 17px;
        letter-spacing: 3px;

        &:hover {
          background-color: #e1e1e1;
        }
      }
    }
  }
`;

// TODO: Nav 영역 작성, NavLink를 사용한다.
const Nav = () => {
  return (
    <NavContainer>
      <div className="linkWrap">
        <NavLink className="link" to="/home">
          <span>BR</span> Architects
        </NavLink>
      </div>
      <div className="linkWrap">
        <NavLink className="link" to="/projects">
          Projects
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/contact">
          Contact
        </NavLink>
      </div>
    </NavContainer>
  );
};

export default Nav;
