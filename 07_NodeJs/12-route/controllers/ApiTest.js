import express from 'express';
import RegexHelper from '../../helper/RegexHelper.js';
import BadRequestException from '../../exceptions/BadRequestException.js';
import mysql2 from 'mysql2/promise';

export default () => {
  const router = express.Router();

  /**
   * 에러처리 테스트를 위한 임시
   */
  router.get('/api_test/custom_error', (req, res, next) => {
    const e = new BadRequestException('개발자가 직접 생성한 에러가 발생했습니다.');

    // app.js에 명시되어 있는 다음번 app.use()를 호출한다.
    // 단, app.use()는 에러 객체를 파라미터로 받는 콜백이 연결되어 있어야 한다.
    return next(e);
  });

  /**
   * 에러 처리 테스트를 위한 임시
   */
  router.get('/api_test/make_result', (req, res, next) => {
    let num1 = req.get("num1");
    let num2 = req.get("num2");

    try {
      RegexHelper.value(num1, 'num1의 값이 없습니다.');
      RegexHelper.num(num1, 'num1은 숫자 형식만 가능합니다.');
      RegexHelper.value(num2, 'num2의 값이 없습니다.');
      RegexHelper.num(num2, 'num2는 숫자 형식만 가능합니다.');
    } catch(e) {
      return next(e);
    };

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    res.sendResult({
      params1: num1,
      params2: num2,
      result: num1 + num2,
    });
  });

  router.get('/department', async (req, res, next) => {
    // 접속 정보 설정
    const connectionInfo = {
      host: process.env.DATABASE_HOST,          // MYSQL 서버 주소 (다른 PC인 경우 IP주소)
      port: process.env.DATABASE_PORT,          // MYSQL 포트번호
      user: process.env.DATABASE_USERNAME,      // MYSQL의 로그인 할 수 있는 계정 이름
      password: process.env.DATABASE_PASSWORD,  // 비밀번호
      database: process.env.DATABASE_SCHEMA,    // 사용하고자 하는 데이터베이스 이름
      connectionLimit: process.env.DATABASE_CONNECTION_LIMIT,         // 최대 커넥션 수
      connectTimeout: process.env.DATABASE_CONNECT_TIMEOUT,        // 커넥션 타임아웃
      waitForConnections: process.env.DATABASE_WAIT_FOR_CONNECTIONS,  // 커넥션 풀이 다 찬 경우 처리
    };

    let dbcon = null;
    
    try {
      dbcon = await mysql2.createConnection(connectionInfo);
      await dbcon.connect();
  
      const sql = 'SELECT name, position, sal, date_format(hiredate, "%Y-%m-%d") AS hiredate FROM professor';
      const [result1] = await dbcon.query(sql);

      res.sendResult({item: result1});
    } catch(e) {
      console.error(e);
      return next(e);
    } finally {
      if(dbcon) {
        dbcon.end();
      }
    }
  });

  return router;
};
