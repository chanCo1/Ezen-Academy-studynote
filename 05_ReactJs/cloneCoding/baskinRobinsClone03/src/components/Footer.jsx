import React, { memo, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FooterContainer = styled.div `
  & {
    position: relative;
    width: 100%;
    padding-bottom: 60px;
    border-top: 2px solid #fed69a;

    .policy {
      width: 1200px;
      margin: auto;
      
      ul {
        position: relative;
        padding: 0 80px;
        display: flex;
        justify-content: space-between;
        
        li {
          display: flex;
          align-items: center;
          height: 77.5px;

          a {
            font-size: 14px;
            color: #726454;
            
            span {
              color: #ff7c98;
              font-weight: 600;
            }
          }
        }
      }
    }

    .brFamily {
      width: 100%;
      height: 75px;
      background-color: #f9f8f7;

      .brFamilyWrap {
        position: relative;
        width: 1200px;
        margin: auto;
        padding: 22px 0 0 222px;
        display: flex;
        align-items: center;


        .brFamilyImg {
          margin-right: 50px;

          &:nth-child(4) {
            margin-right: 10px;
          }

          &:nth-child(5) {
            width: 31px;
            margin-right: 10px;

            img {
              width: 100%;
            }
          }

          &:nth-child(6) {
            margin-right: 110px;
          }
        }

        button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 11px;
          border: 1px solid #afafaf;
          border-radius: 5px;
          background-color: #fff;
          width: 150px;
          height: 32px;
          color: #afafaf;
          font-size: 12px;
          box-shadow: 2px 2px 10px rgba(0,0,0,.1);
          cursor: pointer;
        }

        .faimlySubMenu {
          position: absolute;
          border: 1px solid #afafaf;
          width: 150px;
          background-color: #fff;
          border-radius: 10px 10px 0 0;
          padding: 10px 0 10px;
          z-index: 1;
          right: 175px;
          bottom: 30px;

          li {
            margin-right: 0;
            padding-bottom: 5px;

            &:hover {
              background-color: #eeeeee;
            }

            a {
              font-size: 13px;
              color: #726454;
              padding-left: 15px;
            }
          }
        }
      }
    }

    .brInfo {
      position: relative;
      width: 1200px;
      margin: auto;
      text-align: center;
      padding-top: 48px;

      h1 { padding-bottom: 35px; }

      .info1 {
        display: flex;
        justify-content: center;
        padding-bottom: 10px;
      }

      .info2 {
        display: flex;
        justify-content: center;
      }

      li {
          margin: 0 10px;
          font-size: 11px;
          color: #6d6661;
          letter-spacing: -0.5px;
        }

      p {
        padding-top: 20px;
        color: #bebbb9;
        font-size: 11px;
      }
    }
  }
`;

const Footer = () => {
  // TODO: family 영역의 이미지 상태값 정의
  const [brFamily, setBrFamily] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/brFamilyImg');
        setBrFamily(brFamily => response.data);
      } catch(e) {
        console.error(e)
        alert('데이터 요청 실패')
      }
    })();
  }, []);

  // TODO: FAMILY SITE 버튼의 상태값 정의
  const [familyBtn, setFamilyBtn] = useState(false);

  // 버튼 토글 구현
  const onToggle = useCallback(() => {
    setFamilyBtn(!familyBtn)
  }, [familyBtn]);
  
  return (
    <FooterContainer>
      <div className='footerWrap'>
        <div className='policy'>
          <ul>
            <li><a href="#!">점포개설문의</a></li>
            <li><a href="#!">채용문의</a></li>
            <li><a href="#!">윤리신고센터</a></li>
            <li><a href="#!">이용약관</a></li>
            <li><a href="#!"><span>개인정보처리방침</span></a></li>
            <li><a href="#!">영상정보처리기기운영관리방침</a></li>
            <li><a href="#!">거래희망회사 사전등록</a></li>
          </ul>
        </div>
        <div className='brFamily'>
          <ul className='brFamilyWrap'>
            {brFamily.map((v,i) => {
              return (
                <li key={v.id} className='brFamilyImg'>
                  <a href={v.url} target='_blank' rel='noreferrer'>
                    <img src={v.img} alt={v.alt} />
                  </a>
                </li>
              );
            })}
            <button type='button' onClick={onToggle}>FAMILY SITE
              {familyBtn === false ? 
                <img src="./img/family_size_off.png" alt="size off" /> :
                <img src="./img/family_size_on.png" alt="size on" />}
            </button>
            {familyBtn && 
              <ul className='faimlySubMenu'>
                <li><a href="#!">배스킨 스쿨</a></li>
                <li><a href="#!">SPC그룹사이트</a></li>
                <li><a href="#!">SPC MAGAZINE</a></li>
                <li><a href="#!">BR코리아</a></li>
                <li><a href="#!">해피포인트카드</a></li>
                <li><a href="#!">파스쿠찌</a></li>
                <li><a href="#!">삼립</a></li>
                <li><a href="#!">파리바게트</a></li>
                <li><a href="#!">던킨도너츠</a></li>
              </ul>}
          </ul>
        </div>
        <div className='brInfo'>
          <h1>
            <img src="./img/footer_logo.png" alt="footer logo" />
          </h1>
          <ul className='info1'>
            <li>사업자 등록번호 : 303-81-09535</li>
            <li>비알코리아(주) 대표이사 도세호</li>
            <li>서울특별시 서초구 남부순환로 2620(양재동 11-149번지)</li>
          </ul>
          <ul className='info2'>
            <li>TEL : 080-555-3131</li>
            <li>개인정보관리책임자 : 김경우</li>
          </ul>
          <p>Copyright ⓒ 2016 BRKOREA Company. All Rights Reserved.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default memo(Footer);


