import React, { memo, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const NewsList = () => {
  // 화면에 표시할 상태값 (ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [newsList, setNewList] = useState([]);
  // 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);

  // 페이지가 처음 열렸을 때 실행할  hook
  useEffect(() => {
    // ajax 로딩 시작을 알림
    setLoading(true);

    // 로딩 시간이 빨라서 인위적으로 딜레이 지정(없어도 됨)
    setTimeout(() => {
      (async () => {
        // ajax 처리 결과가 저장될 변수
        let json = null;

        try {
          const response = await axios.get("http://localhost:3001/NewsData");
          json = response.data;
        } catch (e) {
          console.error(e);
          alert("ajax 연동 실패");
        } finally {
          // ajax 로딩 종료
          setLoading(false);
        }

        // ajax 연동결과가 있다면 그 결과를 상태값에 적용함
        if (json != null) {
          // 일반 상태값 업데이트
          // -> setNewList(json); 이렇게 한다.

          // TODO: 성능향상을 위한 함수형 업데이트 적용
          setNewList((newsList) => json);
        }
      })();
    }, 500);

    // setTimeout 없이 사용
    // (async () => {
    //   // ajax 처리 결과가 저장될 변수
    //   let json = null;

    //   try {
    //     const response = await axios.get('http://localhost:3001/NewsData');
    //     json = response.data;
    //   } catch(e) {
    //     console.error(e);
    //     alert('ajax 연동 실패');
    //   } finally {
    //     // ajax 로딩 종료
    //     setLoading(false);
    //   }

    //   // ajax 연동결과가 있다면 그 결과를 상태값에 적용함
    //   if(json != null) {
    //     setNewList(json);
    //   }
    // })();
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <ListContainer>
        {newsList.map((v, i) => (
          <NewsItem key={i} item={v} />
        ))}
      </ListContainer>
    </div>
  );
};

// TODO: React.memo()를 사용하여 함수형 컴포넌트의 리렌더링 성능을 최적화
export default memo(NewsList);
