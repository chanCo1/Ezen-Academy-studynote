import React, { useCallback, useState } from 'react';

const MyCallback = () => {
  const [myText, setMyText] = useState('Hi!');

  // 컴포넌트가 최초 렌더링 될 때 1회만 이벤트 핸들러 함수를 정의하고, 이후 부터는 계속적으로 재사용된다.
  // 만약 두 번째 파라미터인 배열에 특정 state값을 지정할 경우 해당 값이 수정될 때만 이벤트가 정의된다.
  // -> 이벤트 핸들러의 중복 정의를 방지해서 성능 향상을 꾀함.

  const onInputChange = useCallback((e) => {
    setMyText(e.currentTarget.value);
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <h3>{myText}</h3>
      <input
        type="text"
        placeholder="input..."
        onChange={onInputChange}
      ></input>
    </div>
  );
};

export default MyCallback;
