import React, { memo } from 'react';
import MovieRank from './pages/MovieRank';
 
const App = () => {
  return (
    <div>
      <h1>REMIND!</h1>
      <MovieRank />
    </div>
  );
};

export default memo(App);