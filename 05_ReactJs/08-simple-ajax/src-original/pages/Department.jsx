import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const Department = () => {
  // TODO: 현재 ajax가 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);

  // TODO: 화면에 표시할 상태값(ajax 연동 결과로 받아올 json) -> 초기값을 빈 배열로 정의
  const [department, setDepartment] = useState([]);

  // TODO: 검색 키워드
  const [keyword, setKeyword] = useState('');

  // TODO: 삭제할 항목에 대한 id값을 저장하기 위한 상태값
  const [dropId, setDropId] = useState(-1);

  // TODO: 수정할 항목에 대한 id값을 저장하기 위한 상태값
  const [updateId, setUpdateId] = useState(-1);

  // TODO: 페이지가 처음 열렸을 때와 검색어가 변경되었을 때 실행할 hook
  useEffect(() => {
    // ajax 로딩 시작을 알림
    setLoading(true);

    // setTimeout은 인위적으로 넣은 것.
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get('http://localhost:3001/department', {
            // 검색어가 있다면 dname 값으로 설정, 그렇지 않으면 정의 안함
            params: keyword ? { dname: keyword } : null,
          });
          setDepartment((department) => response.data);
        } catch (e) {
          console.error(e);
          alert('ajax 연동 실패');
        } finally {
          // ajax 로딩 종료를 알림
          setLoading(false);
        }
      })();
    }, 300);
  }, [keyword]);

  // TODO: 검색어 입력 요소에 연결할 참조 변수
  const myKeywordInput = useRef();

  // TODO: 검색 버튼에 대한 클릭 이벤트
  const onButtonClick = (e) => {
    setKeyword(myKeywordInput.current.value);
  };

  // TODO: form에서 submit 이벤트가 발생할 때 호출될 이벤트 핸들러
  const onDepartmentSave = (e) => {
    // 페이지 강제 이동 차단
    e.preventDefault();

    // form 태그 안에 있는 입력 요소의 값 추출
    const dname = e.currentTarget.dname.value;
    const loc = e.currentTarget.loc.value;
    console.log(dname, loc);

    // ajax 로딩 시작을 알림
    setLoading(true);

    setTimeout(() => {
      (async () => {
        // 결과를 저장하기 위한 객체
        let json = null;

        try {
          // post 방식으로 전송할 파라미터 정의
          const reponse = await axios.post('http://localhost:3001/department', {
            dname: dname,
            loc: loc,
          });
          console.log(reponse);

          json = reponse.data;
        } catch (e) {
          console.error(e);
          alert('데이터 저장에 실패했습니다.');
        } finally {
          setLoading(false);
        }

        if (json !== null) {
          const addArr = [json];
          setDepartment(department.concat(addArr));
        }
      })();
    }, 300);
  };

  // TODO: 삭제하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러
  // 성능 최적화를 위해 useCallback() 적용
  const onDeleteClick = useCallback((e) => {
    // 클릭된 자기 자신
    const current = e.currentTarget;
    // 클릭된 자신에게 숨어 있는 data-id값을 추출
    const id = parseInt(current.dataset.id);
    // 삭제 대상임을 알림
    setDropId(id);
  }, []);

  // TODO: dropId가 변경되었을 때 실행할 hook
  useEffect(() => {
    if (dropId > -1) {
      // id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신
      // setDepartment(department.filter((v,i) => v.id !== dropId));

      // TODO: 성능향상을 위해 상태값을 함수형 업데이트로 처리함
      // -> 상태값을 파라미터로 받는 콜백에서 상태값 갱신 결과를 리턴
      setDepartment((department) => department.filter((v, i) => v.id !== dropId));

      // ajax 로딩 시작 알림
      setLoading(true);

      setTimeout(() => {
        // 백엔드 데이터가 삭제되었을을 알린다.
        (async () => {
          // ajax를 통한 데이터 삭제 요청
          try {
            await axios.delete(`http://localhost:3001/department/${dropId}`);
          } catch (e) {
            console.error(e);
            alert('ajax 연동 실패');
          } finally {
            // ajax 로딩 종료를 알림
            setLoading(false);
          }
        })();
      }, 300);

      // 상태 변수를 되돌린다.
      setDropId(-1);
    }
  }, [dropId]);

  // TODO: 수정하기 버튼이 클릭되었을 때 호출될 이벤트 핸들러
  // 성능 최적화를 위해 useCallback() 적용함
  const onUpdateClick = useCallback((e) => {
    e.preventDefault();

    // 수정할 항목에 대한 인덱스 번호를 상태값으로 설정
    setUpdateId(parseInt(e.currentTarget.dataset.id));
  }, []);

  // TODO: 수정사항 저장 버튼이 클릭되었을 때 호출될 이벤트 핸드러
  // 성능 최적화를 위해 useCallback() 적용
  const onUpdateSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 <form> 여ㅛ소 취득
    const current = e.target;

    // form 요소 내의 input 요소들을 name 속성값으로 접근하여 입력값을 얻음
    const id = current.id.value;
    const dname = current.dname.value;
    const loc = current.loc.value;

    setLoading(true);

    // 백엔드에 데이터가 수정되었을을 알린다.
    (async () => {
      // 수정 결과에 대한 json
      let json = null;

      // ajax를 통한 데이터 삭제 용청
      try {
        const response = await axios.put(`http://localhost:3001/department/${id}`, {
          dname: dname,
          loc: loc,
        });

        json = response.data;
      } catch (e) {
        console.error(e);
        alert('연동 실패');
      } finally {
        setLoading(false);
      }

      if (json !== null) {
        // 함수형 업데이트
        // -> 콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이 값을 직접 수정해도 된다.
        setDepartment((department) => {
          // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
          const find = department.findIndex((v, i) => v.id === json.id);
          // 원본 상태값의 해당 인덱스 번호(find) 위치부터 1개를 ajax로 반환받은 수정결과 데이터로 교체한다.
          department.splice(find, 1, json);
          // 수정된 원본 배열을 리턴한다.
          return department;
        });
      }
    })();
    // 상태변수를 되돌린다.
    setUpdateId(-1);
  }, []);



  
  return (
    <div>
      <Spinner visible={loading} />

      <h2>학과목록</h2>

      <form onSubmit={onDepartmentSave}>
        <div>
          <label htmlFor="dname">학과: </label>
          <input type="text" name="dname" id="dname" />
        </div>
        <div>
          <label htmlFor="loc">위치: </label>
          <input type="text" name="loc" id="loc" />
        </div>
        <button type="submit">저장하기</button>
      </form>

      <hr />

      <form>
        <input type="text" name="keyword" ref={myKeywordInput} />
        <button type="button" onClick={onButtonClick}>
          검색
        </button>
      </form>

      <hr />

      <form onSubmit={onUpdateSubmit}>
        <table border="1">
          <thead>
            <tr>
              <th>학과번호</th>
              <th>학과명</th>
              <th>학과위치</th>
              <th>수정</th>
              <th>삭제</th>
            </tr>
          </thead>
          <tbody>
            {department.length > 0 ? (
              department.map((v, i) => {
                return (
                  <tr key={v.id}>
                    {/* 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면? */}
                    {updateId === v.id ? (
                      <>
                        {/* 수정을 위한 input 요소를 표시 */}
                        <td>
                          <input type="hidden" name="id" defaultValue={v.id} />
                          {v.id}
                        </td>
                        <td>
                          <input type="text" name="dname" defaultValue={v.dname} />
                        </td>
                        <td>
                          <input type="text" name="loc" defaultValue={v.loc} />
                        </td>
                        <td colSpan="2" align="center">
                          <button type="submit">저장</button>
                        </td>
                      </>
                    ) : (
                      <>
                        {/* 데이터를 텍스트로 출력 */}
                        <td>{v.id}</td>
                        <td>{v.dname}</td>
                        <td>{v.loc}</td>
                        <td>
                          <button type="button" data-id={v.id} onClick={onUpdateClick}>
                            수정하기
                          </button>
                        </td>
                        <td>
                          <button type="button" data-id={v.id} onClick={onDeleteClick}>
                            삭제하기
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" align="center">
                  검색결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
};

// TODO: 함수형 컴포넌트의 리렌더링 성능을 최적화
export default memo(Department);
