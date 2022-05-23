/**
 * @filename : BrMainSlide.jsx
 * @author : chanCo
 * @description : 메인 페이지의 이미지 슬라이드 구현
 */

import React, { useState, useEffect, memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import styled from 'styled-components';
import axios from "axios";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const PikachuBanner = styled.div`
  width: 100%;
  height: 150px;
  background: url(./img/1714824579.jpg) center center;
  background-size: cover;
  border-bottom: 3px solid #fff;
`;

const SwiperContainer = styled.div`
  position: relative;
  width: 100%;

  .swiperImg {
    position: relative;
    width: 100%;
    height: 697px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 110px;
    height: 110px;
    border-radius: 50%;

    &::after {content: "";}
    &:hover { background-color: #bdb0b079; }
  }

  .swiper-button-prev {background: url(./img/btn_banner_prev.png) center center;}
  .swiper-button-next {background: url(./img/btn_banner_next.png) center center;}


  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;

    .swiper-pagination-bullet {
      margin: 15px;
      width: 10px;
      height: 10px;
      background-color: #fff;
      opacity: 1;

      &:hover { background-color: #222; }
    }
  
    .swiper-pagination-bullet-active {
      width: 12px;
      height: 12px;
      background-color: #222;
    }
  }
`;

const BrMainSlide = () => {

  // TODO: 이미지 슬라이드 상태값
  const [imgSlide, setImgSlide] = useState([]);

  // TODO: 이미지 슬라이드 값을 가져온다.
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/mainImgSlide');
        setImgSlide(imgSlide => response.data);
      } catch(e) {
        console.error(e);
        alert('ajax 연동 실패');
      }
    })();
  }, []);

  return (
    <>
      <PikachuBanner />

      <SwiperContainer>
        <Swiper className='swiper'
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        >
          {imgSlide.map((v,i) => {
            return (
            <SwiperSlide key={v.id}>
              <a href={v.url} target='_blank' rel='noreferrer'>
                <img className='swiperImg' src={v.img} alt={v.alt} />
              </a>
            </SwiperSlide>
            );
          })}
          
        </Swiper>
      </SwiperContainer>
    </>
  );
};

export default memo(BrMainSlide);