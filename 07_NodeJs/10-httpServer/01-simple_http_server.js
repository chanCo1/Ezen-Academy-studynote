/** 모듈 참조 */
import logger from '../helper/logHelper.js';
import { myIp } from '../helper/UtilHelper.js';
import http from 'http';

/** 웹 서버 구동 */
const port = 3216;  // 포트번호 설정
const ip = myIp();
const server = http.createServer();  // 웹 서버 객체 만들기

/** 포트번호에 대해 리스닝 시작 */
// listen을 시작하면 호출될 콜백함수 지정.
// listen을 시작 -> 백엔드(서버)가 가동을 시작했다는 의미
server.listen(port, () => {
  logger.debug(port + '번 포트에서 백엔드가 구동되었습니다.');
  logger.debug('- - - - - - - - - - - - - - - - - - -');

  // 백엔드에게 접속할 수 있는 주소를 출력
  ip.forEach((v,i) => {
    logger.debug(`http://${v}:${port}`);
  });
});

/** 프론트엔드가 접속했을 때 발생하는 이벤트 */
server.on('connection', (socket) => {
  logger.debug(`프론트엔드가 접속했습니다. : ${socket.remoteAddress}, ${socket.remotePort}`);
  logger.debug(socket);
});

/** connection 이벤트 발생 직후 프론트엔드에게 결과값을 되돌려 주기 위해 호출되는 이벤트 */
// req(request) -> 요청객체: 브라우저가 서버에게 전달하는 정보를 담고 있다.
// res(response) -> 응답객체: 서버가 브라우저에게 결과를 전송하는 기능을 갖는다.
server.on('request', (req, res) => {
  logger.debug(`프론트엔드의 요청 >> [${req.method}] ${req.url}`);

  // 클라이언트에게 전송할 응답 헤더 구성
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  // 클라이언트에 전송할 본문 구성
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('  <head>');
  res.write('    <meta charset="utf-8" />');
  res.write('    <title>응답 페이지</title>');
  res.write('  </head>');
  res.write('  <body>');

  // 프론트엔드가 요청한 URL에 따라 출력 내용을 분기
  if(req.url == '/hello.html') {
    res.write('    <h1>Hello World</h1>');
  } else {
    res.write('    <h1>Node.js로 부터 응답 페이지</h1>');
  }

  res.write('  </body>');
  res.write('</html>');

  // 클라이언트에 데이터 전송 (통신종료)
  res.end();
});

/** 서버 종료 이벤트 */
// 정상적인 상황에서는 발생할 가능성이 없다.
server.on('close', function() {
  logger.debug('백엔드가 종료되었습니다.');
});

// // 예제이므로 타이머를 통해 백엔드를 60초 후 강제 종료
// setTimeout(() => {
//   server.close();
// }, 60000);