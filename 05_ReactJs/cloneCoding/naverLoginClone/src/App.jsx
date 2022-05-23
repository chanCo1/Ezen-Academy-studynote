/**
 * @filename : App.js
 * @author : 박찬우
 * @description : 화면에 보여질 내용 정의
 */

// 패키지 참조
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';

import { RiLockLine } from 'react-icons/ri';
import { RiLockPasswordLine } from 'react-icons/ri';

// 컴포넌트 참조
import Header from './components/Header';
import Footer from './components/Footer';
import regexHelper from './libs/RegexHelper';
import InputBox from './components/InputBox';

// import { useNavigate } from 'react-router-dom';
// import Spinner from './components/Spinner';
// import { regex } from "./libs/Try-Catch";

// Content style
const ContentContainer = styled.form`
  position: relative;
  width: 768px;
  margin: 0 auto 15px;

  .contentWrap {
    width: 460px;
    margin: auto;

    .inputGroup {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }

      .userInput {
        width: 100%;
        border: none;
        height: 27px;
        font-size: 15px;
        font-weight: 500;
        padding-right: 25px;
      }

      .inputTitle {
        display: block;
        padding: 19px 0 8px;
        font-size: 13px;
      }

      .inputBox {
        position: relative;
        background-color: #fff;
        border: 1px solid #c7c7c7;
        padding: 11px 14px;

        &.padding1 {
          padding: 10px 110px 10px 14px;
        }
        &.padding2 {
          padding: 10px 40px 10px 14px;
        }

        span {
          position: absolute;
          right: 15px;
          color: #b4b2b2;
          font-size: 14px;
          font-weight: 600;
          line-height: 2;

          &.icons {
            font-size: 25px;
            line-height: 1.5;
          }
        }
      }

      .birthDayBox {
        display: flex;
        justify-content: space-between;

        .birthInputBox {
          position: relative;
          width: 32%;
          background-color: #fff;
          border: 1px solid #c7c7c7;
          padding: 11px 14px;
        }
      }

      .authBox {
        display: flex;
        justify-content: space-between;
        padding-top: 10px;

        .inputBox {
          width: 335px;
        }

        .authBtn {
          display: flex;

          a {
            background-color: #00d05c;
            padding: 18px 13px 16px;
            font-size: 15px;
            color: #fff;
          }
        }
      }

      .authInput {
        margin-top: 10px;
        position: relative;
        border: 1px solid #c7c7c7;
        padding: 11px 14px;
      }
    }

    button {
      margin-top: 30px;
      background-color: #00d05c;
      border: none;
      width: 100%;
      padding: 15px 0;
      font-size: 18px;
      font-weight: 600;
      color: #fff;
      cursor: pointer;
    }
  }
`;

function App() {
  // FIXME: 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성
  // const navigate = useNavigate();

  // const [error, setError] = useState(false);
  // console.log(error);
  // const [errorMessage, setErrorMessage] = useState('');

  // TODO: 백엔드에 데이터 저장을 위한 ajax 요청 객체 생성
  const [{ loading }, refetch] = useAxios(
    {
      url: 'http://localhost:3001/member',
      method: 'POST',
    },
    { manual: true }
  );

  // // TODO: 인증번호 검사
  // const getAuth = (e) => {
  //   e.preventDefault();

  //   const current = e.target;

  //   try {
  //     // 휴대전화 형식 검사
  //     // 전화번호를 입력하지 않았을 경우
  //     regexHelper.value(current.userNumber, '전화번호를 입력하세요.');
  //     regexHelper.cellphone(current.userNumber, '형식에 맞지 않는 번호입니다.');
  //   } catch (e) {
  //     console.error(e);
  //     return;
  //   }
  //   alert(`인증번호를 발송했습니다.(유효시간 30분)\n인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.\n이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.`);
  // };

  // - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - subMit 이벤트 시작
  // TODO: submit에 대한 이벤트
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      // 이벤트가 발생한 폼 객체
      const current = e.target;

      // - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - 유효성 검사 시작
      try {
        // 아이디검사
        regexHelper.value(current.userId, '이름을 입력하세요.');
        regexHelper.idCheck(current.userId, '아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다.');

        // 비밀번호 검사
        regexHelper.value(current.userPass, '비밀번호를 입력하세요.');
        regexHelper.pwCheck(current.userPass, '비밀번호는 8~16자의 영문 대 소문자, 숫자와 특수문자만 사용 가능합니다.');
        regexHelper.compareTo(current.userPass, current.userPassRe, '비밀번호 재확인이 일치하지 않습니다.');

        // 이름 검사
        regexHelper.value(current.userName, '이름을 입력하세요.');
        regexHelper.nameCheck(current.userName, '이름은 2글자 이상의 한글과 영문(소문자)만 가능합니다.');

        // 출생년도 검사
        regexHelper.value(current.userBirthYear, '생년원일을 입력하세요.');
        regexHelper.birthYear(current.userBirthYear, '출생년도는 4자의 숫자만 가능합니다.');

        // 출생월 검사
        regexHelper.value(current.userBirthMonth, '출생월을 선택하세요.');

        // 출생일 검사
        regexHelper.value(current.userBirthDay, '출생일을 입력하세요.');
        regexHelper.birthDate(current.userBirthDay, '출생일은 1~2자의 숫자만 가능합니다.');

        // 성별 검사
        regexHelper.value(current.userGender, '성별을 선택하세요.');

        // 본인 확인 이메일 검사
        regexHelper.emailCheck(current.userEmail, '이메일 주소를 다시 확인해주세요.');

        // 휴대전화 입력 검사
        regexHelper.value(current.userNumber, '전화번호를 입력하세요.');
        regexHelper.cellphone(current.userNumber, '전화번호 형식에 맞지 않는 번호입니다.');
        regexHelper.value(current.countryCode, '국가번호를 입력하세요.');

        // 인증번호 검사
        // regexHelper.value(current.authNumber, '인증번호를 입력하세요.');
        // regexHelper.authCheck(current.authNumber, '인증번호를 다시 확인해주세요.');
      } catch (e) {
        console.error(e);
        window.alert(e.message);
        e.field.focus();
        return;
      }
      // - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - 유효성 검사 끝

      // TODO: 입력, 수정, 삭제 처리는 async-await 문법을 사용해야 한다.
      let json = null;

      (async () => {
        try {
          const response = await refetch({
            data: {
              userId: current.userId.value,
              password: parseInt(current.userPass.value),
              name: current.userName.value,
              birthday: current.userBirthYear.value + (current.userBirthMonth.value < 10 ? `0${current.userBirthMonth.value}` : current.userBirthMonth.value) + current.userBirthDay.value,
              gender: current.userGender.value,
              email: current.userEmail.value,
              country: current.countryCode.value,
              tel: parseInt(current.userNumber.value),
            },
          });

          json = response.data;
        } catch (e) {
          console.error(e);
          window.alert(`[${e.reponse.status}] ${e.response.statusText} \n ${e.message}`);
        }

        // 정상적으로 저장되어 응답을 받았다면?
        if (json !== null) {
          window.alert('가입완료');
        }
      })();
    },
    [refetch]
  );
  // - - - - - - - - - - - - - - - - - - -- - - - - - - - - - - subMit 이벤트 끝

  return (
    <>
      {/* <Spinner visible={loading} /> */}

      <Header />

      <ContentContainer onSubmit={onSubmit}>
        <div className="contentWrap">
          <div className="inputGroup">
            {/* 아이디 */}
            <InputBox htmlFor={'userId'} title={'아이디'} type={'text'} name={'userId'} id={'userId'} span={'@naver.com'} />

            {/* 비밀번호 */}
            <InputBox htmlFor={'userPass'} title={'비밀번호'} type={'password'} name={'userPass'} id={'userPass'} span={<RiLockLine />} className={'icons'} />

            {/* 비밀번호 재확인 */}
            <InputBox htmlFor={'userPassRe'} title={'비밀번호 재확인'} type={'password'} name={'userPassRe'} id={'userPassRe'} span={<RiLockPasswordLine />} className={'icons'} />
          </div>

          <div className="inputGroup">
            {/* 이름 */}
            <InputBox htmlFor={'userName'} title={'이름'} type={'text'} name={'userName'} id={'userName'} />

            {/* 생년월일 */}
            <div>
              <h3 className="inputTitle">
                <label htmlFor="userBirthYear">생년월일</label>
              </h3>
              {/* 년 */}
              <div className="birthDayBox">
                <div className="birthInputBox">
                  <input className="userInput" type="text" name="userBirthYear" id="userBirthYear" placeholder="년(4자)" />
                </div>
                {/* 월 */}
                <div className="birthInputBox">
                  <select className="userInput" name="userBirthMonth">
                    <option value="">월</option>
                    {[...new Array(12 - 1 + 1)].map((v, i) => (
                      <option key={i} value={1 + i}>
                        {1 + i}
                      </option>
                    ))}
                  </select>
                </div>
                {/* 일 */}
                <div className="birthInputBox">
                  <input className="userInput" type="text" name="userBirthDay" id="userBirthDay" placeholder="일" />
                </div>
              </div>
            </div>

            {/* 성별 */}
            <div>
              <h3 className="inputTitle">
                <label htmlFor="userGender">성별</label>
              </h3>
              <div className="inputBox">
                <select className="userInput" type="text" name="userGender" id="userGender">
                  <option value="">성별</option>
                  <option value="male">남자</option>
                  <option value="female">여자</option>
                  <option value="none">선택안함</option>
                </select>
              </div>
            </div>

            {/* 이메일 */}
            <div>
              <h3 className="inputTitle">
                <label htmlFor="userEmail">
                  본인 확인 이메일
                  <span style={{ color: '#999', fontSize: '11px' }}>(선택)</span>
                </label>
              </h3>
              <div className="inputBox">
                <input className="userInput" type="text" name="userEmail" id="userEmail" placeholder="선택입력" />
              </div>
            </div>
          </div>

          <div className="inputGroup">
            {/* 휴대전화 */}
            <div>
              <h3 className="inputTitle">
                <label htmlFor="userPhone">휴대전화</label>
              </h3>
              <div className="inputBox">
                <select className="userInput" name="countryCode" defaultValue="82">
                  <option value="233">가나 +233</option>
                  <option value="45">덴마크 +45</option>
                  <option value="82">대한민국 +82</option>
                  <option value="1">미국/캐나다 +1</option>
                </select>
              </div>
            </div>

            <div className="authBox">
              {/* 전화번호 입력 */}
              <div className="inputBox">
                <input className="userInput" type="text" name="userNumber" placeholder="전화번호 입력" />
              </div>
              {/* 인증번호 버튼 */}
              <div className="authBtn">
                <a href="#!">인증번호 받기</a>
              </div>
            </div>

            {/* 인증번호 입력 */}
            <div className="authInput">
              <input className="userInput" type="text" name="authNumber" placeholder="인증번호 입력하세요" disabled />
            </div>
          </div>

          {/* 가입하기 버튼 */}
          <div>
            <button type="submit">가입하기</button>
          </div>
        </div>
      </ContentContainer>

      <Footer />
    </>
  );
}

export default memo(App);
