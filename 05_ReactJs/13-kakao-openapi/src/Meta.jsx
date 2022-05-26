/**
 * @filename : Meta.js
 * @author : 박찬우
 * @description : SEO처리 및 기본 참조 리소스 명시
 */

// === 패키지 참조 === //
import React, { memo } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Meta = props => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{props.title}</title>
        <meta name='description' content={props.description} />
        <meta name='keywords' content={props.keywords} />
        <meta name='author' content={props.author} />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={props.title} />
        <meta property='og:description' content={props.description} />
        <meta property='og:url' content={props.url} />
      </Helmet>
    </HelmetProvider>
  );
};

/**
 * props에 대한 기본값 설정
 */
Meta.defaultProps = {
  title: 'React openAPI 연동',
  description: '안녕하세요',
  keywords: 'React,Redux,kako,openApi',
  author: '박찬우',
  url: window.location.href
};

export default memo(Meta);
