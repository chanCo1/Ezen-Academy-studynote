/**
 * @filename : Contact.jsx
 * @author : 박찬우
 * @description : Contact영역 작성
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';
// 이미지 참조
import map from '../assets/img/map.jpg';

// TODO: 스타일 정의
const ContactContainer = styled.div`
  input {
    width: 100%;
    font-size: 15px;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
  }

  button {
    margin: 16px 0;
    padding: 8px 16px;
    background-color: #000;
    color: #fff;
    font-size: 15px;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: #ccc;
      color: #000;
    }
  }

  .mapImg {
    width: 1500px;
    margin: auto;

    img {
      width: 100%;
    }
  }
`;

// TODO: Contact 영역 작성
const Contact = () => {
  return (
    <ContactContainer>
      <div className="titleWrap">
        <h3 className="title">Contact</h3>
        <p>Lets get in touch and talk about your next project.</p>
        <form>
          <input type="text" placeholder="Name" required />
          <br />
          <input type="email" placeholder="Email" required />
          <br />
          <input type="text" placeholder="subject" required />
          <br />
          <input type="text" placeholder="Coment" required />
          <br />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
      <div className="mapImg">
        <img src={map} alt="지도이미지" />
      </div>
    </ContactContainer>
  );
};

export default Contact;
