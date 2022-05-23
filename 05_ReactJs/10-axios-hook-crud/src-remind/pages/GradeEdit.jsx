import React, { memo, useCallback } from 'react';
import useAxios from 'axios-hooks';
import { useNavigate, useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import regexHelper from '../libs/RegexHelper';

const GradeEidt = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [{ data, loading, error }, refetch] = useAxios(`http://localhost:3001/grade/${id}`);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    const current = e.target;

    try {
      regexHelper.value(current.name, '이름을 입력하세요.');
      regexHelper.value(current.level, '학년을 선택하세요.');
      regexHelper.value(current.sex, '성별을 선택하세요.');
      regexHelper.value(current.kor, '국어 점수를 입력하세요.');
      regexHelper.value(current.eng, '영어 점수를 입력하세요.');
      regexHelper.value(current.math, '수학 점수를 입력하세요.');
      regexHelper.value(current.sin, '과학 점수를 입력하세요.');
    } catch(e) {
      alert(e.message);
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
            level: parseInt(current.level.value),
            sex: current.sex.value,
            kor: parseInt(current.kor.value),
            eng: parseInt(current.eng.value),
            math: parseInt(current.math.value),
            sin: parseInt(current.sin.value),
          }
        });

        json = response.data;

      } catch(e) {
        console.error(e);
      }

      if(json !== null) {
        alert('수정되었음 ㅋㅋ');
        navigate('/');
      }
    })();
  }, [refetch, navigate]);

  return (
    <div>

      <Spinner visible={loading} />

     {error ? (
       <h1>{error.code} Error</h1>
     ) : (
       data && (
        <form onSubmit={onSubmit}>
          <table border='1'>
            <tbody>
              <tr>
                <th>이름</th>
                <td>
                  <input type="text" name='name' defaultValue={data.name} />
                </td>
              </tr>
              <tr>
                <th>학년</th>
                <td>
                  <select name="level" defaultValue={data.level}>
                    <option value="">학년 선택</option>
                    {[...new Array(4)].map((v,i) => (
                      <option key={i} value={1 + i}>{1 + i}학년</option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <th>성별</th>
                <td>
                  <label><input type="radio" name='sex' value='남자' defaultChecked={data.sex === '남자'} />남자</label>
                  <label><input type="radio" name='sex' value='여자' defaultChecked={data.sex === '여자'} />여자</label>
                </td>
              </tr>
              <tr>
                <th>국어</th>
                <td>
                  <input type="text" name='kor' defaultValue={data.kor} />
                </td>
              </tr>
              <tr>
                <th>영어</th>
                <td>
                  <input type="text" name='eng' defaultValue={data.eng}  />
                </td>
              </tr>
              <tr>
                <th>수학</th>
                <td>
                  <input type="text" name='math' defaultValue={data.math}  />
                </td>
              </tr>
              <tr>
                <th>과학</th>
                <td>
                  <input type="text" name='sin' defaultValue={data.sin}  />
                </td>
              </tr>
            </tbody>
          </table>

          <div>
            <button type='submit'>수정하기</button>
          </div>
        </form>
       )
     )}
    </div>
  );
};

export default memo(GradeEidt);