import React from 'react';
import styled from 'styled-components';

// Footer style
const FooterContainer = styled.div`
  position: relative;
  width: 768px;
  margin: auto;
  padding: 30px 0 15px;

  .topFooter {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    li {
      display: flex;
      border-right: 1px solid #999;
      padding: 0 7px;
      line-height: 1;

      &:last-child { border: none; }

      a {
        font-size: 11px;
        color: #222;

        &.bold { font-weight: bold; }
        &:hover { 
          text-decoration: underline;
          color: green; 
        }
      }
    }
  }

  .bottomFooter {
    display: flex;
    justify-content: center;

    span {
      margin: 3px;
      font-size: 10px;

      a {
        font-weight: 600;
        font-size: 11px;
        color: #555;

        &:hover { 
          text-decoration: underline;
          color: green; 
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ul className='topFooter'>
        <li><a href="#!">이용약관</a></li>
        <li><a href="#!" className='bold'>개인정보처리방침</a></li>
        <li><a href="#!">책임의 한계와 법적고지</a></li>
        <li><a href="#!" className='last'>회원정보 고객센터</a></li>
      </ul>
      <div className='bottomFooter'>
        <span><a href="https://www.naver.com"><img style={{width: '60px'}} src="./img/Naver_Logo.png" alt="네이버 로고" /></a></span>
        <span>Copyright</span>
        <span><a href="#!">NAVER Corp.</a></span>
        <span>All Rights Reserved</span>
      </div>
    </FooterContainer>
  );
};

export default Footer;