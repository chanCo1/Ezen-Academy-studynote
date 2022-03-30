/**
 * @fileName    : BadRequestException.js
 * @author      : 박찬우
 * @description : 정규표현식으로 검사할시, 문제 되는 부분에 강제로 오류를 발생 시킨다.
 */

class BadRequestException extends Error {
  constructor(msg = "잘못된 요청 입니다.", selector = null) {
    super(msg);

    this._selector = selector;
  };

  get selector() {
    return this._selector;
  };

  set selector(params) {
    this._selector = params;
  };
};


