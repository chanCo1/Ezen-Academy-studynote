// 모듈 호출
const BadRequestException = require("./ex_BadRequestException");

// 검사할 클래스 생성
class RegexHelper {
  // 메서드 생성
  // 파라미터로 받는 input 값은 test 파라미터로, msg 값은 BadRequestException 파라미터로 보낸다.
  kor(input, msg) {
    // 정규표현식 체크하는 변수 생성(영문+한글)
    const check = /^[a-zA-Zㄱ-ㅎ가-힣]*$/;
    // .test()를 통해 검사, 파라미터로 받은 값이 정규표현식이 아니라면 강제로 에러 발생
    if(!check.test(input)) {
      throw new BadRequestException(msg);  // BadRequestException 객체 생성
    }
  }
}

// 모듈 생성
module.exports = RegexHelper;