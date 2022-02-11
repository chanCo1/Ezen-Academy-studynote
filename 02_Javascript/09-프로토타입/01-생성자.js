
// 멤버변수를 갖는 생성자를 통해서 객체 만들기

function User() {
  // 멤버변수 정의하기
  // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
  this._id = null;
  this._email = null; // 받을 값을 모르니까 일단 null로 한다 
}

// 생성자를 통한 객체 만들기
const foo = new User();
foo._id = "hello";
foo._email = "hello@javascript.com";
console.log(foo);

const bar = new User();
bar._id = "world";
bar._email = "bar@javascript.com";
console.log(bar);

function example() {

  // 멤버변수 정의하기
  // 일반적으로 멤버변수는 일반 변수와 구분하기 위해 언더바로 시작하는 이름을 갖는다.
  this._sample1 = null;
  this._sample2 = null;
};

// 생성자를 통한 객체 만들기
const a = new example();
a._sample1 = "Hi";
a._sample2 = "Bye";
console.log(a)

const b = new example();
b._sample1 = "Hello";
b._sample2 = "World";
console.log(b);

// 프로토타입은 옛날 스타일, 클래스는 최신 스타일

// A.B() = . 왼쪽이 객체이다
// ex) console(객체).log(메서드)();

// 아무 함수에다가 new 붙이면 생성자함수가 된다 (줏대없음)
// new는 함수를 만든 목적에 따라 붙이든 말든 한다
// 생성자 함수는 첫글자를 대문자로 하기로 했다

// JSON과 프로토타입의 객체는 용도가 다르다.
// JSON은 하나만들고 안쓸경우
// 생성자함수는 덧글목록같은 느낌 ? 달라야한다
// 스타 유닛을 생각하면 이해가 빠르다


// 동사적인거는 함수로 표현

// 멤버 변수를 모든 메소드가 공유한다?

// 직접 대입은 무조건 참조

// 프로토타입은 잘 안쓰인다. 그런건가보구나~ 개념만 알기 class가 많이 쓰임