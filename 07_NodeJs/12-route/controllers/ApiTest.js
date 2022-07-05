import express from 'express';
import regexHelper from '../../helper/RegexHelper.js';
import BadRequestException from '../../exceptions/BadRequestException.js';

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
      regexHelper.value(num1, 'num1의 값이 없습니다.');
      regexHelper.num(num1, 'num1은 숫자 형식만 가능합니다.');
      regexHelper.value(num2, 'num2의 값이 없습니다.');
      regexHelper.num(num2, 'num2는 숫자 형식만 가능합니다.');
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

  return router;
};
