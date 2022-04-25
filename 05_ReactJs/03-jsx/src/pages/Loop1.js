import React from "react";

/**
 * jsx 반복 처리 (1) - 함수를 통한 반복문 활용
 */

const Loop1 = () => {

  // 목록정의 태그를 구성하기 위한 사용자 정의 함수
  const createListItem = (count) => {
    // <li>...<li> 단위를 저장할 배열
    let li =[];

    // 주어진 count 수 만틈 저장할 배열
    for(let i = 0; i < count; i++) {
    // 반복적으로 처리되는 컴포넌트 요소는 각 항목을 식별하기 위해 고유한 값을 갖는 key 속성을 포함해야한다. (React 권고 사항)
      li.push(<li key={i}>item-{i}</li>);
    }

    return li;
  };

  return (
    <div>
      <h2>Loop1</h2>
      <ul>{createListItem(5)}</ul>
    </div>
  );
};

export default Loop1;