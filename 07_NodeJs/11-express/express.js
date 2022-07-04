/* - - - - - - - - - - - - - - - - - - - -
1) 모듈 참조
- - - - - - - - - - - - - - - - - - - - */
// 직접 구현한 모듈
import logger from '../helper/logHelper.js';
import { myIp, urlFormat } from '../helper/UtilHelper.js';
import { mkdirs } from '../helper/FileHelper.js';

// 내장 모듈
import url from 'url';
import path from 'path';

// 설치가 필요한 모듈
import dotenv from 'dotenv';
import express from 'express';                  // express 본체
import useragent from 'express-useragent';      // 클라이언트의 정보를 조회할 수 있는 기능
import serveStatic from 'serve-static';         // 특정 폴더의 파일을 URL로 노출시킴
import serveFavicon from 'serve-favicon';       // favicon 처리
import bodyParser from 'body-parser';           // POST 파라미터 처리
import methodOverride from 'method-override';   // PUT 파라미터 처리
import cookieParser from 'cookie-parser';       // Cookie 처리
import expressSession from 'express-session'    // Session 처리
import nodemailer from 'nodemailer';            // 메일발송 -> app.use()로 추가 설정 없음
import multer from 'multer';                    // 업로드 모듈
import thumbnail from 'node-thumbnail';         // 썸네일 이미지 생성 모듈




/* - - - - - - - - - - - - - - - - - - - -
2) Express 객체 생성
- - - - - - - - - - - - - - - - - - - - */
// 여기서 생성한 app 객체의 use() 함수를 사용해서 각종 외부 기능, 설정 내용, URL을 계속해서 확장하는 형태로 구현이 진행된다.
const app = express();

// 프로젝트 폴더 위치
const __dirname = path.resolve();

// 설정 파일 내용 가져오기
dotenv.config({ path: path.join(__dirname, '../config.env') });


/* - - - - - - - - - - - - - - - - - - - -
3) 클라이언트의 접속시 초기화
- - - - - - - - - - - - - - - - - - - - */
// app 객체에 UserAgent 모듈을 탑재
// -> Express 객체(app)에 추가되는 확장 기능들을 express에서는 미들웨어라고 부른다.
// -> UserAgent 모듈은 초기화 콜백함수에 전달되는 req, res 객체를 확장하기 때문에 다른 모듈들 보다 먼저 설정되어야 한다.
app.use(useragent.express());

// 클라이언트의 접속을 감지
app.use((req, res, next) => {
  logger.debug('클라이언트가 접속했습니다.');

  // 클라이언트가 접속한 시간
  const beginTime = Date.now();

  // 클라이언트의 IP주소
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;

  // 클라이언트의 디바이스 정보 기록 (UserAgent 사용)
  logger.debug(`[Client] ${ip} / ${req.useragent.os} / ${req.useragent.browser} / ${req.useragent.platform}`);

  // 클라이언트가 요청한 페이지 URL
  // 콜백 함수에 전달되는 req 파라미터는 클라이언트가 요청한 URL의 각 부분을 변수로 담고 있다.
  const current_url = urlFormat({
    protocol: req.protocol,     // ex) http://
    host: req.get('host'),      // ex) 172.16.141.1
    port: req.port,             // ex) 3000
    pathname: req.originalUrl,  // ex) /page1.html
  });

  logger.debug(`[${req.method}] ${decodeURIComponent(current_url)}`);

  // 클라이언트의 접속이 종료된 경우의 이벤트 -> 모든 응답의 전송이 완료된 경우
  res.on('finish', () => {
    // 접속 종료시간
    const endTime = Date.now();

    // 이번 접속에서 클라이언트가 머문 시간 = 백엔드가 실행하는데 걸린 시간
    const time = endTime - beginTime;
    logger.debug(`클라이언트의 접속이 종료되었습니다. ::: [runtime] ${time}ms`);
    logger.debug('- - - - - - - - - - - - - - - - - - - - - - - - - -');
  });

  // 이 콜백함수를 종료하고 요청 URL에 연결된 기능으로 제어를 넘김
  // 이거 안넣어서 오류...
  next();
});


/* - - - - - - - - - - - - - - - - - - - -
4) Express 객체의 추가 설정
- - - - - - - - - - - - - - - - - - - - */

/** POST 파라미터 수신 모듈 설정, 추가되는 미들웨어들 중 가장 먼저 설정해야한다. */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: ture -> 지속적 사용
// extended: false -> 한번만 사용
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());  // TEXT형식의 파라미터 수신 가능
app.use(bodyParser.json());  // JSON형식의 파라미터 수신 가능


/** HTTP PUT, DELETE 전송방식 확장 */
// 브라우저 개발사들이 PUT, DELETE 방식으로 전송하는 HTTP Header 이름
app.use(methodOverride('X-HTTP-Method'));   // 마이크로소프트
app.use(methodOverride('X-HTTP-Method-Override'));   // 구글/GData
app.use(methodOverride('X-Method-Override'));   // IBM
// HTML 폼에서 PUT, DELETE로 정송할 경우 POST방식을 사용하되, action 주소에 "?_method" 라고 추가.
app.use(methodOverride('_method'));   // HTML form, 안해도 된다고 함.


/** 쿠키를 처리할 수 있는 객체 연결 */
// cookie-parser는 데이터를 저장, 조회 할 때 암호화 처리를 동반한다.
// 이 때 암호화에 사용되는 key문자열을 개발자가 정해야 한다.
app.use(cookieParser(process.env.COOKIE_ENCRYPT_KEY));


/** 세션 설정 */
app.use(expressSession({
  // 암호화 키
  secret: process.env.SESSION_ENCRYPT_KEY,
  // 세션이 초기화 되지 않더라도 새로 저장할지 여부 (일반적으로 false)
  resave: false,
  // 세션이 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
  saveUninitialized: false,
}));


/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면 static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic(process.env.PUBLIC_PATH));
// 업로드 된 파일이 저장될 폴더를 URL에 노출함
app.use(process.env.UPLOAD_URL, serveStatic(process.env.UPLOAD_DIR));
// 썸네일 이미지가 저장될 폴더를 URL에 노출함
app.use(process.env.THUMB_URL, serveStatic(process.env.THUMB_DIR));

/** favicon 설정 */
app.use(serveFavicon(process.env.FAVICON_PATH));

/** 라우터(URL 분배기) 객체 설정 -> 맨 마지막에 설정 */
const router = express.Router();
// 라우터를 express에 등록
app.use('/', router);


/* - - - - - - - - - - - - - - - - - - - -
5) 각 URL별 백엔드 기능 정의
- - - - - - - - - - - - - - - - - - - - */

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 01-setup.js
// router.route(path).get|post|put|delete((req, res, next) => {});
router.get('/page1', (req, res, next) => {
  // 브라우저에게 전달할 응답 내용
  let html = '<h1>Page1</h1>';
  html += '<h2>Express로 구현한 Node.js 백엔드 페이지</h2>';

  // 응답보내기(1) - Node 순정 방법
  // res.writeHead(200);
  // res.write(html);
  // res.end();

  // 응답보내기(2) - Express의 간결화된 방법
  // res.status(200);
  // res.send(html);

  // 메서드 체인으로도 가능 ( == 응답2)
  res.status(200).send(html);
});

router.get('/page2', (req, res, next) => {
  // 브라우저에게 전달할 응답 내용
  let html = '<h1>Page2</h1>';
  html += '<h2>Node.js Backend Page</h2>';
  res.status(200).send(html);
});

router.get('/page3', (req, res, next) => {
  // 페이지 강제 이동
  res.redirect('https:/www.naver.com');
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 02-GetParams.js
router.get('/send_get', (req, res, next) => {
  // ex) ?answer=400&age=10&height=175&weight=80
  // GET 파라미터들은 req.query 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로부터 전달 받은 GET 파라미터]');
  for(let key in req.query) {
    const str = '\t >> ' + key + '=' + req.query[key];
    logger.debug(str);
  }

  // /send_get?answer=0000 형태로 접근한 경우 answer 파라미터 값 추출
  // const answer = req.query['answer'];
  const answer = req.query.answer;
  let html = null;

  if(parseInt(answer) === 300) {
    html = "<h1 style='color:#0066ff'>정답입니다.</h1>";
  } else {
    html = "<h1 style='color:#ff6600'>틀렸습니다.</h1>";
  }

  res.status(200).send(html);
});

// 직접 URL로 테스트
router.get('/send_url/:username/:age', (req, res, next) => {
  // URL 파라미터들은 req.params 객체의 하위 데이터로 저장된다.
  // 전달받은 URL 파라미터는 GET 파라미터와 같은 방법으로 사용 가능함.
  logger.debug('[프론트엔드로 부터 전달받은 URL 파라미터]');
  for(let key in req.params) {
    const str = '\t >> ' + key + '=' + req.params[key];
    logger.debug(str);
  }

  const html = `<h1><span style="color:#0066ff">${req.params.username}</span>님은 <span style="color:#ff6600">${req.params.age}</span>세 입니다.</h1>`;

  res.status(200).send(html);
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 03-Post, Put, Delete.js
/** POST 파라미터를 처리하기 위한 라우터 등록 */
router.post('/send_post', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로 부터 전달받은 POST 파라미터]');
  for(let key in req.body) {
    const str = '\t >> ' + key + ' = ' + req.body[key];
    logger.debug(str);

    const html = `<h1><span style="color:#0066ff">${req.body.username}</span>님의 이메일 주소는 <span style="color:#ff6600">${req.body.email}</span> 입니다.</h1>`;

    res.status(200).send(html);
  }
});

/** PUT 파라미터를 처리하기 위한 라우터 등록 */
router.put('/send_put', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로 부터 전달받은 PUT 파라미터]');
  for(let key in req.body) {
    const str = '\t >> ' + key + '=' + req.body[key];
    logger.debug(str);

    const html = `<h1><span style="color:#0066ff">${req.body.username}</span>님은 <span style="color:#ff6600">${req.body.grade}</span>학년 입니다.</h1>`;

    res.status(200).send(html);
  }
});

/** DELETE 파라미터를 처리하기 위한 라우터 등록 */
router.delete('/send_delete', (req, res, next) => {
  // URL 파라미터들은 req.body 객체의 하위 데이터로 저장된다.
  logger.debug('[프론트엔드로 부터 전달받은 DELETE 파라미터]');
  for(let key in req.body) {
    const str = '\t >> ' + key + '=' + req.body[key];
    logger.debug(str);

    const html = `<h1><span style="color:#0066ff">${req.body.username}</span>님의 점수는 <span style="color:#ff6600">${req.body.point}</span>점 입니다.</h1>`;

    res.status(200).send(html);
  }
});

/** 상품에 대한 Restful API 정의하기 */
// 위의 형태처럼 개별적인 함수로 구현 가능하지만 대부분 하나의 URL에 메서드 체인을 사용해서 4가지 전송방식을 한번에 구현
router
  .get('/product/:productNumber', (req, res, next) => {
    // URL Params 형식으로 조회할 상품의 일련번호를 전달받아야 한다.
    const html = `<h1><span style="color:#0066ff">${req.params.productNumber}</span>번 상품 <span style="color:#ff6600">조회</span>하기</h1>`;
    res.status(200).send(html);
  })
  .post('/product', (req, res, next) => {
    // <form> 상에 저장할 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
    // 저장시에는 일련번호는 전송하지 않으며 저장후 자동으로 발급되는 일련번호를 프론트에게 돌려줘야 한다.
    const html = `<h1><span style="color:#0066ff">${req.body.productNumber}</span> 상품 <span style="color:#ff6600">등록</span>하기</h1>`
    res.status(200).send(html);
  })
  .put('/product/:productNumber', (req, res, next) => {
    // <form> 상에 수정 상품 정보를 입력 후 전송한다. (주로 관리자 기능)
    // 몇 번 상품을 수정할지 식별하기 위해 상품 일련번호가 함께 전송된다.
    const html = `<h1><span style="color:#0066ff">${req.params.productNumber}</span> 상품 <span style="color:#ff6600">수정</span>하기</h1>`
    res.status(200).send(html);
  })
  .delete('/product/:productNumber', (req, res, next) => {
    // 삭제할 상품의 일련번호 전송
    const html = `<h1><span style="color:#0066ff">${req.params.productNumber}</span> 상품 <span style="color:#ff6600">삭제</span>하기</h1>`
    res.status(200).send(html);
  })


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 04-Cookie.js
// public/04_cookie.html
router
  .post('/cookie', (req, res, next) => {
    // POST로 전달된 파라미터 받기
    const msg = req.body.msg;

    // 일반 쿠키 저장하기 -> 유효시간을 30초로 설정
    res.cookie('my_msg', msg, {
      maxAge: 30 * 1000,
      path: '/',
    });

    // 암호화된 쿠키 저장하기 -> 유효시간을 30초로 설정
    res.cookie('my_msg_signed', msg, {
      maxAge: 30 * 1000,
      path: '/',
      signed: true
    });

    res.status(200).send('Success');
  })
  .get('/cookie', (req, res, next) => {
    // 일반 쿠키값들은 req.cookie 객체의 하위 데이터로 저장된다. (일반 데이터)
    for(let key in req.cookies) {
      const str = `[cookies] ${key} = ${req.cookies[key]}`;
      logger.debug(str);
    }

    for(let key in req.signedCookies) {
      const str = `[signedCookies] ${key} = ${req.signedCookies[key]}`;
      logger.debug(str);
    }

    // 원하는 쿠키값을 가져온다.
    const my_msg = req.cookies.my_msg;
    const my_msg_signed = req.signedCookies.my_msg_signed;

    const result_data = {
      my_msg: my_msg,
      my_msg_signed: my_msg_signed,
    };

    res.status(200).send(result_data);
  })
  .delete('/cookie', (req, res, next) => {
    // 저장시 domain, path 를 설정했다면 삭제시에도 동일한 값을 지정해야 한다.
    res.clearCookie('my_msg', { path: '/' });
    res.clearCookie('my_msg_signed', { path: '/' });
    res.status(200).send('clear');
  });


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 05-Session.js
// Insomnia로 테스트
router
  .post('/session', (req, res, next) => {
    // POST로 전송된 변수값을 추출
    const username = req.body.username;
    const nickname = req.body.nickname;

    // 세션 저장
    req.session.username = username;
    req.session.nickname = nickname;

    // 결과 응답
    const json = { re: 'ok' };
    res.status(200).send(json);
  })
  .get('/session', (req, res, next) => {
    // 저장되어 잇는 모든 session값 탐색
    for(let key in req.session) {
      const str = `[session]${key} = ${req.session[key]}`;
      logger.debug(str);
    }

    const my_data = {
      username: req.session.username,
      nickname: req.session.nickname,
    }

    res.status(200).send(my_data);
  })
  .delete('/session', async (req, res, next) => {
    let result = 'ok';
    let code = 200;

    try {
      await req.session.destroy();
    } catch(e) {
      logger.error(e.message);
      result = e.message;
      code = 500;
    }

    const json = { rt: result };
    res.status(code).send(json);
  })

// public/06_login.html
router
  .post('/session/login', (req, res, next) => {
    const id = req.body.userid;
    const pw = req.body.userpw;

    logger.debug('id = ' + id);
    logger.debug('pw = ' + pw);

    let login_ok = false;
    if(id == 'node' && pw == '1234') {
      logger.debug('로그인 성공');
      login_ok = true;
    }

    let result_code = null;
    let result_msg = null;

    if(login_ok) {
      req.session.userid = id;
      req.session.userpw = pw;
      result_code = 200;
      result_msg = 'success';
    } else {
      result_code = 403;
      result_msg = 'fail'
    };

    const json = { rt: result_msg };
    res.status(result_code).send(json);
  })
  .delete('/session/login', async (req, res, next) => {
    let result = 'success';
    let code = 200;

    try {
      await req.session.destroy();
    } catch (e) {
      logger.error(e.message);
      result = e.message;
      code = 500;
    }

    const json = { rt: result };
    res.status(code).send(json);
  })
  .get('/session/login', (req, res, next) => {
    const id = req.session.userid;
    const pw = req.session.userpw;

    let result_code = null;
    let result_msg = null;

    if(id !== undefined && pw !== undefined) {
      logger.debug('현재 로그인 상태입니다.');
      result_code = 200;
      result_msg = 'success';
    } else {
      logger.debug('현재 로그인 상태가 아닙니다.');
      result_code = 400;
      result_msg = 'fail';
    }

    const json = { rt: result_msg };
    res.status(result_code).send(json);
  });


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 06-SendMail.js
// public/06_mail.html
router.post('/send_mail', async (req, res, next) => {
  /** 1) 프론트엔드에서 전달한 사용자 입력값 */
  const writer_name = req.body.writer_name;
  let writer_email = req.body.writer_email;
  const receiver_name = req.body.receiver_name;
  let receiver_email = req.body.receiver_email;
  const subject = req.body.subject;
  const content = req.body.content;

  /** 2) 보내는 사람, 받는 사람의 메일 주소와 이름 */
  // 보내는 사람의 이름과 주소
  // -> 외부 SMTP 연동시 주의사항 :: 발신주소가 로그인 계정과 다를 경우 발송이 거부된다.
  if(writer_name) {
    // ex) 홍길동 <gildong1234@mail.com>
    writer_email = writer_name + ' <' + writer_email + '>';
  }

  // 받는 사람의 이름과 주소
  if(receiver_name) {
    receiver_email = receiver_name + ' <' + receiver_email + '>';
  }

  /** 3) 메일 발송정보 구성 */
  const send_info = {
    from: writer_email,
    to: receiver_email,
    subject: subject,
    html: content,
  };

  /** 4) 발송에 필요한 서버 정보를 사용하여 발송객체 생성 */
  const smtp = nodemailer.createTransport({
    host: process.env.SMTP_HOST,        // SMTP 서버명 : smtp.gmail.com
    port: process.env.SMTP_PORT,        // SMTP 포트 : 465
    secure: true,                       // 보안연결(SSL) 필요
    auth: {
      user: process.env.SMTP_USERNAME,  // Gamil 로그인에 사용하는 메일주소
      pass: process.env.SMTP_PASSWORD,  // 앱 비밀번호
    }
  });

  /** 5) 메일발송 요청 */
  let rt = 200;
  let rtMsg = 'success';

  try {
    await smtp.sendMail(send_info);
  } catch (e) {
    rt = 500;
    rtMsg = e.message;
  }

  res.status(rt).send(rtMsg);
});


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 06-FileUpload.js
/** multer 객체 생성 -> 파일 업로드 환경 설정 수행 */
const multipart = multer({
  /** 저장될 디렉토리 경로 및 파일 이름 */
  storage: multer.diskStorage({
    /** 업로드 된 파일이 저장될 디렉토리 설정 */
    // req는 요청 정보, file은 최종적으로 업로드 된 결과 데이터가 저장되어 있을 객체
    destination: (req, file, callback) => {
      /*
        file 파라미터의 형식은 다음과 같다.

        file = {
          fieldname: 'myphoto',
          originalname: '원본파일명.png',
          encoding: '7bit',
          mimetype: 'image/png'
        }
      */
      console.group('destination');
      console.debug(file);
      console.groupEnd();

      // 업로드 될 폴더를 생성함
      mkdirs(process.env.UPLOAD_DIR);
      mkdirs(process.env.THUMB_DIR);

      // 업로드 정보에 백엔드의 업로드 파일 저장 폴더 위치를 추가한다.
      // 윈도우 환경을 고려하여 역실르시를 슬래시로 변경하는 처리 추가
      file.upload_dir = process.env.UPLOAD_DIR.replace(/\\/gi, '/');
      file.thumb_dir = process.env.THUMB_DIR.replace(/\\/gi, '/');

      // multer 객체에게 업로드 경로를 전달
      callback(null, file.upload_dir);
    },

    /** 업로드 된 파일이 저장될 파일 이름을 결정한다. */
    filename: (req, file, callback) => {
      /* 
        file 파라미터는 앞 과정을 통해 정보가 확장된 상태

        file = {
          fieldname: 'myphoto',
          originalname: '원본파일명.png',
          encoding: '7bit',
          mimetype: 'image/png',
          uploade_dir: './_files/UPLOAD_DIR',  // 업로드 된 파일이 저장될 경로
          thumb_dir: './_files/thumbnail'      // 썸네일 이미지가 생성될 경로
        }
      */
      console.group('filename');
      console.debug(file);
      console.groupEnd();

      // 파일의 원본 이름에서 확장자만 추출 -> ex) .png
      const extName = path.extname(file.originalname).toLowerCase();
      // 파일이 저장될 이름 (현재 시작의 timestamp + 확장자)
      const saveName = new Date().getTime().toString() + extName;
      
      // 업로드 정보에 백엔드에 업로드 되어 저장된 파일 이름을 추가한다.
      file.savename = saveName;
      // 업로드 된 파일이 저장된 최종 경로를 추가한다.
      file.path = path.join(file.upload_dir, saveName);
      // 업로드 정보에 파일에 접근할 수 있는 URL값 추가
      file.url = path.join(process.env.UPLOAD_DIR, saveName).replace(/\\/gi, '/');
      req.file = file;

      callback(null, saveName);
    },
  }),

  /** 용량, 최대 업로드 파일 수 제한 설정 */
  limits: {
    files: parseInt(process.env.UPLOAD_MAX_COUNT),
    fileSize: parseInt(eval(process.env.UPLOAD_MAX_SIZE))
  },

  /** 업로드 될 파일의 확장자와 최대 용량 제한 */
  fileFilter: (req, file, callback) => {
    // 파일의 확장자를 소문자로 얻기 -> ".png" => 'png'
    const extName = path.extname(file.originalname).substring(1).toLocaleLowerCase();

    // 확장자 제한이 있을 경우 필터링
    if(process.env.UPLOAD_FILE_FILTER !== undefined) {
      // "png|jpg|gif".indexOf('png')의 처리 결과를 찾기 못했다면?
      if(process.env.UPLOAD_FILE_FILTER.indexOf(extName) == -1) {
        const err = new Error();
        err.result_code = 500;
        err.result_msg = process.env.UPLOAD_FILE_FILTER.replace('|', ', ') + " 형식만 업로드 가능합니다.";
        return callback(err);
      }
    }
    callback(null, true);
  }
});

// public/07_upload/single.html
router.route('/upload/single').post((req, res, next) => {
  // name 속성이 myphoto인 경우에 대한 업로드를 수행 -> multer 객체가 생성되고 설정 내용이 실행됨
  // <input type='file' name='myphoto' />
  const uploade = multipart.single('myphoto');

  uploade(req, res, (err) => {
    console.group('request');
    console.debug(req.file);
    console.groupEnd();

    // 결과코드와 결과 메세지 변수
    let result_code = 200;
    let result_msg = 'Success';
    
    // 에러 객체가 존재한다면?
    if(err) {
      if(err instanceof multer.MulterError) {
        switch (err.code) {
          case 'LIMIT_FILE_COUNT':
            err.result_code = 500;
            err.result_msg = '업로드 가능한 파일 수를 초과했습니다.';
            break;
          case 'LIMIT_FILE_SIZE':
            err.result_code = 500;
            err.result_msg = '업로드 가능한 파일 용량을 초과했습니다.';
            break;
          default:
            err.result_code = 500;
            err.result_msg = '알 수 없는 에러가 발생했습니다.';
            break;
        }
      }
      logger.error(err);
      result_code = err.result_code;
      result_msg = err.result_msg;
    };

    // 업로드 된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
    const result = {
      rt: result_code,
      remsg: result_msg,
      item: req.file,
    }

    res.status(result_code).send('success');
  })
});


/* - - - - - - - - - - - - - - - - - - - -
6) 설정한 내용을 기반으로 서버 구동 시작
- - - - - - - - - - - - - - - - - - - - */
const ip = myIp();

app.listen(process.env.PORT, () => {
  logger.debug('-----------------------------------');
  logger.debug('|       Start Express Server      |');
  logger.debug('-----------------------------------');

  ip.forEach((v,i) => {
    logger.debug(`server address => http://${v}:${process.env.PORT}`);
  });

  logger.debug('- - - - - - - - - - - - - - - - - -')
});





// 구글 연동 비번 (띄어쓰기 없음!)
// nzidxjhrrunvtdjg
// xbeaayddaxhuypyq