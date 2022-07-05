/**
 * @fileName    : BadRequestException.jsx
 * @author      : 박찬우
 * @description : 정규표현식으로 검사할시, 문제 되는 부분에 강제로 오류를 발생 시킨다.
 */

 class BadRequestException extends Error {
  constructor(msg = "잘못된 요청 입니다.", field = null) {
    super(msg);
    // 멤버변수 추가
    this._statusCode = 400;
    // this._field = field;
  };

  get statusCode() {
    return this._statusCode;
  };

  // get field() {
  //   return this._field;
  // };

  // set field(params) {
  //   this._field = params;
  // };
};

export default BadRequestException;