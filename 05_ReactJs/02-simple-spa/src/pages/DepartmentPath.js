/**
 * path 파라미터를 전달 받는 페이지
 */

import React from "react";

// Path 파라미터 추출 기능을 찾는 useParams() 함수를 react-router-dom 패키지로 부터 참조함.
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
  // 기존의 콘솔 출력 내용 삭제
  console.clear();

  // 쵸엋ㅇ 데이터 확인하기
  const parmas = useParams();
  console.group('useParmas()의 리턴값 확인');
  console.log(parmas);
  console.groupEnd();

  console.group('파라미터 처리 결과 확인');
  console.log("요청된 학과번호 값 = %s (%s)", parmas.id, typeof parmas.id);
  console.log("요청된 메세지 값 = %s (%s)", parmas.msg, typeof parmas.msg);
  console.groupEnd();

  // 백엔드로 부터 받는 데이터
  const departmentList = {
    item: [
      {id: 201, dname: "전자공학과", loc: "3호관"},
      {id: 202, dname: "기계공학과", loc: "4호관"},
    ]
  };

  // 전달된 파라미터를 정수로 변환
  const id = parseInt(parmas.id);

  // 조회결과가 저장될 객체
  let departmentItem = null;

  // 미리 준비한 Json에서 id 값이 일치하는 정보를 조회
  departmentList.item.some((v, i) => {
    if(v.id === id) {
      departmentItem = v;
      return true;
    }
    return false;
  });

  if(!departmentItem) {
    return (<h2>존재하지 않는 데이터에 대한 요청입니다.</h2>)
  }

  // 정상 화면 출력
  return (
    <div>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.id}</li>
        <li>학과번호: {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentPath;