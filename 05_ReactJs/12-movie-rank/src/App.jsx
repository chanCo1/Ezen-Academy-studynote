import React, { memo } from 'react';
import MovieRank from './pages/MovieRank';

const App = () => {
  return (
    <div>
      <h1>12-movie-rank</h1>
      <hr />
      <MovieRank />
    </div>
  );
};

export default memo(App);
