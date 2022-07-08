import DBPool from "../../helper/DBPool.js";
import DepartmentService from '../service/DepartmentService.js';

(async () => {
  try {
    let result = await DepartmentService.getList();
    console.log(result);
    
    result = await DepartmentService.getItem({deptno: 102});
    console.log(result);
    result = await DepartmentService.addItem({dname: 'MVC학과', loc: '여긴어디?'});
    console.log(result);
    result = await DepartmentService.editItem({deptno: 102, dname: 'MVC학과', loc: '여긴어디?'});
    console.log(result);

    await DepartmentService.deletItem({deptno: 102});

  } catch(e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();