// 객체 사이사이에 쉼표 잊지 말것 !

// JSON을 활용한 클래스 정의하기

// 생성자와 멤버변수 정의
function Member(username, password) {
  this._username = username;
  this._password = password;
};

// getter, setter 메서드 일괄 정의
Member.prototype = {
  // 멤버변수 _username에 대한 getter, setter
  get username() {
    return this._username;
  },

  set username(param) {
    this._username = param;
  },

  get password() {
    return this._password;
  },

  set password(param) {
    this._password = param;
  },

  // 로그인을 수행하는 메서드
  login: function() {
    console.log(`[Member] 로그인되었습니다. username = ${this.username}, password = ${this.password}`);
  },

  logout: function() {
    // 로그아웃이므로 아이디와 비밀번호를 비워준다.
    this.username = "";
    this.password = "";
    console.log(`[Member] 로그아웃되었습니다. username = ${this.username}, password = ${this.password}`);
  }
};

console.log(Member.prototype);

// 생성자를 통한 객체 생성
const member1 = new Member("hello", "1234");

// getter를 통한 멤버변수 반환 받기
console.log(member1.username);
console.log(member1.password);

// 메서드 호출
member1.login();
member1.logout();

// setter를 통한 멤버변수 변경
member1.username = "world";
member1.password = "1234"

// 메서드 호출
member1.login();
member1.logout();