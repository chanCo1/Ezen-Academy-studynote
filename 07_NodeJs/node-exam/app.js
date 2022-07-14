/**
 * @filename: app.js
 * @author: 박찬우
 * @description: - express 객체 생성 및 추가 설정
 *               - 사용할 백엔드 정의
 *               - 서버 구동
 */

/** 패키지 참조 */
import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import useragent from 'express-useragent';
import cors from 'cors';

// helper 참조
import WebHelper from './helper/WebHelper.js';
import DBPool from './helper/DBPool.js';
import logger from './helper/logHelper.js';

// 예외처리 클래스 참조
import PageNotFoundException from './exception/PageNotFoundException.js';

// 컨트롤러 참조
import ProfessorController from './controller/ProfessorController.js';


/** Express 객체 생성 */
const app = express();


/** 보안성을 높이기 위한 config.env 파일 참조 */
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '../config.env') });


/** 클라이언트 접속에 따른 이벤트 */
// 클라이언트의 접속을 감지
app.use(useragent.express());

app.use((req, res, next) => {
  logger.debug('클라이언트가 접속했습니다.');

  res.on('finish', () => {
    logger.debug('클라이언트의 접속이 종료 되었습니다.');
  });

  next();
});

// Crtl+C를 눌렀을 때의 이벤트
process.on('SIGINT', () => {
  process.exit();
});

// 프로그램이 종료될 때의 이벤트
process.on('exit', () => {
  DBPool.close();
  logger.debug('- - - - - - - - Server is Closed - - - - - - -');
})


/** express 객체 추가 설정 */
// cors
app.use(cors());

// WebHelper
app.use(WebHelper());

// POST 파라미터 수신 모듈 설정
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());  // TEXT형식의 파라미터 수신 가능
app.use(bodyParser.json());  // JSON형식의 파라미터 수신 가능

// HTTP PUT, DELETE 전송방식 확장 
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));


/** URL별 백엔드 정의 */
app.use(ProfessorController());

// 컨트롤러에서 에러 발생이 next(에러객체)를 호출했을 때 동작할 처리 //
app.use((err, req, res, next) => res.sendError(err));

// 앞에서 정의하지 않은 기타 URL에 대한 일괄 처리 (무조건 맨 마지막에 정의해야 함) //
app.use('*', (req, res, next) => res.sendError(new PageNotFoundException()));



/** 서버 구동 */
app.listen(process.env.PORT, () => {
  logger.debug('-----------------------------------');
  logger.debug('|       Start Express Server      |');
  logger.debug('-----------------------------------');
  logger.debug('- - - - - - - - - - - - - - - - - -')
});