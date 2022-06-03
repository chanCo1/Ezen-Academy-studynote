import React, { memo, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import { useQueryString } from '../hooks/useQueryString';
import { getKakaoSearch } from '../slice/KakaoSlice';

import ImageItem from '../components/ImageItem';
import ListItem from '../components/ListItem';
import GoTop from '../components/GoTop';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';
import styled from 'styled-components';

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => (props.api === 'image' ? 'row' : 'column')};
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const KakaoSearch = () => {
  // path 파라미터 받아오기
  const { api } = useParams();
  // querystring의 검색어 가져오기
  const { query } = useQueryString();
  console.log(query);

  // 리덕스를 통한 검색 결과 상태 조회
  const dispatch = useDispatch();
  const { meta, documents, loading, error } = useSelector((state) => state.kakao);
  console.log(documents);

  // 페이지 번호 상태값
  const [page, setPage] = useState(1);
  // 무한 스크롤 관련
  const [ref, inView] = useInView();

  const getContent = useCallback(
    (p = 1) => {
      console.log(`api=${api}, page=${p}`);
      setPage(p);
      dispatch(
        getKakaoSearch({
          api: api,
          query: query,
          page: p,
          size: api === 'imgae' ? 80 : 50,
        })
      );
    }, [api, query, dispatch]
  );

  // 검색어가 전달되었을 경우의 hook -> 기존 useEffect() 사용 부분은 삭제하고 새로 작성
  useEffect(() => {
    window.scrollTo(0, 0);
    getContent(1);
  }, [getContent, api, query]);

  // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  useEffect(() => {
    if (inView && !loading) {
      getContent(page + 1);
    }
  }, [getContent, inView, loading, page]);

  // useEffect(() => {
  //   window.scrollTo(0,0);
  //   dispatch(getKakaoSearch({
  //     api: api,
  //     query: query,
  //     page: 1,
  //     size: api === 'image' ? 80 : 50,
  //   }))
  // }, [dispatch, api, query]);

  return (
    <div>
      <Spinner visible={loading} />
      <GoTop />

      {error ? (
        <ErrorPage error={error} />
      ) : (
        documents && (
          <ListContainer api={api}>
            {documents.map((v, i) => {
              return api === 'image' ? (
                <ImageItem
                  key={i}
                  type={api}
                  item={v}
                  {...(!meta?.is_end && !loading && documents.length - 1 === i ? { inview: ref } : {})}
                />
              ) : (
                <ListItem
                  key={i}
                  type={api}
                  item={v}
                  {...(!meta?.is_end && !loading && documents.length - 1 === i ? { inview: ref } : {})}
                />
              );
            })}
          </ListContainer>
        )
      )}
    </div>
  );
};

export default memo(KakaoSearch);
