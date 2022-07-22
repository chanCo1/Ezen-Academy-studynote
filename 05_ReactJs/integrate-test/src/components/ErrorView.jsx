import React, { memo } from 'react';

const ErrorPage = ({error}) => {
  return (
    <div>
      <h1>{error.code} Error</h1>
      <hr />
      <p>{error.message}</p>
    </div>
  );
};

export default memo(ErrorPage);