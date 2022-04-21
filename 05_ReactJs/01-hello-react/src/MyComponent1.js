// react 기본 패키지 참조 (필수)
import React from "react";

// MySubComponent 참조
import MySubComponent from "./MySubComponent";

/**
 * 함수형 컴포넌트 정의
 * - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적.
 */

const MyComponent1 = () => {
  // 리턴은 항상 HTML 구조를 의미하는 JSX 문법이어야 하고,
  // JSX 구조는 무조건 단 하나의 태그 요소만 반환해야한다.
  // -> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미이다.
  return (
    <div>
      <h2>Example1</h2>
      <p>React React React</p>

      <MySubComponent />
      <MySubComponent />
    </div>
  );
};

export default MyComponent1;