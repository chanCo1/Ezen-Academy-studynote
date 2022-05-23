import React, { memo, useCallback } from 'react';
import useAxios from 'axios-hooks';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import Table from '../components/Table';

import regexHelper from '../libs/RegexHelper';

// Table 컴포넌트의 CSS를 확장한 컴포넌트
const TableEx = styled(Table)`
  margin-top: 50px;
  margin-bottom: 15px;

  .inputWrapper {
    padding: 0;
    position: relative;
    text-align: left;

    .field {
      box-sizing: border-box;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 0;
      padding: 0 10px;
      outline: none;
      font-size: 14px;
    }

    label {
      margin-left: 7px;
      margin-right: 10px;

      input {
        margin-right: 10px;
      }
    }
  }
`;

const ProfessorEdit = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [{ data: professor, loading: loading1, error: error1 }, refetch] = useAxios(
    `http://localhost:3001/professor/${id}`
  );

  const [{ data: department, loading: loading2, error: error2 }] = useAxios(
    'http://localhost:3001/department'
  );

  // from 태그의 submit 버튼이 눌러졌을 때 호출 될 이벤트 핸들러
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const current = e.target;

      // 유효성 검사
      try {
        // 이름 검사
        regexHelper.value(current.name, '이름을 입력하세요');
        regexHelper.checkName(current.name, '한글만 가능, 2~10글자 내외');

        // 아이디 검사
        regexHelper.value(current.userid, '아이디를 입력하세요');
        regexHelper.checkId(current.userid, '영문+숫자만 가능, 2~20글자 내외');

        // 직급 검사
        regexHelper.value(current.position, '직급을 선택하세요');

        // 급여 검사
        regexHelper.value(current.sal, '급여를 입력하세요');
        regexHelper.checkMoney(current.sal, '숫자만 입력 가능합니다');

        // 입사일 검사
        regexHelper.value(current.hiredate, '입사일을 입력하세요');

        // 보직수당 검사
        regexHelper.value(current.comm, '보직수당 입력하세요');
        regexHelper.checkMoney(current.comm, '숫자만 입력 가능합니다');

        // 소속학과 검사
        regexHelper.value(current.deptno, '소속학과를 선택하세요');
      } catch (e) {
        window.alert(e.message);
        e.field.focus();
        return;
      }

      let json = null;
      (async () => {
        try {
          const response = await refetch({
            method: 'PUT',
            data: {
              name: current.name.value,
              userid: current.userid.value,
              position: current.position.value,
              sal: parseInt(current.sal.value),
              hiredate: current.hiredate.value,
              comm: parseInt(current.comm.value),
              deptno: parseInt(current.deptno.value),
            },
          });

          json = response.data;
        } catch (e) {
          console.error(e);
        }

        if (json !== null) {
          window.alert('저장되었습니다');
          navigate('/');
        }
      })();
    },
    [navigate, refetch]
  );

  return (
    <div>
      <Spinner visible={loading1 || loading2} />

      {error1 || error2 ? (
        <div>
          <h1>{(error1 || error2).code} Error</h1>
          <p>{(error1 || error2).message}</p>
        </div>
      ) : (
        professor && (
          <form onSubmit={onSubmit}>
            <TableEx>
              <colgroup>
                <col width="120" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>이름</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="text"
                      name="name"
                      placeholder="한글만 가능, 2~10글자 내외"
                      defaultValue={professor.name}
                    />
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td className="inputWrapper">
                    <input
                      className="field"
                      type="text"
                      name="userid"
                      placeholder="영문+숫자 조합만 가능, 2~20글자 내외"
                      defaultValue={professor.userid}
                    />
                  </td>
                </tr>
                <tr>
                  <th>직급</th>
                  <td className="inputWrapper">
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="교수"
                        defaultChecked={professor.position === '교수'}
                      />
                      교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="부교수"
                        defaultChecked={professor.position === '부교수'}
                      />
                      부교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="조교수"
                        defaultChecked={professor.position === '조교수'}
                      />
                      조교수
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="position"
                        value="전임강사"
                        defaultChecked={professor.position === '전임강사'}
                      />
                      전임강사
                    </label>
                  </td>
                </tr>
                <tr>
                  <th>급여</th>
                  <td className="inputWrapper">
                    <input className="field" type="number" name="sal" defaultValue={professor.sal} />
                  </td>
                </tr>
                <tr>
                  <th>입사일</th>
                  <td className="inputWrapper">
                    <input className="field" type="date" name="hiredate" defaultValue={professor.hiredate} />
                  </td>
                </tr>
                <tr>
                  <th>보직수당</th>
                  <td className="inputWrapper">
                    <input className="field" type="number" name="comm" defaultValue={professor.comm} />
                  </td>
                </tr>
                <tr>
                  <th>소속학과</th>
                  <td className="inputWrapper">
                    <select name="deptno" className="field" defaultValue={professor.deptno}>
                      <option value="">-- 선택하세요 --</option>
                      {department &&
                        department.map(({ id, dname }, i) => (
                          <option key={id} value={id}>
                            {dname}
                          </option>
                        ))}
                    </select>
                  </td>
                </tr>
              </tbody>
            </TableEx>

            <div style={{ textAlign: 'center' }}>
              <button type="submit">저장하기</button>
            </div>
          </form>
        )
      )}
    </div>
  );
};

export default memo(ProfessorEdit);
