import React, { forwardRef } from 'react';
import styled from 'styled-components'

const ContainerStyle = styled.div`
  border: 1px solid #000;
  height: 100px;
  width: 100px;
`;


// 부모로 부터 전달 받은 ref 참조변수를 받기 위해 forwardRef hook에 대한 콜백으로 컴포넌트를 구현
// 이렇게 구현된 컴포넌트는 props와 부모로부터 전달 받은 ref 참조 변수를 파라미터로 받는다.
const MyBox = forwardRef((props, ref) => {

  // 부모로 부터 전달 받은 ref 참조변수를 <div>에 연결한다.
  // 이 참조변수를 통해 부모 컴포넌트로 ref 참조변수가 연결된 <div> DOM에 접근할 수 있다.
  return (
      <ContainerStyle ref={ref} />
  );
});

export default MyBox;