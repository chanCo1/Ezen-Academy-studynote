import React, { memo, useEffect } from 'react';

// 상태값을 로드하기 위한 hook과 action 함수를 dispatch할 hook 참조
import { useSelector, useDispatch } from 'react-redux';
// Slice에 정의된 액션함수들 참조
import { getList } from '../slices/DepartmentSlice';

const Department = () => {

  // hook을 통해 slice가 관리하는 상태값 가져오기
  const {data, loading, error} = useSelector((state) => state.department);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트 되면 데이터 조회를 위한 액션함수를 디스패치함
  useEffect(() => {
    dispatch(getList())
  }, [dispatch]);

  return (
    <div>
      {error ? (
        <h1>{error.code} Error.</h1>
      ) : (
        <table border='1'>
          <thead>
            <tr>
              <th>id</th>
              <th>dname</th>
              <th>loc</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map(({id, dname, loc},i) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{dname}</td>
                <td>{loc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default memo(Department);
