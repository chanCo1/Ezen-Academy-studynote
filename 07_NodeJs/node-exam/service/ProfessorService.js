/**
 * @filename: ProfessorService.js
 * @author: 박찬우
 * @description:
 */

import MybatisMapper from 'mybatis-mapper';
import DBPool from '../helper/DBPool.js';
import RuntimeException from '../exception/RuntimeException.js';

class ProfessorService {
  // mapper파일 호출
  constructor() {
    MybatisMapper.createMapper([
      './mapper/ProfessorMapper.xml',
      './mapper/StudentMapper.xml',
    ]);
  }

  /** 목록 데이터 조회 */
  async getList(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectList', params);
      let [result] = await dbcon.query(sql);

      if(result.length === 0) {
        throw new RuntimeException('조회된 데이터가 없습니다.');
      }

      data = result;

    } catch(err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }

    return data;
  }


  /** 단일 데이터 조회 */
  async getItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectItem', params);
      let [result] = await dbcon.query(sql);

      if(result.length === 0) {
        throw new RuntimeException('조회된 데이터가 없습니다.');
      }

      data = result[0];

    } catch(err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }

    return data;
  }


  /** 데이터 생성 */
  async addItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('ProfessorMapper', 'insertItem', params);
      let [{ insertId, affectedRows }] = await dbcon.query(sql);

      if(affectedRows === 0) {
        throw new RuntimeException('저장된 데이터가 없습니다.');
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      sql = MybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: insertId});
      let [result] = await dbcon.query(sql);
 
      if(result.length === 0) {
        throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
      }

      data = result[0];

    } catch (err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }

    return data;
  };


  /** 데이터 수정 */
  async editItem(params) {
    let dbcon = null;
    let data = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('ProfessorMapper', 'updateItem', params);
      let [{affectedRows}] = await dbcon.query(sql);

      if(affectedRows === 0) {
        throw new RuntimeException('저장된 데이터가 없습니다.');
      }

      // 새로 저장된 데이터의 PK값을 활용하여 다시 조회
      sql = MybatisMapper.getStatement('ProfessorMapper', 'selectItem', {profno: params.profno});
      let [result] = await dbcon.query(sql);

      if(result.length === 0) {
        throw new RuntimeException('저장된 데이터를 조회할 수 없습니다.');
      }

      data = result[0];
    } catch(err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }

    return data;
  };

  /** 데이터를 삭제 */
  async deleteItem(params) {
    let dbcon = null;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('StudentMapper', 'deleteItemByprofno', params);
      let [{affectedRows}] = await dbcon.query(sql);

      sql = MybatisMapper.getStatement('ProfessorMapper', 'deleteItem', params);
      [{affectedRows}] = await dbcon.query(sql);

    
      if(affectedRows === 0) {
        throw new RuntimeException('삭제된 데이터가 없습니다.');
      }

    } catch(err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }
  };

  /** 전체 데이터 수 조회 */
  async getCount(params) {
    let dbcon = null;
    let count = 0;

    try {
      dbcon = await DBPool.getConnection();

      let sql = MybatisMapper.getStatement('ProfessorMapper', 'selectCountAll', params);
      let [result] = await dbcon.query(sql);

      if(result.length > 0) {
        count = result[0].count;
      }
    } catch(err) {
      throw err;
    } finally {
      if(dbcon) dbcon.release();
    }

    return count;
  };
};

export default new ProfessorService();