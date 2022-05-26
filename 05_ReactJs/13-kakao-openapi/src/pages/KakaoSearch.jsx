import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useQueryString } from '../hooks/useQueryString';
import { getKakaoSearch } from '../slice/KakaoSlice';
import Spinner from '../components/Spinner';
import ErrorPage from '../components/ErrorPage';

const KakaoSearch = () => {

  // path 파라미터 받아오기
  const {api} = useParams();
  // querystring의 검색어 가져오기
  const {query} = useQueryString();
  // 리덕스를 통한 검색 결과 상태 조회
  const dispatch = useDispatch();

  const { meta, documents, loading, error } = useSelector((state) => state.kakao);

  useEffect(() => {
    dispatch(getKakaoSearch({
      api: api,
      query: query,
      page: 1,
      size: 20,
    }))
  }, [dispatch, api, query]);

  return (
    loading ? "loading..." : (
      error ? JSON.stringify(error) : (
        <>
          <h1>Meta</h1>
          {JSON.stringify(meta)}
          <h1>Documents</h1>
          {JSON.stringify(documents)}
        </>
      )
    )
  );
};

export default memo(KakaoSearch);