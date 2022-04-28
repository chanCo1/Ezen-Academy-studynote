import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  & {
    flex: 0 1 auto;
    background-color: #fff;
    border-right: 1px solid #d5d5d5;
  }
`;

const Main = () => {
  return (
    <MainContainer className='main'>
      <div className="container">
        <h2>TITLE HEADING</h2>
        <h5>Title description, apr 28, 2022</h5>
        <div className="fakeImg">IMAGE</div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <br />
        <h2>TITLE HEADING</h2>
        <h5>Title description, apr 28, 2022</h5>
        <div className="fakeImg">IMAGE</div>
        <p>Some text..</p>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      </div>
    </MainContainer>
  );
};

export default Main;