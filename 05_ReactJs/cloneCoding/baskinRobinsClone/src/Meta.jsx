/**
 * @filename : Meta.jsx
 * @author : chanCo
 * @description : SEO처리 및 기본 참조 리소스 명시
 */

// 패키지 참조 
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta charset="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <meta property="og:image" content={props.image} />

        {/* favicon 설정 */}
        <link rel="shortcut icon" href={props.image} type="image/png" />
        <link ref="icon" href={props.image} type="image/png" />

        {/* 웹폰트 적용 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet" />
      </Helmet>
    </HelmetProvider>
  );
};

// TODO: props에 대한 기본값 설정
Meta.defaultProps = {
  title: '배스킨라빈스 :: 클론코딩',
  description: 'React.js로 구현한 배스킨라빈스 클론코딩 연습 페이지 입니다.',
  keywords: 'React, layout, demo, cloncoding',
  author: 'chanCo',
  url: 'http://www.baskinrobbins.co.kr',
  image: 'https://www.baskinrobbins.co.kr/assets/images/common/favicon.ico',
};

export default Meta;
