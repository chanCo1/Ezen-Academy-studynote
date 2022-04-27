import React from "react";

import { useParams } from "react-router-dom";
import GradeItem from "./components/GradeItem";
import Meta from "./components/Meta";
import GradeData from "./GradeData";

const head = ["이름", "성별", "국어", "영어", "수학", "과학", "총점", "평균"];

const GradeTable = () => {

  // URL을 통해 전달된 path 파라미터 추출
  const { level } = useParams();

  // 파라미터를 활용하여 JSON key 이름 조합
  const key = `${level}학년`;

  // JSON에서 필요한 데이터 추출
  const currentData = GradeData[key];

  return (
    <div>
      <Meta title={`${key} ::: React 연습문제`} />

      <h2>{key}</h2>
      <table border="1">
        <thead align="center">
          <tr>
            {head.map((v,i) => <th key={i}>{v}</th>)}
          </tr>
        </thead>
        <tbody>
          {currentData.map((v,i) => {
            return (<GradeItem key={i}
              name={v.이름}
              gender={v.성별}
              kor={v.국어}
              eng={v.영어}
              math={v.수학}
              sci={v.과학} />
            ) 
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GradeTable;