
class UserClass {
  constructor() {
    this._userName = null;
    this._email = null;
  }
  // 멤버변수 _userName에 값을 할당하기 위한 setter 함수
  set userName(value) {
    if(!value) {
      console.log("userName을 입력하세요.");
      return;
    }
    this._userName = value;
  }
  // 멤버변수 _userName 값을 반환하기 위한 getter 함수
  get userName() {
    return this._userName;
  }

  // 멤버변수 _email에 값을 할당하기 위한 setter 함수
  set email(value) {
    if(!value) {
      console.log("email을 입력하세요.");
      return;
    }
    this._email = value;
  }

  // 멤버변수 _userName 값을 반환하기 위한 getter 함수
  get email() {
    return this._email;
  }

  // 일반적인 기능을 수행하기 위한 메서드
  login() {
    if(!this.userName || !this.email) {
      console.log("userName이나 email을 확인하세요.");
      return;
    }
    console.log(`로그인 되었습니다. >> userName = ${this._userName}, email = ${this.email}`);
  }
};

const user = new UserClass();
user.login();

// setter를 통한 값의 간접 할당
user.userName = "";
user.email = "";

user.userName = "helloworld"
user.email = "hello@world.com"
user.login();




// class User {
//   constructor() {
//     this._userName = null;
//     this._userAge = null;
//   }
  
//   // 멤버변수 _userName 값을 반환하기 위한 getter 함수
//   get userName() {
//     return this._userName;
//   }
//   // 멤버변수 _userName에 값을 할당하기 위한 setter 함수
//   set userName(value) {

//     // 0, 빈문자열(""), NaN, false, null, undefinde 는 false를 반환
//     // 즉, 매개변수로 받는 값 앞에 ! 가 붙으면  false 값을 true로 변환하여 if문 실행
//     if(!value) {
//       console.log("이름을 입력하세요.");
//       return;
//     }
//     this._userName = value;
//   }

//   // 멤버변수 _userAge 값을 반환하기 위한 getter 함수
//   get userAge() {
//     return this._userAge;
//   }
//   // 멤버변수 _userAge에 값을 할당하기 위한 setter 함수
//   set userAge(value) {
//     if(!value) {
//       console.log("나이를 입력하세요.");
//       return;
//     }
//     this._userAge = value;
//   }

//   // 기능을 수행할 메서드
//   output() {
//     console.log(`당신의 이름은 ${this._userName}, 나이는 ${this._userAge}`);
//   }
// };

// // 객체 생성
// const you = new User();
// // 생성된 객체로 클래스 메소드 호출
// you.output();  // 당신의 이름은 null, 나이는 null

// // false 값을 매개변수에 대입 -> if문 실행 (!value 가 false를 true로 변환)
// you.userName = 0;  // 이름을 입력하세요.
// you.userAge = 0;  // 나이를 입력하세요.

// // true 값을 대입 -> if문 무시
// you.userName = "Andy";
// you.userAge = 3
// you.output();  // 당신의 이름은 Andy, 나이는 3
