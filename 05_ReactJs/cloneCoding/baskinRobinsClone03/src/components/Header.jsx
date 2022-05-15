/**
 * @filename : Header.jsx
 * @author : 박찬우
 * @description : 헤더 영역 정의
 */

import React, { useCallback, useState, useEffect, memo } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

import Nav from "./Nav";

// TODO: Header 스타일 정의
const HeaderContainer = styled.div`
  & {
    position: relative;
    width: 100%;
    border-top: 3px solid #ff7c98;
    border-bottom: 1px solid #e1e1e1;
    background: url(./img/bg_header.gif) center center;

    .header {
      position: relative;
      display: flex;
      width: 1200px;
      margin: auto;
      padding: 20px 0;
      justify-content: space-between;

      .headerSocial {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        ul {
          display: flex;

          li {
            padding: 0 5px;
          }
        }
      }

      .help {
        position: relative;
        display: flex;

        ul {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          li {
            padding-left: 20px;

            a {
              font-size: 10px;
              color: #222;
            }
          }

          .search {
            button {
              background-color: transparent;
              border: none;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

// TODO: search 버튼 클릭시 나오는 이벤트 영역
const SearchArea = styled.div`
  & {
    position: absolute;
    top: 0;
    margin-top: 186px;
    width: 100%;
    max-height: 0;
    z-index: 99;
    transition: 0.4s ease-out;
    overflow: hidden;
    background-color: #fff;

    .searchMenu {
      position: relative;
      width: 1200px;
      margin: auto;
      padding: 25px 0;

      .searchIfon {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        h4 {
          padding-top: 8px;
          width: 89px;
          font-weight: normal;
          font-size: 13px;
        }

        input {
          padding: 8px 0 8px 10px;
          height: 32px;
          background-color: #efefef;
          border: none;
        }

        .productNameWrap {
          display: flex;
          width: 570px;
          flex-direction: row;

          select {
            width: 128px;
            height: 32px;
            border: 1px solid #e1e1e1;
            border-radius: 5px;
            padding-left: 10px;
            margin-right: 14px;
            color: #555;
          }

          input {
            width: 260px;
          }
        }

        .hashTagWrap {
          display: flex;
          width: 630px;
          flex-wrap: wrap;
          justify-content: space-between;

          input {
            width: 540px;
            color: #ff7c98;
          }

          .hashTag {
            width: 526px;
            margin: 10px 0 8px auto;

            p {
              color: #9c9c9c;
              font-size: 13px;
            }

            a {
              color: #ff7c98;
              padding-right: 5px;
              font-size: 12px;
            }
          }
        }

        .allergyWrap {
          display: flex;
          width: 100%;

          .check {
            display: flex;
            width: 280px;
            flex-wrap: wrap;

            span {
              display: flex;
              width: 70px;
              height: 30px;
              align-items: center;

              input {
                margin-right: 5px;
                cursor: pointer;
              }

              label {
                font-size: 13px;
                cursor: pointer;
              }
            }
          }
        }
      }

      .searchBtn {
        padding-top: 25px;
        text-align: center;

        button {
          border: none;
          padding: 10px 60px;
          border-radius: 20px;
          background-color: #ff7c98;
          color: #fff;
          font-size: 15px;
          cursor: pointer;
        }
      }
    }
  }
`;

const Header = () => {
  // TODO: 화면에 표시할 상태값(headerSocial) -> ajax 연동 결과로 받아올 json
  const [headerSocial, setHeaderSocial] = useState([]);

  // TODO: 화면에 표시할 상태값(checkList) -> ajax 연동 결과로 받아올 json
  const [checkList, setCheckList] = useState([]);

  // TODO: 검색 버튼 클릭시 이미지 변경
  const [button, setButton] = useState(false);

  // TODO: 높이를 넣을 값
  const [searchHeight, setSearchHeight] = useState({
    maxHeight: 0,
    opacity: 0,
  });

  // 버튼 토글 구현
  const onButtonChange = useCallback(() => {
    setButton(!button);
    setSearchHeight(button === false ? { maxHeight: "100vh", opacity: 1 } : { maxHeight: 0, opacity: 0 });
  }, [button]);

  // headerSocial 데이터 불러오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/headerSocial");
        setHeaderSocial((headerSocial) => response.data);
      } catch (e) {
        console.error(e);
        alert("데이터를 불러오지 못했습니다.");
      }
    })();
  }, []);

  // checkList 데이터 불러오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/checkList");
        setCheckList((checkList) => response.data);
      } catch (e) {
        console.error(e);
        alert("데이터를 불러오지 못했습니다.");
      }
    })();
  }, []);

  return (
    <>
      <HeaderContainer>
        <div className="header">
          <nav className="headerSocial">
            <ul>
              {/* TODO: JSON으로 받아온 데이터로 구현 */}
              {headerSocial.map((v, i) => {
                return (
                  <li key={v.id}>
                    <a href={v.url} target="_blank" rel="noreferrer">
                      <img src={v.img} alt={v.alt} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="logo">
            <NavLink to='/'>
              <img src="./img/logo_baskinrobbins.png" alt="baskin robins" />
            </NavLink>
          </div>
          <nav className="help">
            <ul>
              <li>
                <a href="#!">고객센터</a>
              </li>
              <li>
                <a href="#!">CONTACT US</a>
              </li>
              <li className="search">
                {/* TODO: 버튼 이미지 변경 */}
                <button type="button" onClick={onButtonChange}>
                  {button === false ? <img src="./img/icon_search.png" alt="search icon" /> : <img src="./img/btn_search_close.gif" alt="close icon" />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </HeaderContainer>

      {/* Nav 영역 */}
      <Nav buttonState={button} />

      {/* 검색 버튼 활성화 영역 */}
      <SearchArea style={searchHeight}>
        <div className="searchMenu">
          <div className="searchIfon">
            <div className="productNameWrap">
              <h4>제품명</h4>
              <select>
                <option value="whole">전체</option>
                <option value="icecream">아이스크림</option>
                <option value="cake">아이스크림케이크</option>
                <option value="beverage">음료</option>
                <option value="coffee">커피</option>
                <option value="dessert">디저트</option>
                <option value="blockPack">block pack</option>
                <option value="readyPack">ready pack</option>
              </select>
              <input type="text" />
            </div>
            <div className="hashTagWrap">
              <h4>해시태그</h4>
              <input type="text" />
              <div className="hashTag">
                <p>· 자주 찾는 해시태그</p>
                <a href="#!">#피카피카피카츄</a>
                <a href="#!">#피카츄초코바나나블라스트</a>
                <a href="#!">#쿨쿨잠만보밀키소다블라스트</a>
                <a href="#!">#고라파덕아이스크림콘</a>
                <a href="#!">#푸린아이스크림콘</a>
                <a href="#!">#포켓몬스터</a>
              </div>
            </div>
            <div className="allergyWrap">
              <h4>알레르기 성분</h4>
              <div className="check">
                {/* TODO: map으로 작성 */}
                {checkList.map((v, i) => {
                  return (
                    <span key={v.id}>
                      <input type="checkbox" id={v.name} />
                      <label htmlFor={v.name}>{v.label}</label>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="searchBtn">
            <button type="submit">검색</button>
          </div>
        </div>
      </SearchArea>
    </>
  );
};

export default memo(Header);
