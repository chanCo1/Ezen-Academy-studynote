import React from "react";
import MySchool from "./MySchool";

// const Department = () => {

//   const {department} = MySchool;

//   return (
//     <div>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>학과번호</th>
//             <th>학과명</th>
//             <th>위치</th>
//           </tr>
//         </thead>
//         <tbody>
//           {department.map((v,i) => {
//             return (
//               <tr>
//                 <td>{v.id}</td>
//                 <td>{v.dname}</td>
//                 <td>{v.loc}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Department;


const Department = () => {

  const departmentList = MySchool.department.map((v,i) => {
    return (
      <tr>
        <td>{v.id}</td>
        <td>{v.dname}</td>
        <td>{v.loc}</td>
      </tr>
    );
  });

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>위치</th>
          </tr>
        </thead>
        <tbody>
          {departmentList}
        </tbody>
      </table>
    </div>
  );
};

export default Department;