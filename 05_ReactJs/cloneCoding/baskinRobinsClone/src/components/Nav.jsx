/**
 * @filename : Nav.jsx
 * @author : chanCo
 * @description : 헤더 영역의 Nav 영역 컴포넌트 작성
 */

import React, { useCallback, useState, memo } from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const NavContainer = styled.div`
  & {
    position: relative;
    width: 100%;
    background-color: #fff;

    .navWrap {
      position: relative;
      width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .loginWrap {
        display: flex;
        width: 110px;
        justify-content: space-between;

        a {
          font-size: 11px;
          font-weight: 800;
          color: #747474;
          padding: 15px 0;

          span {
            color: #ff99ae;
          }
        }
      }

      .navLinkWrap {
        display: flex;
        width: 980px;
        justify-content: space-between;
        align-items: center;

        &:hover {
          cursor: pointer;
        }

        .text {
          color: #4f3b35;
          font-size: 13px;
          font-weight: 800;
          padding: 15px 0;

          span {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const SubMenu = styled.div`
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 9;
  transition: 1s ease-out;
  border-top: 0.5px solid #000;
  border-bottom: 0.5px solid #000;
  background-color: #fff;

  .subMenuWrap {
    background-color: #fff;
    position: relative;
    width: 1240px;
    margin: auto;
    display: flex;

    .happyPointImg {
      display: flex;
      align-items: center;
      margin-left: 15px;
    }

    .icecreamImg {
      margin-right: 55px;
      opacity: 0;
      transition: 1.5s ease-in;
    }

    .menuList {
      display: flex;
      width: 800px;
      justify-content: space-between;
      padding-top: 40px;

      .menuList1 {
        margin-right: 15px;
      }

      .menuList2 {
        margin-right: 35px;
      }

      li {
        padding-bottom: 20px;
        text-align: center;

        a {
          font-size: 13px;
          color: #afa6a0;
  
          &:hover {
            color: #ff7c98;
          }
        }
      }
    }
  }
`;

const Nav = ({ buttonState }) => {
  // TODO: 서브메뉴 상태 정의
  const [subMenu, setSubMenu] = useState({ maxHeight: 0 });
  const [icecreamImg, setIcecreamImg] = useState({ opacity: 0 });

  // 마우스 올리면 나오는 서브메뉴 정의
  const onMouseOver = useCallback(() => {
    // 검색 버튼의 상태가 false 일때 서브메뉴 높이 값 지정, true면 0
    setSubMenu(buttonState === false ? { maxHeight: "100vh" } : { maxHeight: 0 });
    setIcecreamImg({ opacity: 1 });
  }, [buttonState]);

  // 마우스가 빠져나가면 서브메뉴 사라짐
  const onMouseOut = useCallback(() => {
    setSubMenu({ maxHeight: 0 });
    setIcecreamImg({ opacity: 0 });
  }, []);

  const menuList1 = ["아이스크림", "아이스크림케이크", "음료", "커피", " 디저트"];
  const menuList2 = ["아이스크림", "음료", "커피"];
  const menuList3 = ["진행중이벤트", "당첨자발표"];
  const menuList4 = ["매장찾기", "고객센터", "단체주문"];
  const menuList5 = ["공지사항", "보도자료", "채용정보", "점포개설문의", " CONTACT US"];

  return (
    <>
      <NavContainer>
        <div className="navWrap">
          <div className="loginWrap">
            <NavLink to='/login'>
              <span>LOGIN</span>
            </NavLink>
            <NavLink to='/join'>JOIN</NavLink>
          </div>
          <div className="navLinkWrap" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <NavLink to='/flavor' className="text noLeft">
              FLAVOR OF THE MONTH
            </NavLink>
            <NavLink to='/menu' className="text">
              MENU
            </NavLink>
            <NavLink to='/allergy' className="text">
              <span>영양 성분 및 알레르기</span>
            </NavLink>
            <NavLink to='/evnt' className="text">
              EVENT
            </NavLink>
            <NavLink to='/store' className="text">
              STORE
            </NavLink>
            <NavLink to='/about' className="text noRight">
              ABOUT
            </NavLink>
          </div>
        </div>

        {/* TODO: 서브메뉴 구현 */}
        <SubMenu style={subMenu} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
          <div className="subMenuWrap">
            <div className="happyPointImg">
              <img src="./img/img_happypoint_app.jpg" alt="QR코드 이미지" />
            </div>
            <div className="icecreamImg" style={icecreamImg}>
              <a href="#!">
                <img src="./img/img_monthly_fom_220429.png" alt="" />
              </a>
            </div>
            <div className="menuList">
              <ul className="menuList1">
                {menuList1.map((v, i) => <li key={i}> <NavLink to='/'>{v}</NavLink> </li>)}
              </ul>
              <ul className="menuList2">
                {menuList2.map((v, i) => <li key={i}> <NavLink to='/'>{v}</NavLink> </li>)}
              </ul>
              <ul className="menuList3">
                {menuList3.map((v, i) => <li key={i}> <NavLink to='/'>{v}</NavLink> </li>)}
              </ul>
              <ul className="menuList4">
                {menuList4.map((v, i) => <li key={i}> <NavLink to='/'>{v}</NavLink> </li>)}
              </ul>
              <ul className="menuList5">
                {menuList5.map((v, i) => <li key={i}> <NavLink to='/'>{v}</NavLink> </li>)}
              </ul>
            </div>
          </div>
        </SubMenu>
      </NavContainer>
    </>
  );
};

export default memo(Nav);
