import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// 로딩바 컴포넌트
import { BallTriangle } from 'react-loader-spinner';

// 로딩바 뒤에 표시될 반투명
const TransLayer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  background-color: #0003;
  width: 100%;
  height: 100%;
`;

const Spinner = ({visible, color, width, height}) => {
  return (
    <>
      {visible && (
        <TransLayer>
          <BallTriangle color={color} height={height} width={height}
          wrapperStyle={{
            position: 'absolute',
            zIndex: 100,
            left: '50%',
            top: '50%',
            marginLeft: (-width/2) + 'px',
            maringTop: (-height/2) + 'px'
          }} />
        </TransLayer>)} 
    </>
  );
};

// 기본값 정의
Spinner.defaultProps = {
  visible: false,
  color: '#06f',
  width: 100,
  height: 100
};

// 데이터 타입 설정
Spinner.propTypes = {
  visible: PropTypes.bool.isRequired,
  color: PropTypes.string,
  widht: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;