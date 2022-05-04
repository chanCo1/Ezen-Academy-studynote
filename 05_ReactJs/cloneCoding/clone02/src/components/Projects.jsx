/**
 * @filename : Projects.jsx
 * @author : 박찬우
 * @description : Main에서 받은 props를 바탕으로 구조를 작성한다.
 */

// 패키지 참조
import React from 'react';
import styled from 'styled-components';

// TODO: 스타일 정의
const ProjectsContainer = styled.div`
  & {
    padding: 0 8px;
    margin: 0 auto 16px;
    position: relative;
    display: inline-flex;

    .imgTitleWrap {
      position: absolute;
      top: 0;
      padding: 8px 16px;
      background-color: #000;
      color: #fff;

      h4 {
        font-size: 15px;
        font-weight: 500;
      }
    }

    .imgWrap {
      display: inline-block;
      width: 367px;

      img {
        width: 100%;
      }
    }
  }
`;

const Projects = (props) => {
  const projectData = props.data;

  return (
    <ProjectsContainer>
      {/* TODO: Project */}
      <div className="titleWrap">
        <h3 className="title">Projects</h3>
      </div>
      {projectData.map((v, i) => {
        return (
          <div key={i}>
            <h4>{v.subject}</h4>
            <img alt="이미지" src={v.img} />
          </div>
        );
      })}
    </ProjectsContainer>
  );
};

// TODO: 파라미터로 데이터를 받아 구조를 작성한다.
// const Projects = ({ items: { subject, img } }) => {
//   return (
//     <ProjectsContainer>
//       <div className="imgTitleWrap">
//         <h4>{subject}</h4>
//       </div>
//       <div className="imgWrap">
//         <img alt="이미지" src={img} />
//       </div>
//     </ProjectsContainer>
//   );
// };

export default Projects;
