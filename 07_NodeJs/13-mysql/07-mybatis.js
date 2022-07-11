import DBPool from '../helper/DBPool.js';
import MybatisMapper from 'mybatis-mapper';

MybatisMapper.createMapper([
  '../mappers/DepartmentMapper.xml',
  '../mappers/ProfessorDepartmentMapper.xml'
]);

(async () => {
  const dbcon = await DBPool.getConnection();

  let params = {deptno: 201};
  let query = MybatisMapper.getStatement('DepartmentMapper', 'selectItem', params);
  let [result] = await dbcon.query(query);
  // console.log(result);


  params = {dname: '풀스텍', offset: 0, listCount: 3};
  query = MybatisMapper.getStatement('DepartmentMapper', 'selectList', params);
  [result] = await dbcon.query(query);
  console.log(result);


  params = {dname: '풀스텍', loc: '1401호'};
  query = MybatisMapper.getStatement('DepartmentMapper', 'insertItem', params);
  result = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}, insertId=${result.insertId}`);


  params = {deptno: 300};
  query = MybatisMapper.getStatement('DepartmentMapper', 'deleteItem', params);
  [result] = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}`);

  params = {deptno: 300, dname: '수정된학과', loc: '수정된위치'};
  query = MybatisMapper.getStatement('DepartmentMapper', 'updateItem', params);
  [result] = await dbcon.query(query);
  console.log(`affectedRows=${result.affectedRows}`);


  query = MybatisMapper.getStatement('DepartmentMapper', 'selectCountAll');
  [result] = await dbcon.query(query);
  // -> [ { cnt: 53 } ]
  console.log(`cnt=${result[0].cnt}`);
  

  query = MybatisMapper.getStatement('ProfessorDepartmentMapper', 'selectJoin');
  [result] = await dbcon.query(query);
  console.log(result);

  dbcon.release();
  DBPool.close();
})();