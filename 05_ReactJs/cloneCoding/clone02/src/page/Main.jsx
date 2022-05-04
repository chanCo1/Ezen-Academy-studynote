/**
 * @filename : Main.jsx
 * @author : 박찬우
 * @description : Main 페이지에서 데이터를 참조하여 구조를 작성한다.
 */

import React from 'react';
import styled from 'styled-components';
// 데이터 참조
import data from '../data/data';

// 컴포넌트 참조
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

// TODO: 스타일 정의
const MainContainer = styled.div`
  & {
    padding: 8px 16px;
    margin: auto;
    width: 1564px;

    .titleWrap {
      padding: 32px 16px;

      .title {
        font-size: 24px;
        font-weight: 500;
        margin: 10px 0;
        padding: 16px 0;
        border-bottom: 1px solid #e1e1e1;
      }

      p {
        margin: 15px 0;
        font-size: 15px;
      }
    }
  }
`;

const Main = () => {
  // const projectData = data.project;
  const aboutData = data.about;

  return (
    <MainContainer>
      <Projects data={data.project} />

      {/* TODO: About */}
      <div className="titleWrap">
        <h3 className="title">About</h3>
        <p className="aboutDesc">{aboutData.content}</p>
      </div>
      {/* About 컴포넌트 */}
      {/* 데이터를 바탕으로 map 함수를 이용해 작성한다. */}
      {aboutData.member.map((v, i) => (
        <About key={i} items={v} />
      ))}

      {/* TODO: Contact */}
      <Contact />
    </MainContainer>
  );
};

export default Main;

// {/* TODO: Project */}
// <div className="titleWrap">
// <h3 className="title">Projects</h3>
// </div>
// {/* Projects 컴포넌트 */}
// {/* 데이터를 바탕으로 map 함수를 이용해 작성한다. */}
// {projectData.map((v, i) => (
// <Projects key={i} items={v} />
// ))}
