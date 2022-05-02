/**
 * @filename : About.jsx
 * @author : 박찬우
 * @description : Main에서 받은 props를 바탕으로 구조를 작성한다.
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';

// TODO: 스타일 정의
const AboutContainer = styled.div`
  & {
    margin-bottom: 16px;
    padding: 0 8px;
    display: inline-flex;
    width: 383px;

    .aboutWrap {
      display: inline-block;

      .aboutImg {
        width: 100%;
        filter: grayscale(0.8);
      }

      .aboutName {
        font-size: 24px;
        font-weight: 400;
        margin: 10px 0;
      }

      .sub {
        margin: 15px 0;
        font-size: 15px;

        &.aboutPosition {
          color: #777;
        }
      }

      button {
        width: 100%;
        padding: 8px 16px;
        font-size: 16px;
        border: none;
        background-color: #f1f1f1;

        &:hover {
          cursor: pointer;
          background-color: #e1e1e1;
        }
      }
    }
  }
`;

// TODO: 파라미터로 데이터를 받아 구조를 작성한다.
const About = ({ items: { img, name, position, desc } }) => {
  return (
    <AboutContainer>
      <div className="aboutWrap">
        <img className="aboutImg" alt="사진" src={img} />
        <h3 className="aboutName">{name}</h3>
        <p className="sub aboutPosition">{position}</p>
        <p className="sub">{desc}</p>
        <button type="button">Contact</button>
      </div>
    </AboutContainer>
  );
};

export default About;
