
// 모듈을 통해 입력값 검사
// Error 클래스를 상속
class BadRequestException extends Error {
  // 자식클래스가 생성자를 갖는 경우 부모의 생성자를 호출해야 한다.
  constructor(msg = "잘못된 요청 입니다.") {  // 파라미터로 받는 값이 없으면 기본값 리턴
    // 부모의 생성자 호출
    super(msg);
    // 부모 멤버변수 변환
    super.name = "BadRequestException";

    // 자식클래스에서 멤버변수 추가
    this._statusCode = 400;
  }

  // gettter로 statusCode 값 반환
  get statusCode() {
    return this._statusCode;
  }
};

// 모듈 생성
module.exports = BadRequestException;
