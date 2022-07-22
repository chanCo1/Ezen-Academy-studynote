import DBPool from "../../helper/DBPool.js";
import DepartmentService from '../service/DepartmentService.js';

(async () => {
  try {
    let result = await DepartmentService.getList();
    console.log(result);
    
    // result = await DepartmentService.getItem({deptno: 101});
    // console.log(result);
    // result = await DepartmentService.addItem({dname: '풀스택학과', loc: '1403호'});
    // console.log(result);
    // result = await DepartmentService.editItem({deptno: 220, dname: 'MVC학과', loc: '여긴어디?'});
    // console.log(result);

    // await DepartmentService.deleteItem({deptno: 102});

    result = await DepartmentService.getCount();
    console.log(result);

  } catch(e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();