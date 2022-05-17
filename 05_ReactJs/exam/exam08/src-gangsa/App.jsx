import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Spinner from './components/Spinner';
import Student from './components/Student';
import Professor from './components/Professor';

const App = () => {

  const [loading, setLoading] = useState(false);
  const [department, setDepartment] = useState([]);
  const [deptno, setDeptno] = useState(-1);

  // 페이지가 처음 열렸을 때 실행할 hook
  useEffect(() => {
    // 로딩 상태 변경
    setLoading(true);

    (async () => {
      try {
        const response = await axios.get('http://localhost:3001/department');
        setDepartment(department => response.data);
      } catch(e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 드롭다운 선택 상태가 변경되었을 때 호출될 이벤트 핸들러
  const onSelectChange = useCallback(e => {
    e.preventDefault();

    // 드롭다운의 선택 결과를 상태값으로 등록함
    const current = e.target;
    const id = parseInt(current[current.selectedIndex].value);
    setDeptno(id);
  }, []);

  return (
    <div>
      <Spinner visible={loading} />
      <h1>EXAM 09</h1>
      <hr />

      <select onChange={onSelectChange}>
        <option value="-1">--- 학과선택 ---</option>
        {department.map((v,i) => <option key={v.id} value={v.id}>{v.dname}</option>)}
      </select>

      <Student deptno={deptno} />
      <Professor deptno={deptno} />
    </div>
  );
};

export default App;