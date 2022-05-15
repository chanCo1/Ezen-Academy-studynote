import React, { useState, useEffect } from 'react';
import react from '../assets/img/react.png';

const MyEffect = () => {
  // 이미지의 밝기를 위한 상
  const [myBrightness, setMyBrightness] = useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = useState(window.innerWidth);

  // 사용자 정의 함수
  const onMyResize = () => setMyWidth(window.innerWidth);

  /** 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨 */
  useEffect(() => {
    console.clear();
    console.log(
      `[MyEffect1]>> [${new Date().toLocaleString()}] ::: 화면에 컴포넌트가 처음 로드될 때 처리되어야 할 기능`
    );
    window.addEventListener('resize', onMyResize);
    return () => window.removeEventListener('resize', onMyResize);
  }, []);

  /** 이 컴포넌트가 화면에 막 등장할 때와 state, props값이 변경될 때 마다 매번 실행됨 */
  useEffect(() => {
    console.log(
      `[MyEffect2]>> [${new Date().toLocaleString()}] ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨`
    );
  });

  /** 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props값이 변경될 때만 실행 */
  useEffect(() => {
    console.log(
      `[MyEffect3]>> [${new Date().toLocaleString()}] ::: myBrightness값이 변경됨`
    );
  }, [myBrightness]);

  /** state값이 변경되어 화면이 다시 렌더링되거나 화면 이동 등의 이유로 이 컴포넌트가 사라질 때 실행됨 */
  useEffect(() => {
    return () => {
      console.log(
        `[MyEffect4]>> [${new Date().toLocaleString()}] ::: 이 컴포넌트가 화면에서 사라지기 직전에 처리되어야 할 기능`
      );
    };
  });

  return (
    <div>
      <h2>MyEffect</h2>
      <h3>window width: {myWidth}</h3>

      <div>
        <input
          type="range"
          min={0}
          max={200}
          step="1"
          value={myBrightness}
          onChange={(e) => {
            setMyBrightness(e.currentTarget.value);
          }}
        />
      </div>

      <div>
        <img
          alt="react"
          src={react}
          width={300}
          style={{ filter: `brightness(${myBrightness}%)` }}
        />
      </div>
    </div>
  );
};

export default MyEffect;
