import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

const Department = () => {

  // ----------------------------------------------------------------- hooks 정의
  // TODO: 화면에 표시할 상태값 (ajax로 받아올 json, 초기값을 빈 배열로 정의)
  const [ department, setDepartment ] = useState([]);

  // TODO: 검색 키워드 값 정의
  const [ keyword, setKeyword ] = useState('');

  // TODO: 삭제할 항목에 대한 id값을 저장하기 위한 상태값
  const [ deleteId, setDeleteId ] = useState(-1);

  // TODO: 수정할 항목에 대한 id값을 저장하기 위한 상태값
  const [ updateId, setUpdateId ] = useState(-1);
  // ----------------------------------------------------------------- hooks 정의 끝


  // ----------------------------------------------------------------- 데이터 호출 시작
  // TODO: 페이지가 처음 열렸을 때와 검색어가 반영되었을 때 데이터를 받아온다
  useEffect(() => {
    const getDepartment = async () => {
      try {
        const response = await axios.get('http://localhost:3001/department', {
          // TODO: 검색어가 있다면 dname 값으로 설정, 그렇지 않으면 정의 안함
          params: keyword ? { dname: keyword } : null
        });
        setDepartment(department => response.data);
      } catch(e) {
        console.error(e);
      }
    }
    getDepartment();
  }, [keyword]);
  // ----------------------------------------------------------------- 데이터 호출 끝


  // ----------------------------------------------------------------- 검색 시작
  // TODO: 검색어 입력 요소에 연결할 참조 변수
  const myKeywordInput = useRef();

  // TODO: 검색 버튼에 대한 클릭 이벤트
  const onButtonClick = useCallback(e => {
    setKeyword(myKeywordInput.current.value);
  }, []);
  // ----------------------------------------------------------------- 검색 끝


  // ----------------------------------------------------------------- 추가 시작
  // TODO: form에서 submit 이벤트가 발생할 때 호출할 이벤트 핸들러
  // -> 성능 최적화를 위해 useCallback 사용
  const onDepartmentSave = useCallback((e) => {
    // 버튼의 본 기능 차단 (페이지 이동 차단)
    e.preventDefault();

    // form 안에 있는 입력 요소의 값 추출
    const setDname = e.target.dname.value;
    const setLoc = e.target.loc.value;

    const postDepartment = async () => {

      let json = null;

      try {
        const response = await axios.post('http://localhost:3001/department', {
          dname: setDname,
          loc: setLoc
        });
        json = response.data;
      } catch(e) {
        console.error(e)
      }

      if(json !== null) {
        // 기존의 상태값과 배열간 병합을 처리하기 위해 응답결과를 배열로 묶음
        const addArr = [json];
        // 배열 병함 결과로 상태값을 갱신함
        setDepartment(department => department.concat(addArr));
      }
    };
    postDepartment();
  }, [])
  // ----------------------------------------------------------------- 추가 끝


  // ----------------------------------------------------------------- 삭제 시작
  // TODO: 삭제하기 버튼이 클릭되었을 때 호출할 이벤트 핸들러
  const onDeleteClick = useCallback(e => {
    // 클릭된 자기 자신
    // const current = e.target;

    // 클릭된 자신에게 숨어 있는 data-id값 추출
    const id = parseInt(e.target.dataset.id);
    // 삭제 대상임을 알림
    setDeleteId(id);
  }, []);

  // TODO: deleteId가 변경되었을 때 실행할 hook
  useEffect(() => {
    if(deleteId > -1) {
      // id가 일치하지 않는 항목만 filter로 걸러내어 상태값 갱신 (같지 않은 모든 항목을 리턴)
      // 성능향상을 위해 상태값을 함수형 업데이트로 처리함
      // -> 상태값을 파라미터로 받는 콜백에서 상태값 생신 결과를 리턴
      setDepartment(department => department.filter((v,i) => v.id !== deleteId));

      // TODO: 백엔드에 삭제 요청
      const deleteDepartment = async () => {
        try {
          // ajax를 통한 데이터 삭제 요청
          await axios.delete(`http://localhost:3001/department/${deleteId}`);
        } catch(e) {
          console.error(e);
        }
      };
      deleteDepartment();

      // 상태변수 원래 상태로 돌리기
      setDeleteId(-1);
    }
  }, [deleteId]);
  // ----------------------------------------------------------------- 삭제 끝


  // ----------------------------------------------------------------- 수정 시작
  // TODO: 수정하기 버튼이 클릭되었을 때 호출할 이벤트 핸들러
  const onUpdateClick = useCallback(e => {
    e.preventDefault();
    // 수정할 항목에 대한 인덱스 번호를 상태값으로 설정한다.
    setUpdateId(parseInt(e.target.dataset.id));
  }, []);

  // TODO: 수정에 대한 저장 버튼이 클릭되었을 때 호출될 이벤트 핸들러
  const onUpdateSubmit = useCallback(e => {
    e.preventDefault();

    // 이벤트가 발생한 form 요소 가져오기
    // const current = e.target;

    // form 요소 내의 input 요소들을 name 속성값으로 접근하여 입력값을 얻는다.
    const setId = e.target.id.value;
    const setDname = e.target.dname.value;
    const setLoc = e.target.loc.value;

    // 백엔드에 데이터 수정 요청
    const putDepartment = async () => {
      let json = null;

      try {
        const response = await axios.put(`http://localhost:3001/department/${setId}`, {
          dname: setDname,
          loc: setLoc,
        });

        // 수정 결과에 대한 json을 받는다.
        json = response.data;

        // // TODO: 함수형 업데이트
        // // -> 콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이 값을 직접 수정해도 된다.
        // setDepartment(department => {
        //   // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
        //   const find = department.findIndex((v,i) => v.id === response.data.id);
        //   // 원본 상태값의 해당 인덱스 번호(find) 위치 부터 1개를 ajax로 반환받은 수정결과 데이터로 교체한다.
        //   department.splice(find, 1, response.data);
        //   return department;
        // });

      } catch(e) {
        console.error(e);
      }

      if (json !== null) {
        // 함수형 업데이트
        // -> 콜백함수의 파라미터로 상태값의 복사본이 전달되므로 이 값을 직접 수정해도 된다.
        setDepartment(department => {
          // 원본 상태값과 비교하여 수정된 항목의 배열 인덱스를 찾는다.
          const find = department.findIndex((v,i) => v.id === json.id);
          // 원본 상태값의 해당 인덱스 번호(find) 위치부터 1개를 ajax로 반환받은 수정결과 데이터로 교체한다.
          department.splice(find, 1, json);
          // 수정된 원본 배열을 리턴한다.
          return department;
        });
      }

    }
    putDepartment();

    // 상태변수 되돌리기
    setUpdateId(-1);
  }, []);
  // ----------------------------------------------------------------- 수정 끝

  return (
    <div>
      <h2>학과목록</h2>
      <hr />

      {/* 검색기능 */}
      <form>
        <input type="text" name='keyword' ref={myKeywordInput} />
        <button type='button' onClick={onButtonClick}>검색</button>
      </form>
      <hr />

      {/* 저장기능 */}
      <form onSubmit={onDepartmentSave}>
        <label htmlFor="dname">학과: </label>
        <input type="text" name='dname' id='dname' />

        <label htmlFor="loc">위치: </label>
        <input type="text" name='loc' id='loc' />

        <button type='submit'>저장하기</button>
      </form>
      <hr />

      {/* 보여지는 화면 */}
      <form onSubmit={onUpdateSubmit}>
        <table border='1'>
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
              department.map((v,i) => {
                return(
                  <tr key={v.id}>
                    {/* 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면? */}
                    {updateId === v.id ? (
                      <>
                        {/* 수정을 위한 input 요소를 표시 */}
                        <td><input type="hidden" name='id' defaultValue={v.id} />{v.id}</td>
                        <td><input type="text" name='dname' defaultValue={v.dname} /></td>
                        <td><input type="text" name='loc' defaultValue={v.loc} /></td>
                        <td colSpan='2' align='center'>
                          <button type='submit'>저장</button>
                        </td>
                      </>
                    ) : (
                      <>
                        {/* 데이터를 텍스트로 출력 */}
                        <td>{v.id}</td>
                        <td>{v.dname}</td>
                        <td>{v.loc}</td>
                        <td>
                          <button type='button' data-id={v.id} onClick={onUpdateClick}>
                            수정하기
                          </button>
                        </td>
                        <td>
                          <button type='button' data-id={v.id} onClick={onDeleteClick}>
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
                <td colSpan='5' align='center'>
                  검색결과가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     {/* 검색기능 */}
  //     <form>
  //       <input type="text" name='keyword' ref={myKeywordInput} />
  //       <button type='button' onClick={onButtonClick}>검색</button>
  //     </form>

  //     <hr />

  //     {/* 저장기능 */}
  //     <form onSubmit={onDepartmentSave}>
  //       <label htmlFor="dname">학과: </label>
  //       <input type="text" name='dname' id='dname' />

  //       <label htmlFor="loc">위치: </label>
  //       <input type="text" name='loc' id='loc' />

  //       <button type='submit'>저장하기</button>
  //     </form>

  //     <hr />
      
  //     {/* 데이터를 가져와 화면에 보여준다 */}
  //     <form onSubmit={onUpdateSubmit}>
  //       <table border='1'>
  //         <thead>
  //           <tr>
  //             <th>학과번호</th>
  //             <th>학과명</th>
  //             <th>학과위치</th>
  //             <th>수정</th>
  //             <th>삭제</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {department.length > 0 ? (
  //             department.map((v,i) => {
  //               return(
  //                 <tr key={v.id}>
  //                   {/* 상태값에 저장되어 있는 수정할 항목의 인덱스에 해당하는 원소라면? */}
  //                   {updateId === v.id ? (
  //                     <>
  //                       {/* 수정을 위한 input 요소를 표시 */}
  //                       <td><input type="hidden" name='id' defaultValue={v.id} />{v.id}</td>
  //                       <td><input type="text" name='dname' defaultValue={v.dname} /></td>
  //                       <td><input type="text" name='loc' defaultValue={v.loc} /></td>
  //                       <td colSpan='2' align='center'>
  //                         <button type='submit'>저장</button>
  //                       </td>
  //                     </>
  //                   ) : (
  //                     <>
  //                       {/* 데이터를 텍스트로 출력 */}
  //                       <td>{v.id}</td>
  //                       <td>{v.dname}</td>
  //                       <td>{v.loc}</td>
  //                       <td>
  //                         <button type='button' data-id={v.id} onClick={onUpdateClick}>
  //                           수정하기
  //                         </button>
  //                       </td>
  //                       <td>
  //                         <button type='button' data-id={v.id} onClick={onDeleteClick}>
  //                           삭제하기
  //                         </button>
  //                       </td>
  //                     </>
  //                   )}
  //                 </tr>
  //               );
  //             })  
  //           ) : (
  //             <tr>
  //               <td colSpan='5' align='center'>
  //                 검색결과가 없습니다.
  //               </td>
  //             </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </form>
  //   </div>
  // );
};

// TODO: 함수형 컴포넌트의 리렌더링 성능 최적화
export default memo(Department);