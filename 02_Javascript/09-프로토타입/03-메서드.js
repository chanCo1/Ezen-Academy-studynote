// prototype을 활용한 메서드 정의
const User3 = function(id, email) {
  this._id = id;
  this._email = email;
};

// 로그인을 수행하는 메서드
User3.prototype.getLogin = function() {
  // 객체안에 속한 메서드 안에서는 생성자가 정의한 멤버변수를 마음껏 활용할 수 있다.
  console.log("로그인 되었습니다. -> id = " + this._id + ", email = " + this._email);
}

// 로그아웃을 수행하는 메서드
User3.prototype.getLogout = function() {
  console.log("로그아웃 되었습니다. -> id = " + this._id + ", email = " + this._email);
};

// 객체 생성하기
const student = new User3("학생", "stud@mail.com");

// 객체 안에 내장된 메서드 호출하기
student.getLogin();
student.getLogout();

// 객체 생성하기
const teacher = new User3("강사", "teach@MediaList.com");

// 객체 안에 내장된 메서드 호출하기
teacher.getLogin();
teacher.getLogout();

// 객체가 갖는 멤버변수 수정
teacher._id = "선생님";
teacher._email = "teacher@naver.com";

teacher.getLogin();
teacher.getLogout();






// const Example = function(x, y) {
//   this._x = x;
//   this._y = y;
// };

// Example.prototype.getOutput = function() {
//   console.log(`${this._x}, ${this._y} 출력`);
// }

// const a = new Example("아아아", "오오오");
// a.getOutput();

// const b = new Example("히히히", "헤헤헤");
// b.getOutput();

// b._x = "멤버변수 수정1"
// b._y = "멤버변수 수정2"

// b.getOutput();

