import React, { memo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getList, getItem, postItem, putItem, deleteItem } from './slice/DepartmentSlice';

const Test = memo(() => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.Department);

  useEffect(() => {
    dispatch(getList({query: '공학', page: 1, rows: 5}));
    // dispatch(getItem({deptno: 101}));
    // dispatch(postItem({dname: 'React.js', loc: '1403호'}));
    // dispatch(putItem({deptno: 268, dname: 'React.js 수정', loc: '1406호'}));
    // dispatch(deleteItem({deptno: 220}));
  }, [dispatch]);

  return (
    loading ? "loading..." : (
      error ? JSON.stringify(error) : (
        <>
          {JSON.stringify(data)}
        </>
      )
    )
  );
});

export default Test;