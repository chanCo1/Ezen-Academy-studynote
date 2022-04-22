import React from "react";

/**
 * jsx 반복 처리 (3) - return문 안에서 map 함수 사용하기
 */

const Loop3 = () => {
  const seasons = ["봄","여름","가을","겨울"];
  // console.log(seasons);

  return (
    <div>
      <h2>Loop3</h2>
      <table border="1">
        <tbody>
          <tr>
            {seasons.map((v,i) => {
              return <td key={i}>{v}</td>
            })}
          </tr>
        </tbody>
      </table>
    </div>
  )
};
Loop3();

export default Loop3;