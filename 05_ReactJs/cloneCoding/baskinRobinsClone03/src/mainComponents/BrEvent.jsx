/**
 * @filename : BrEvent.jsx
 * @author : 박찬우
 * @description : BrEvent 영역의 슬라이드 구현
 */

import React, { memo, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use(Pagination);

const BrEventContainer = styled.div`
  & {
    position: relative;
    width: 1200px;
    margin: auto;
    margin-bottom: 50px;

    .eventTitle {
      padding: 80px 0 50px;
      text-align: center;
    }

    .swiper-slide {
      height: 520px;

      .eventLink {
        color: #222;
        font-size: 15.5px;

        .typeImg { margin: 22px 0 8px; }
        .eventSubTitle { margin-bottom: 11px; }

        .period {
          color: #afa6a0;
          font-size: 13px;
        }
      }
    }

    .swiper-pagination {
      display: flex;
      justify-content: center;
      align-items: center;

      .swiper-pagination-bullet {
        margin: 15px;
        width: 7px;
        height: 7px;

        &:hover { 
          background-color: #222;
          opacity: 1;
        }
      }
  
      .swiper-pagination-bullet-active {
        width: 10px;
        height: 10px;
        background-color: #222;
      }
    }
  }
`;

const BrEvent = () => {

  // TODO: event 상태값 정의
  const [event, setEvent] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:3001/brEvent");
        setEvent(event => response.data);
      } catch(e) {
        console.error(e);
        alert("데이터 연동 실패");
      }
    })();
  }, []);

  return (
    <BrEventContainer>
      <div className='eventTitle'>
        <img src="./img/h_event.png" alt="BR EVENT" />
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={15}
        pagination={{ clickable: true }}
        slidesPerGroup={4}
      >
        {event.map((v,i) => {
          return (
            <SwiperSlide key={v.id}>
              <a href={v.url} target='_blank' rel='noreferrer' className='eventLink'>
                <img className='swiperImg' src={v.img} alt={v.alt} />
                <img className='typeImg' src={v.eventType} alt={v.alt} />
                <p className='eventSubTitle'>{v.title}</p>
                <span className='period'>{v.period}</span>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </BrEventContainer>
  );
};

export default memo(BrEvent);