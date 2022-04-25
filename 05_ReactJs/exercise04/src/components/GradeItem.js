import React from "react";
import PropTypes from "prop-types";

const GradeItem = ({name, level, gender, kor, eng, math, sci}) => {
  
  const sum = parseInt(kor + eng + math + sci);
  const avg = parseInt(sum / 4);

  return (
    <tr>
      <td>{name}</td>
      <td>{level}</td>
      <td>{gender}</td>
      <td>{kor}</td>
      <td>{eng}</td>
      <td>{math}</td>
      <td>{sci}</td>
      <td>{sum}</td>
      <td>{avg}</td>
    </tr>
  );
};

GradeItem.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
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