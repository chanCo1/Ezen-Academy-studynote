import React from "react";

/**
 * props
 * -> 컴포넌트를 사용하는 부모로 부터 전달받는 변수값이 포함되어 있는 객체
 * -> 필요한 경우에만 선언한다.
 * -> 흔히 컴포넌트에게 HTML 속성같은 형태로 전달된다.
 */

const MyPropsSub = (props) => {

  return (
    <div>
      <h3>MyPropsSub</h3>
      <p>
        제 이름은 {props.name}이고, 나이는 {props.age}입니다.
      </p>

    </div>
  );
};

// 속성값이 전달되지 않을 경우에 대비하여 기본값을 JSON으로 정의해 둘 수 있다.
// (defaultPtops 객체 이름 고정)
// 가급적 무조건 권장
MyPropsSub.defaultProps = {
  name: "이름없음",
  age: 20,
}

export default MyPropsSub;