/**
 * @filename : BrSns.jsx
 * @author : 박찬우
 * @description :
 */

import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const BrSnsContainer = styled.div`
  & {
    position: relative;
    width: 100%;

    .brSns {
      position: relative;
      width: 1200px;
      margin: auto;
      overflow: hidden;

      .brSnsTitle {
        position: relative;
        padding-bottom: 26px;
        text-align: center;
      }

      .brSnsLink {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 35px;

        li { 
          padding: 0 10px;
          
          a {
            &:hover { opacity: .7; }
          }
        }
      }

      .instagramTitleWrap {
        margin-bottom: 30px;

        .instagramTitle {
          padding: 26px 0;
          
          img {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
  
          hr { opacity: .5; }
        }
      }

      .instagramImg {
        position: relative;
        margin-bottom: 190px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        .imgWrap {
          display: inline-block;
          cursor: pointer;
          
          img {
            width: 237px;
            height: 238.5px;
          }
        }
      }
    }
  }
`;

const BrSns = () => {

  // TODO: sns 로고 이미지 상태값 정의
  const [snsImg, setSnsImg] = useState([]);

  // sns 로고 이미지 데이터 가져오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/brSns');
        setSnsImg(snsImg => response.data);
      } catch(e) {
        console.error(e);
        alert('데이터 연동 실패');
      }
    })();
  }, []);

  // TODO: 인스타그램 이미지 상태값 정의
  const [instaImg, setInstaImg] = useState([]);

  // 인스타그램 이미지 데이터 가져오기
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/instagramImg');
        setInstaImg(instaImg => response.data);
      } catch(e) {
        console.error(e);
        alert('데이터 연동 실패');
      }
    })();
  }, []);
  

  return (
    <BrSnsContainer>
      <div className='brSns'>
        <h3 className='brSnsTitle'>
          <img src="./img/h_sns.png" alt="SNS" />
        </h3>
        <ul className='brSnsLink'>
          {snsImg.map((v,i) => {
            return (
              <li key={v.id}>
                <a href={v.url} target='_blank' rel='noreferrer'>
                  <img src={v.img} alt={v.alt} />
                </a>
              </li>
            );
          })}
        </ul>
        <div className='instagramTitleWrap'>
          <h4 className='instagramTitle'>
            <img src="./img/tit_sns.png" alt="baskinrobbis instagram" />
            <hr />
          </h4>
        </div>
        <div className='instagramImg'>
          {instaImg.map((v,i) => {
            return (
              <div key={v.id} className='imgWrap'>
                <img src={v.img} alt={v.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </BrSnsContainer>
  );
};

export default memo(BrSns);