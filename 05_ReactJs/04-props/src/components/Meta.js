import React from "react";
import { Helmet } from "react-helmet";
import Sample from "../assets/img/sample.png";

const Meta = (props) => {
  return(
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>

      {/* SEO 태그 */}
      <meta name="description" content={props.description} />
      <meta name="keyword" content={props.keyword} />
      <meta name="author" content={props.author} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image" content={props.image} />
      <meta property="og:url" content={props.url} />

      <link rel="shortcut icon" href={props.image} type="image/png" />
      <link ref="icon" href={props.image} type="image/png" />

      {/* 추가적으로 적용해야할 외부 js나 css로 여기서 명시할 수 있다. */}
      
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "React Example",
  description: "React.js 예제 입니다.",
  keyword : "React",
  author: "호쌤",
  image: Sample,
  url: window.location.href,
};

export default Meta;