//# 개발자가 직접 정의하는 에러 //

// 에러 객체를 생성
// 생성자 파라미터로 에러의 내용 전달
let err = new Error("에러났는데요?");
console.log(err.name);  // 에러 객체 이름
console.log(err.message);  // 에러 객체 메세지

// 개발자가 직접 에러를 발생시킬 수 있다.
// -> 이 구문을 실제 에러로 인식하기 때문에 프로그램이 이 위치에서 중단
throw err;

// 실행 안됨
console.log("프로그램 종료");