import React from 'react'
import { NavLink, Routes, Route } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import NewsList from "../components/NewsList"

const News = () => {
  return (
    <div>
      <h2>헤드라인 뉴스</h2>

      <nav>
        <NavLink to="news_card">카드형</NavLink> |&nbsp;
        <NavLink to="news_list">리스트형</NavLink>
      </nav>

      <Routes>
        <Route path='news_card' element={<NewsCard />} />
        <Route path='news_list' element={<NewsList />} />
      </Routes>
    </div>
  );
};

export default News;