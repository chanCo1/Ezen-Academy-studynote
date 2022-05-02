/**
 * @filename : contact.js
 * @author : 박찬우
 * @description : contact 영역에 쓰이는 텍스트 및 스타일 정의
 */

import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  & {
    width: 1100px;
    margin: auto;
    padding: 64px 16px;

    h1 {
      font-size: 36px;
      letter-spacing: 5px;
      font-family: sans-serif;
      font-weight: 500;
    }

    p {
      font-size: 15px;
      margin: 15px 0;
      line-height: 1.5;
      font-weight: 700;
    }

    .catering {
      color: #607d8b;
      font-size: 18px;
      font-weight: 600;
    }

    input {
      width: 100%;
      border: none;
      border-bottom: 1px solid #999;
      padding: 16px 8px;
      font-size: 15px;

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }

    button {
      background-color: #f1f1f1;
      border: none;
      padding: 8px 16px;
      margin: 16px 0;
      font-size: 15px;

      &:hover {
        background-color: #999;
        cursor: pointer;
      }
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contact</h1>
      <br />
      <p>
        We offer full-service catering for any event, large or small. We
        understand your needs and we will cater the food to satisfy the biggerst
        criteria of them all, both look and taste. Do not hesitate to contact
        us.
      </p>
      <p className="catering">
        Catering Service, 42nd Living St, 43043 New York, NY
      </p>
      <p>
        You can also contact us by phone 00553123-2323 or email
        catering@catering.com, or you can send us a message here:
      </p>
      <form>
        <input type="text" placeholder="Name" required />
        <br />
        <input type="number" placeholder="How may people" required />
        <br />
        <input
          type="datetime-local"
          placeholder="Date and time"
          value="2022-04-29T00:00"
          required
        />
        <br />
        <input
          type="text"
          placeholder="Message \ Special requirements"
          required
        />
        <button type="submit">SEND MESSAGE</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
