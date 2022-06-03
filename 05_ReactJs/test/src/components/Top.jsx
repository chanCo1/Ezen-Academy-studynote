import React, { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useQueryString } from '../hooks/useQueryString';
import MenuLink from './MenuLink';

const Top = memo(() => {
  const navigate = useNavigate();

  const { date_gte } = useQueryString();
  const { date_lte } = useQueryString();

  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    navigate(`/confirmed?date_gte=${e.target.date_gte.value}&date_lte=${e.target.date_lte.value}`);
  },[navigate]);

  return (
    <div>
      <h1>Covid19</h1>
      <form onSubmit={onSearchSubmit}>
        <input type="date" name="date_gte" placeholder="날짜선택" defaultValue={date_gte} />
        ~
        <input type="date" name="date_lte" placeholder="날짜선택" defaultValue={date_lte} />
        <button type="submit">검색</button>
      </form>

      {date_gte && (
        <nav>
          <MenuLink to={`/confirmed?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            일일확진자
          </MenuLink>
          <MenuLink to={`/confirmed_acc?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            누적확진자
          </MenuLink>
          <MenuLink to={`/active?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            격리환자
          </MenuLink>
          <MenuLink to={`/released?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            격리해제
          </MenuLink>
          <MenuLink to={`/released_acc?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            누적격리해제
          </MenuLink>
          <MenuLink to={`/death?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            사망자
          </MenuLink>
          <MenuLink to={`/death_acc?date_gte=${encodeURIComponent(date_gte)}&date_lte=${encodeURIComponent(date_lte)}`}>
            누적사망자
          </MenuLink>
        </nav>
      )}
    </div>
  );
});

export default Top;
