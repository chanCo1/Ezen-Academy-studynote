/**
 * @filename : BrStore.jsx
 * @author : chanCo
 * @description : BrStore 영역 정의
 */

import React from 'react';
import styled from 'styled-components';

const BrStoreContainer = styled.div`
  & {
    position: relative;
    width: 1200px;
    margin: auto;
    display: flex;
    padding-bottom: 120px;

    h3 {
      padding: 95px 0 50px;
      text-align: center;
    }

    .storeImg {
      width: 100%;
    }
  }
`;

const BrStore = () => {
  return (
    <BrStoreContainer>
      <div className='brStoreTitle'>
        <h3>
          <img src="./img/h_store.png" alt="br store" />
        </h3>
        <a href="#!">
          <img className='storeImg' src="./img/img_store.jpg" alt="매장 찾기" />
        </a>
      </div>
      <div className='happyOrderTilte'>
        <h3>
          <img src="./img/h_happyorder_delivery.png" alt="happy order" />
        </h3>
        <a href="#!">
          <img className='storeImg' src="./img/img_happyorder_delivery.png" alt="매장 찾기" />
        </a>
      </div>
    </BrStoreContainer>
  );
};

export default BrStore;