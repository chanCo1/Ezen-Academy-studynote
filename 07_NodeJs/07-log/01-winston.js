/** (1) 패키지 참조 */
import { mkdirs } from '../helper/FileHelper.js';
import { join, resolve } from 'path';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file'  ;

// 프로젝트 폴더 위치 조회
// -> __dirname은 노드js의 기본적인 환경변수이다.
// -> ES6에서는 호환이 안되기 때문에 기존 버전과 호환성을 위해 __dirname 사용
const __dirname = resolve();

/** (2) 환경설정 정보 */
const config = {
  // 로그 파일이 저장될 경로 및 출력 레벨
  log: {
    // 개발자가 필요에 의해 기록하는 정보들을 저장할 파일
    debug: {
      path: join(__dirname, '_files/_logs'),
      level: 'debug',
    },
    // 시스템에 심각한 문제가 발생했을 때의 정보를 저장할 파일
    error: {
      path: join(__dirname, '_files/_logs'),
      level: 'error',
    },
  },
};

/** (3) 로그가 저장될 폴더 생성 */
mkdirs(config.log.debug.path);
mkdirs(config.log.error.path);

/** (4) 로그가 출력될 형식 지정 */
// combine: 여러개의 출력 결과를 병합
// timestamp: 날짜출력 형식
// printf: 출력
// slpat: 출력 후 줄바꿈
const { combine, timestamp, printf, splat, simple } = winston.format;

/** (5) winston 객체 만들기 */
const logger = winston.createLogger({
  // 로그의 전반적인 형식
  format: combine(
    timestamp({
      format: 'YY/MM/DD HH:mm:ss SSS',
    }),
    printf((info) => {
      // info.level: 로그 수준
      // info.message: 로그 내용
      return `${info.timestamp} [${info.level}]: ${info.message}`;
    }),
    splat(),
  ),

  // 일반 로그 규칙 정의
  transports: [
    // 하루에 하나씩 파일 형태로 기록하기 위한 설정
    new winstonDaily({
      name: 'debug-file',
      level: config.log.debug.level, // 출력할 로그의 수준
      datePattern: 'YYMMDD', // 파일 이름에 표시될 날짜 형식
      dirname: config.log.debug.path, // 파일이 저장될 위치
      filename: `log_%DATE%.log`, // 파일이름 형식. %DATE%는 datePattern의 값
      maxsize: 500000000,
      maxFiles: 50,
      zippedArchive: true,
    }),

    // 에러 내용만 기록할 별도의 설정
    new winstonDaily({
      name: 'error-file',
      level: config.log.error.level,
      datePattern: 'YYMMDD', // 파일 이름에 표시될 날짜 형식
      dirname: config.log.error.path, // 파일이 저장될 위치
      filename: `error_%DATE%.log`, // 파일이름 형식. %DATE%는 datePattern의 값
      maxsize: 5000000,
      maxFiles: 50,
      zippedArchive: true,
    }),
  ],
});

/** (6) 콘솔 설정 */
// 프로덕션 버전(==상용화 버전)이 아니라면?
// -> production 이라는 말이 없으면 아직 개발중
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      prettyPrint: true,
      showLevel: true,
      level: config.log.debug.level,
      format: combine(
        winston.format.colorize(),
        printf((info) => {
          return `${info.timestamp} [${info.level}]: ${info.message}`;
        })
      ),
    })
  );
}

logger.error('error 메세지 입니다. (1수준)');
logger.warn('warn 메세지 입니다. (2수준)');
logger.info('info 메세지 입니다. (3수준)');
logger.verbose('verbose 메세지 입니다. (4수준)');
logger.debug('debug 메세지 입니다. (5수준)');