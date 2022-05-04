import React from "react";

const DepartmentSub = ({item: {id, dname, loc}}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{dname}</td>
      <td>{loc}</td>
    </tr>
  );
};

export default DepartmentSub;