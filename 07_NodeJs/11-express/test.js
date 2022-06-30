import express from 'express';               // express 호출
import bodyParser from 'body-parser';        // POST 파라미터 처리
import expressSession from 'express-session' // Session 처리
import serveStatic from 'serve-static';      // 특정 폴더의 파일을 URL로 노출시킴

const app = express();  // express 사용
const port = 3001;      // 포트 번호 지정

/** HTML, CSS, IMG, JS 등의 정적 파일을 URL에 노출시킬 폴더 연결 */
// "http://아이피(혹은 도메인):포트번호" 이후의 경로가 router에 등록되지 않은 경로라면 static 모듈에 연결된 폴더 안에서 해당 경로를 탐색한다.
app.use('/', serveStatic('public'));

/** POST 파라미터 수신 모듈 설정, 추가되는 미들웨어들 중 가장 먼저 설정해야한다. */
// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// extended: ture -> 지속적 사용
// extended: false -> 한번만 사용
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());  // TEXT형식의 파라미터 수신 가능
app.use(bodyParser.json());  // JSON형식의 파라미터 수신 가능

/** 세션 설정 */
app.use(expressSession({
  // 암호화 키
  secret: 'test123',
  // 세션이 초기화 되지 않더라도 새로 저장할지 여부 (일반적으로 false)
  resave: false,
  // 세션이 저장되기 전에 기존의 세션을 초기화 상태로 만들지 여부
  saveUninitialized: false,
}));

app
  .post('/session/login', (req, res, next) => {
    const id = req.body.userid;
    const pw = req.body.userpw;

    console.log('id = ' + id);
    console.log('pw = ' + pw);

    let login_ok = false;
    // 원래는 데이터베이스에서 값이 같은지를 확인해야한다.
    if(id == 'node' && pw == '1234') {
      console.log('로그인 성공');
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

    // id와 pw값이 있다면
    if(id !== undefined && pw !== undefined) {
      console.log('현재 로그인 상태입니다.');
      result_code = 200;
      result_msg = 'success';
    } else {
      console.log('현재 로그인 상태가 아닙니다.');
      result_code = 400;
      result_msg = 'fail';
    }

    const json = { rt: result_msg };
    res.status(result_code).send(json);
  });

app.listen(port, () => {
  console.log('-----------------------------------');
  console.log('|       Start Express Server      |');
  console.log('-----------------------------------');
});