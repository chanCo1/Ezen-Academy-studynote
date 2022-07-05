import express from 'express';
import nodemailer from 'nodemailer';    // 메일발송 -> app.use()로 추가 설정 없음

import logger from '../../helper/logHelper.js';

export default () => {
  const router = express.Router();

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

  return router;
};