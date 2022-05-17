import React, { memo, useCallback, useReducer, useRef } from 'react';
import Student from './components/Student';
import Professor from './components/Professor';

// TODO: reducer 함수 정의
const reducer = (state, action) => {
  switch (action.select) {
    case '101':
      return 101;
    case '102':
      return 102;
    case '201':
      return 201;
    case '202':
      return 202;
    default:
      return -1;
  };
};

function App() {
  // ------------------------------------------------------hooks 정의 시작
  // TODO: useReducer를 활용해 초기값 지정, 함수를 통해 값을 변경
  const [mySelect, mySetSelect] = useReducer(reducer, '');

  // TODO: 값을 가져올 태그에 useRef 지정
  const select = useRef();
  // ------------------------------------------------------hooks 정의 끝


  // TODO: select 선택값 가져오기
  const resultChange = useCallback(e => {
    mySetSelect({select: select.current.value })
  },[]);

  return (
    <div>
      <h1>EXAM 09</h1>

      <hr />

      <select ref={select} onChange={resultChange}>
        <option value='-1'>학과선택</option>
        <option value='101'>컴퓨터공학과</option>
        <option value='102'>멀티미디어학과</option>
        <option value='201'>전자공학과</option>
        <option value='202'>기계공학과</option>
      </select>

      <Student deptno={mySelect} />
      <Professor deptno={mySelect} />
    </div>
  );
}

export default memo(App);