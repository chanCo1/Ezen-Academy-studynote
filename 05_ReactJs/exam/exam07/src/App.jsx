// 패키지 참조
import React, { useReducer, useMemo, useCallback, useRef } from 'react';

// TODO:reducer 함수 정의
const setInputValue = (state, action) => {
  const input1 = action.input1;
  const input2 = action.input2;

  let result = 0;
  // 전달받은 선택값으로 사칙연산 수행
  switch (action.select) {
    case '+':
      result = input1 + input2;
      break;
    case '-':
      result = input1 - input2;
      break;
    case '*':
      result = input1 * input2;
      break;
    case '/':
      result = input1 / input2;
      break;
    default:
      result = 0;
      break;
  }
  return result;
};

function App() {
  // TODO: 값을 가져올 태그에 useRef 지정
  const input1 = useRef();
  const input2 = useRef();
  const select = useRef();

  // TODO: useReducer를 활용해 초기값 지정, 함수를 통해 값을 변경
  const [myValue, setMyValue] = useReducer(setInputValue, 0);

  // TODO: 버튼 클릭 이벤트
  const resultClick = useCallback((e) => {
    // reducer에 전달할 action 값을 JSON 형식으로 작성
    setMyValue({
      input1: parseInt(input1.current.value),
      input2: parseInt(input2.current.value),
      select: select.current.value,
    });
  }, []);

  // TODO: 결과값에 따라 색상 변경
  const color = useMemo(() => {
    return myValue % 2 === 0 ? 'red' : 'blue';
  }, [myValue]);

  return (
    <>
      <h1>Exam07</h1>
      <p>useReducer, useMemo, useCallback을 활용한 사칙연산</p>
      <hr />

      {/* TODO: 입력값 작성 */}
      <input type="text" ref={input1} />
      <select ref={select}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" ref={input2} />
      <button type="button" onClick={resultClick}>
        결과확인
      </button>
      <hr />
      <h2 style={{ color: color }}>결과값: {myValue}</h2>
    </>
  );
}

export default App;
