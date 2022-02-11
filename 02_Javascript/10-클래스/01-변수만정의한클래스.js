
// 멤버변수만 정의한 클래스
// 생성자 함수 안에서 this 키워드를 통해 객체 안에 탑제될 변수들을 초기화 한다.

class MemberClass {
  // 생성자 함수
  // 생성자의 이름은 고정. 이름 앞에 예약어 없음. 필요시 파라미터 정의는 가능. 리턴은 불가능.
  constructor() {
    this.userName = null;
    this.email = null;
  }
};

// 클래스를 활용한 객체 생성
const m1 = new MemberClass();
console.log(m1);
console.log(m1.userName);
console.log(m1.email);

const m2 = new MemberClass();
console.log(m2);
console.log(m2.userName);
console.log(m2.email);

// 객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적이다.
m1.userName = "민혁";
m1.email = "mh@mail.com"

m2.userName = "철수";
m2.email = "cs@mail.com"

console.log(m1);
console.log(m1.userName);
console.log(m1.email);

console.log(m2);
console.log(m2.userName);
console.log(m2.email);





// class Example {
//   // 생성자 함수
//   constructor() {
//     this.x = null;
//   }
// };

// // 클래스의 객체 생성
// const ex1 = new Example();
// console.log(ex1);  // Example { x: null }
// console.log(ex1.x);  // null

// const ex2 = new Example();
// console.log(ex2);  // Example { x: null }
// console.log(ex2.x);  // null

// // 객체의 특성 -> 같은 구조를 갖지만 저장되는 내용은 개별적이다.
// ex1.x = "값 넣었다."
// console.log(ex1);  // Example { x: '값 넣었다.' }
// console.log(ex1.x);  // 값 넣었다

// ex2.x = "다른 값 넣었다."
// console.log(ex2);  // Example { x: '다른 값 넣었다.' }
// console.log(ex2.x);  // 다른 값 넣었다.