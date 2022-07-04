import express from 'express';               // express 호출
import bodyParser from 'body-parser';        // POST 파라미터 처리
import serveStatic from 'serve-static';      // 특정 폴더의 파일을 URL로 노출시킴
import nodemailer from 'nodemailer';         // 메일발송 -> app.use()로 추가 설정 없음

const app = express();  // express 사용
const port = 3002;      // 포트 번호 지정

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

app.post('/send_mail', async (req, res, next) => {
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
    host: 'smtp.gmail.com',        // SMTP 서버명 : smtp.gmail.com
    port: '465',        // SMTP 포트 : 465
    secure: true,                       // 보안연결(SSL) 필요
    auth: {
      user: 'loinsective@gmail.com',  // Gamil 로그인에 사용하는 메일주소
      pass: 'xbeaayddaxhuypyq',  // 앱 비밀번호
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

app.listen(port, () => {
  console.log('-----------------------------------');
  console.log('|       Start Express Server      |');
  console.log('-----------------------------------');
});