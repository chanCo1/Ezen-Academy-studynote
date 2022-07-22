import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getList, getItem } from './slice/ProfessorSlice';

const Test = memo(() => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.Professor);

  useEffect(() => {
    // dispatch(getList({query: "", page: 1, rows: 5}));
    dispatch(getItem({profno: 9927}));
    // dispatch(postItem({dname: 'React.js', loc: '1403호'}));
    // dispatch(putItem({deptno: 268, dname: 'React.js 수정', loc: '1406호'}));
    // dispatch(deleteItem({deptno: 220}));
  }, [dispatch]);

  return (
    loading ? "loading" : (
      error ? JSON.stringify(error) : (
        <>
          {JSON.stringify(data)}
        </>
      )
    )
  );
});

export default Test;