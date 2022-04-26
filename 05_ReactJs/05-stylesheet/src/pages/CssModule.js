import React from "react";

// CSS 모듈 참조 -> 참조변수 이름을 지정한다.
import myStyleModule from "../assets/css/myStyle.module.css"


// === 원본 === //
// const CssModule = () => {
//   return (
//     <div>
//       <h2>CSS Module</h2>

//       <h3>* 변수에 저장된 CSS 클래스</h3>
//       <div className={myStyleModule.myCssBox} />

//       <h3>독립 클래스</h3>
//       <div className="myBorderBox" />

//       <h3>다중 클래스 적용(1) - 역따옴표 사용</h3>
//       <div className={`${myStyleModule["my-size"]} ${myStyleModule["my-bg"]}`} />

//       <h3>다중 클래스 적용 (2) - 배열로 구성한 후 join함수로 결합</h3>
//       <div className={[myStyleModule["my-size"], myStyleModule["my-bg"]].join(" ")} />
//     </div>
//   );
// };

// export default CssModule;

// --------------------------------------------

const CssModule = () => {
  return (
    <div>

      <div className={myStyleModule.content}>
        <div className={myStyleModule.titleWrap}>
          <h2 className={`${myStyleModule.title} ${myStyleModule.fontWeight600}`}>CSS 모듈화 과제</h2>
        </div>
        <div className={myStyleModule.notionWrap}>
          <h3 className={`${myStyleModule.notion} ${myStyleModule.fontWeight600}`}>CSS-Module이란?</h3>
          <p className={myStyleModule.description}>CSS를 사용할 때 클래스 이름을 고유한 값으로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중접되는 현상을 방지해주는 기술이다.</p>
        </div>
      </div>

    </div>
  );
};

export default CssModule;