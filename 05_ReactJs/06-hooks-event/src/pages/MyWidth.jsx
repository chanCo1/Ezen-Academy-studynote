import React from 'react';
import useMyWidth from '../hooks/myHook';

const MyWidth = () => {
  const myWidth = useMyWidth();

  return (
    <div>
      <h2>MyState</h2>
      <h3>Window-width: {myWidth}</h3>
    </div>
  );
};

export default MyWidth;
