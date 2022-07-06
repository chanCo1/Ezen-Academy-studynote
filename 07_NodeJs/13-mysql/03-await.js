/** (1) 모듈 및 환경설정 불러오기 */
import { join, resolve } from 'path';
import dotenv from 'dotenv';
import mysql from 'mysql2';

// 설정 파일 내용 가져오기
console.log(dotenv.config({path: join(resolve(), '../config.env')}));

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
    dbcon = await mysql.createConnection(connectionInfo);
    await dbcon.connect();


    /** (3) SQL 실행하기 */
    let sql = "INSERT INTO department (dname, loc) VALUES (?, ?)";
    let input_data = ['Node학과', '공학관'];

    // INSERT의 결과는, 반환되는 객체의 원소가 1개인 배열이다.
    const result1 = await dbcon.query(sql, input_data);
    console.log(result1[0].affectRows);
    console.log(result1[0].insertId);

    const firstId = result1[0].insertId;

    // 그러므로 아래와 같이 비구조 문법 적용이 가능하다.
    input_data = ['SQL학과', '공학관'];
    const [result2] = await dbcon.query(sql, input_data);
    console.group('INSERT 처리 결과');
    console.log('저장된 데이터의 수: ' + result2.affectedRows);
    console.log('샹성된 PK값: ' + result2.insertId);
    console.groupEnd();

  } catch(err) {
    console.log(err);
    return;
  } finally {
    console.log('- - - - - DB 접속 해제 - - - - -');
    if(dbcon) {
      dbcon.end();
    }
  }
})();