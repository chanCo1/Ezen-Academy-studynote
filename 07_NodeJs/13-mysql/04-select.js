/** (1) 모듈 및 환경설정 불러오기 */
import { join, resolve } from 'path';
import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';

// 설정 파일 내용 가져오기
dotenv.config({path: join(resolve(), '../config.env')});

// 접속 정보 설정
const connectionInfo = {
  host: process.env.DATABASE_HOST,          // MYSQL 서버 주소 (다른 PC인 경우 IP주소)
  port: process.env.DATABASE_PORT,          // MYSQL 포트번호
  user: process.env.DATABASE_USERNAME,      // MYSQL의 로그인 할 수 있는 계정 이름
  password: process.env.DATABASE_PASSWORD,  // 비밀번호
  database: process.env.DATABASE_SCHEMA     // 사용하고자 하는 데이터베이스 이름
};

console.info(connectionInfo);

(async () => {
  let dbcon = null;

  try {
    /** (2) mysql 접속 객체 생성 */
    dbcon = await mysql2.createConnection(connectionInfo);
    await dbcon.connect();


    /** (3) SQL 실행하기 */
    const sql = "SELECT name, position, sal, date_format(hiredate, '%Y-%m-%d') AS hiredate From professor";
    const [result1] = await dbcon.query(sql);
    console.log(result1);

    result1.map((v,i) => {
      console.log(`${v.name}, ${v.position}\n 급여: ${v.sal}\n 입사일: ${v.hiredate}\n`);
    });

    // 실제 restful api를 구현할 경우에는 json을 응답결과로 전달하면 되므로
    // sql 조회 결과에 대해서 별도의 반복문을 처리하지는 않고 리턴받은 result1을 통째로 응답결과로 사용하면 된다.
  } catch(e) {
    console.log(e);
  } finally {
    console.log('- - - - - DB 접속 해제 - - - - -');
    if(dbcon) {
      dbcon.end();
    }
  }
})();