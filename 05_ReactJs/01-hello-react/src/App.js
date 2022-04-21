
// (1) 리액트 패키지 참조 (모든 js 파일의 최상단에서 필수 명시)
import React from "react";

// (3-1) 직접 작성한 컴포넌트 참조
import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";


// === (2) App 이라는 이름의 함수형 컴포넌트(재사용 가능한 HTML 조각단위) 정의 === //
// 프로젝트에서 컴포넌트를 렌더링(화면에 출력) 하면 함수에서 반환하고 있는 내용이 브라우저에 나타난다.
// 반환되는 HTML 코드는 JSX 문법을 사용한다.
// JSX -> XML과 비슷한 React 전용 Javascript 확장 문법
function App() {
  return (
    <div>
      <h1>Example</h1>

      {/* (3-2) 컴포넌트 출력 */}
      <MyComponent1></MyComponent1>
      <MyComponent2></MyComponent2>

    </div>
  );
}

export default App;




