import React, { memo } from 'react';
import NewsList from './pages/NewsList';

function App() {
  return (
    <div>
      <h1>Exam11</h1>
      <NewsList />
    </div>
  );
}

export default memo(App);
