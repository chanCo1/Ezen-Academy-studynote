// 내가 풀이
import React, { useReducer, useMemo, useCallback } from 'react';

const setInputValue = (state, action) => {
  let input1 = 0;
  let input2 = 0;

  switch (action.select) {
    case '+':
      return input1 + input2;
    case '-':
      return input1 - input2;
    case '*':
      return input1 * input2;
    case '/':
      return input1 / input2;
    default:
      return 0;
  }
};

// 결과값..
// const result = useCallback((e) => {});

function App() {
  const [myValue, setMyValue] = useReducer(setInputValue, {
    input1: 0,
    input2: 0,
    select: '+',
  });

  const inputValue = useCallback((e) => {
    setMyValue(e.currentTarget.value);
  }, []);

  return (
    <>
      <p>
        {/* {myValue.input1}
        {myValue.input2} */}
        {/* {myValue.option} */}
      </p>

      <h1>Exam07</h1>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <hr />

      <input type="text" onChange={inputValue} />
      <select onChange={inputValue}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" onChange={inputValue} />
      <button type="button">결과확인</button>

      <hr />

      <h2>결과값: </h2>
    </>
  );
}

export default App;
