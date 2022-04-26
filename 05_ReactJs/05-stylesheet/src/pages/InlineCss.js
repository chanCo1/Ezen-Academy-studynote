import React from "react";

// (3-1) /src폴더의 하위의 임의의 경로에 존재하는 이미지 파일을 참조
// -> 현재 소스파일을 기준으로 하는 상대경로로 지정
// -> 실행시에는 react에 의해 다른 경로로 복사된다.
import sample from "../assets/img/sample.png";


/**
 * Inline Css를 적용한 컴포넌트
 * ex) <div style="..."></div>
 */

const InlineCss = () => {
  // (1-1) Css 로 사용될 JSON 객체 정의
  // CSS 속성 이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함.
  // -> 카멜표기법으로 ..

  const myStyle = {
    backgroundColor: "#f60",
    fontSize: "20px",
    color: "#0f6",
    fontWeight: "bold",
    padding: "10px 25px",
    marginBottom: "10px",
  };

  return (
    <div>
      <h2>InlineCss</h2>


      {/* (1-2) JSON객체를 style 속성에 적용 */}
      <h3>* 변수로 정의된 CSS 참조하기</h3>
      <div style={myStyle} >Hello React Css</div>

      {/* (2) 직접 코딩 */}
      <h3>* 직접 CSS 코딩하기</h3>
      <div 
        style={{
          backgroundColor: "#ff0",
          fontSize: "20px",
          color: "#00f",
          fontWeight: "bold",
          padding: "10px 25px",
          marginBottom: "10px",
        }}> Hello React Css (2)
      </div>

      {/* (3-2) 이미지 사용시 alt 속성을 지정 안하면 경고 발생 */}
      <h3>이미지 참조하기</h3>
      <img src={sample} width="240" height="240" alt="샘플이미지" />

      {/* (3-3) public 폴더에 있는 파일들은 단순 절대경로로 참조 가능함
          - public 폴더 하위에 임의의 폴더 생성 가능 */}
      <img src="/logo192.png" width="240" height="240" alt="리액트" />
    </div>
  );
};

export default InlineCss;