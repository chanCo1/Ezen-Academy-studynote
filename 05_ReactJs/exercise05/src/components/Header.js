import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  & .jumbotron {
    padding: 80px;
    text-align: center;
    background-color: #1abc9c;
    color: #fff;

    h1 {
      font-size: 40px
    }
  }
`;

const NavContainer = styled.nav`

  & {
    overflow: hidden;
    background-color: #333;
    position: sticky;
    top: 0;

    nav {
      display: flex;
      max-width: 1200px;
      margin: auto;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: flex-start;

      .link {
        display: block;
        color: #fff;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;

        &.right {
          margin-left: auto;
        }
  
        &:hover {
          background-color: #ddd;
          color: #222;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer className='header'>
        <div className='jumbotron'>
          <h1>My Website</h1>
          <p>A <b>responsive</b> website create by me.</p>
        </div>
      </HeaderContainer>

      <NavContainer className='navbar'>
        <nav>
          <NavLink className='link' to='/*'>Home</NavLink>
          <NavLink className='link' to='/*'>Link1</NavLink>
          <NavLink className='link' to='/*'>Link2</NavLink>
          <NavLink className='link right' to='/*'>Link3</NavLink> 
        </nav>
      </NavContainer>
    </>  
  );
};

export default Header;