import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({name, gender, kor, eng, math, sci}) => {

  const sum = parseInt(kor + eng + math + sci);
  const avg = parseInt(sum / 4);

  return (
    <tr>
      <th>{name}</th>
      <td>{gender}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{sci}</td>
      <th>{sum}</th>
      <th>{avg}</th>
    </tr>
  );
};

GradeItem.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  kor: PropTypes.number,
  eng: PropTypes.number,
  math: PropTypes.number,
  sci: PropTypes.number,
};

GradeItem.defaultProps = {
  kor: 0,
  eng: 0,
  math: 0,
  sci: 0
};

export default GradeItem;