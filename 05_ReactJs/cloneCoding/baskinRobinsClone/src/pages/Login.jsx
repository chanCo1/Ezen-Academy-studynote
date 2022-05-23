/**
 * @filename : Login.jsx
 * @author : chanCo
 * @description : 로그인 페이지 화면 구성
 */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Meta from '../Meta';

const LoginContainer = styled.div`
  & {
    position: relative;
    width: 1200px;
    margin: auto;
    padding-bottom: 160px;

    .loginPageTitle {
      padding: 133px 0 35px;
      text-align: center;

      p {
        font-size: 20px;
        font-weight: 500;
        padding-top: 10px;
        color: #483834;
      }
    }

    .loginBox {
      padding: 46px 0 47px;
      width: 916px;
      margin: auto;
      border-top: 2px solid #ff99bf;
      border-bottom: 1px solid #ccc;
      display: flex;

      .subTitle {
        font-size: 17px;
        font-weight: 500;
        color: #2f231c;
        padding-bottom: 10px;
      }

      .loginBoxLeft {
        position: relative;
        width: 50%;

        .loginTitle {
          padding-bottom: 20px;

          p {
            font-size: 18px;
            font-weight: 400;
            color: #ff7c98;
          }
        }

        .inputArea {
          position: relative;

          .input {
            border: none;
            background-color: #efefef;
            padding: 17px 15px;
            width: 284px;
            color: #6e6b68;
            margin-bottom: 9px;
            
            &.inputId::-webkit-input-placeholder { background: url(./img/key.png) left center no-repeat; }
            &.inputPassword::-webkit-input-placeholder { background: url(./img/unlock.png) left center no-repeat; }

            &.inputId::-webkit-input-placeholder,
            &.inputPassword::-webkit-input-placeholder {
              background-size: contain;
              margin-bottom: 9px;
              text-indent: 30px;
              color: #000;
              opacity: .4;
            } 
          }
          
          button {
            position: absolute;
            right: 5%;
            top: -5%;
            width: 118px;
            height: 118px;
            border-radius: 50%;
            border: none;
            background-color: #f56f98;
            color: #fff;
            font-size: 17px;
            font-weight: 600;
            cursor: pointer;
          }
        }

        ul {
          padding-top: 17px;
          display: flex;
          width: 284px;
          justify-content: space-between;

          li {
            a {
              font-size: 13px;
              color: #999;
              border-right: 1px solid #ccc;
              padding-right: 10px;
            }

            .last { 
              border: none; 
              padding-right: 0;
            }
          }
        }
      }

      .loginBoxRight {
        position: relative;
        width: 50%;
        border-left: 1px solid #ccc;
        padding-left: 35px;

        .service {
          padding-bottom: 50px;

          p {
            font-size: 13px;
            color: #999;
            letter-spacing: -1px;
            line-height: 1.5;
          }
        }

        .customer {
          .content {
            display: flex;
            font-size: 13px;

            p {
              color: #999;
              width: 75px;
              padding: 0 0 10px 2px;
            }
          }
        }
      }
    }

    .benefit {
      padding-top: 30px;
      width: 916px;
      margin: auto;
      
      h3 {
        text-align: center;
        padding-bottom: 32px;
        font-size: 16px;
        font-weight: 500;
        color: #483834;
        line-height: 1.5;
      }

      ul {
        display: flex;
        justify-content: space-between;

        li {
          display: flex;
          align-items: center;
          width: 265px;

          &:nth-child(1) { margin-right: 40px; }

          img { margin-right: 20px; }

          h4 {
            color: #2f231c;
            font-size: 17px;
            font-weight: 500;
            padding-bottom: 7px;
          }

          p {
            color: #948780;
            font-size: 13px;
            line-height: 1.5;
          }
        }
      }
    }
  }
`;

const Login = () => {

  // TODO: 로그인페이지 데이터 정보 상태 정의
  const [benefit, setLoginPage] = useState([]);

  // 데이터 가져오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/benefit');
        setLoginPage(benefit => response.data);
      } catch(e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <LoginContainer>

      <Meta title='배스킨라빈스 :: 로그인' description='로그인 페이지 클론코딩' />

      <div className='loginPageTitle'>
        <img src="./img/h_login.png" alt="login" />
        <p>배스킨 라빈스 홈페이지에 오신 것을 환영합니다.</p>
      </div>
      <div className='loginBox'>
        <div className='loginBoxLeft'>
          <div className='loginTitle'>
            <h4 className='subTitle'>배스킨라빈스 로그인</h4>
            <p>해피포인트 아이디로 간편하게 로그인하세요.</p>
          </div>
          <form className='inputArea'>
            <input className='inputId input' type="text" placeholder='아이디를 입력하세요' required />
            <button type='submit'>로그인</button>
            <input className='inputPassword input' type="password" placeholder='비밀번호를 입력하세요' required />
          </form>
          <ul>
            <li><a href="#!">아이디 찾기</a></li>
            <li><a href="#!">비밀번호 재발급</a></li>
            <li><a href="#!" className='last'>해피포인트 가입</a></li>
          </ul>
        </div>
        <div className='loginBoxRight'>
          <div className='service'>
            <h4 className='subTitle'>SPC 통합회원 서비스</h4>
            <p>
              하나의 ID/Password로 SPC가 운영하는 사이트(배스킨라빈스, 던킨도너츠,<br/> 해피포인트카드, 파리바게뜨, 파리크라상, 파스쿠찌, SPC그룹,우리밀愛)를 한번에!!<br/> 간단한 동의절차만 거치면 하나의 ID/Password로 제휴사이트를<br/> 로그인 하실 수 있습니다.
            </p>
          </div>
          <div className='customer'>
            <h4 className='subTitle'>고객센터</h4>
            <div className='content'>
              <p>운영시간</p>
              <span>월~금 09:00~17:30 토/일요일 휴무</span>
            </div>
            <div className='content'>
              <p>Tel.</p>
              <span>080-555-3131(수신자부담)</span>
            </div>
          </div>
        </div>
      </div>
      <div className='benefit'>
        <h3>해피포인트 회원이 아니시라면 지금 해피포인트에 가입하시고<br /> 다양한 혜택을 경험하세요.</h3>
        <ul>
          {benefit.map((v,i) => {
            return (
              <li key={v.id}>
                <img src={v.img} alt={v.alt} />
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </LoginContainer>
  );
};

export default Login;