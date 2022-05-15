import React, { memo, useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from '../components/NewsItem';

const NewsList = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() =>{
    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/NewsData');
        setNewsList(newsList => response.data);
      } catch(e) {
        alert('데이터 연동 실패');
      }
    })();
  }, []);

  return (
    <div>
      {newsList.map((v,i) => (
        <NewsItem key={i} item={v} />
      ))}
    </div>
  );
};

export default memo(NewsList);