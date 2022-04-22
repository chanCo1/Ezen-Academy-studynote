// react 기본 패키지 참조 (필수)
import React from 'react';

// MySubComponent 참조
import MySubComponent from "./MySubComponent";

const MyComponent2 = () => {
  return (
    <div>
      <h2>Example2</h2>
      <p>This is React Component</p>

      <MySubComponent />
      <MySubComponent />
      <MySubComponent />

    </div>
  );
};

export default MyComponent2;