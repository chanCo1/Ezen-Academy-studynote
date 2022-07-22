import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import ErrorView from '../components/ErrorView';

import regexHelper from '../libs/RegexHelper';

import { useSelector, useDispatch } from 'react-redux';
import { postItem } from '../slice/ProfessorSlice';


const Containerform = styled.form`
  position: relative;
  width: 600px;
  margin: 40px auto;
  text-align: center;

  button {
    width: 80%;
    padding: 10px 20px;
    cursor: pointer;
    border: none;

    &:active {
      transform: scale(.9, .9);
    }
  }
`;

const Table = styled.table`
  position: relative;
  width: 100%;
  margin: auto;
  text-align: center;

  th {
    width: 20%;
    padding: 20px 30px 20px 10px;
  }

  td {
    padding: 10px;

    input {
      width: 100%;
      padding: 10px;
      border: none;
      border-bottom: 1px solid #888;
      outline: none;
    }
  }
`;

const ProfessorAdd = memo(() => {

  /** 저장 완료 후 목록으로 되돌아가기 위한 페이지 강제 이동 함수 생성 */
  const navigate = useNavigate();

  /** 리덕스 관련 초기화 */
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.Professor);

  /** <form>의 submit 버튼이 눌러졌을 때 호출될 이벤트 핸들러 */
  const onSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      // 이벤트가 발생한 폼 객체
      const current = e.target;

      // 입력값에 대한 유효성 검사
      try {
        regexHelper.value(current.name, '교수이름을 입력하세요.');
        regexHelper.minLength(current.name, 2, '이름은 2글자 이상 입력가능합니다.');
        regexHelper.maxLength(current.name, 10, '이름은 10글자 이하 입력가능합니다.');

        regexHelper.value(current.userid, '아이디를 입력하세요.');
        regexHelper.minLength(current.userid, 2, '아이디는 2글자 이상 입력가능합니다.');
        regexHelper.maxLength(current.userid, 10, '아이디는 10글자 이하 입력가능합니다.');

        regexHelper.value(current.position, '직급을 입력하세요.');

        regexHelper.value(current.sal, '급여를 입력하세요.');
        regexHelper.num(current.sal, '급여는 숫자만 입력 가능합니다.');

        regexHelper.value(current.hiredate, '입사 날짜를 입력하세요.');

        // regexHelper.num(current.comm, '수당은 숫자만 입력 가능합니다. 없으면 0 입력');

        regexHelper.value(current.deptno, '학과번호를 입력하세요.');
        regexHelper.num(current.deptno, '학과번호는 숫자만 입력 가능합니다.');
        
      } catch (e) {
        window.alert(e.message);
        e.field.focus();
        return;
      }

      // 리덕스를 통한 데이터 저장 요청. --> 처리가 완료된 후 목록 페이지로 강제 이동한다.
      dispatch(
        postItem({
          name: current.name.value,
          userid: current.userid.value,
          position: current.position.value,
          sal: current.sal.value,
          hiredate: current.hiredate.value,
          comm: current.comm.value || null,
          deptno: current.deptno.value,
        })
      ).then(() => {
        navigate('/');
      });
    },
    [dispatch, navigate]
  );

  return (
    <>
      <Spinner visible={loading} />

      {error ? (
        <ErrorView error={error} />
      ) : (
        <Containerform onSubmit={onSubmit}>
          <Table>
            <colgroup>
              <col width="120" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>교수이름</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="name" />
                </td>
              </tr>
              <tr>
                <th>아이디</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="userid" />
                </td>
              </tr>
              <tr>
                <th>직급</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="position" />
                </td>
              </tr>
              <tr>
                <th>급여</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="sal" />
                </td>
              </tr>
              <tr>
                <th>입사날짜</th>
                <td className="inputWrapper">
                  <input className="field" type="date" name="hiredate" />
                </td>
              </tr>
              <tr>
                <th>수당</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="comm" />
                </td>
              </tr>
              <tr>
                <th>학과번호</th>
                <td className="inputWrapper">
                  <input className="field" type="text" name="deptno" />
                </td>
              </tr>
            </tbody>
          </Table>

          <div>
            <button type="submit">저장하기</button>
          </div>
        </Containerform>
      )}
    </>
  );
});

export default ProfessorAdd;