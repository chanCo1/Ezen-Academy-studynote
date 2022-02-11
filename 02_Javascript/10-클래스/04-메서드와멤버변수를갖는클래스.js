
class HelloWorld {
  // 생성자 함수
  constructor() {
    // 생성자의 역할은 멤버변수를 정의
    // -> 선언만 하고 추구 할당 하기 위해 null로 초기화한다.
    this.message = null;
  }

  sayHello() {
    console.log(this.message);
  }

  setEng() {
    this.message = "Hello JS";
  }

  setKor() {
    this.message = "안녕 자바스크립트";
  }
}

const hello = new HelloWorld();

hello.setEng();
hello.sayHello();

hello.setKor();
hello.sayHello();



// class Example {

//   constructor() {
//     this.output = null;
//   }

//   method1() {
//     console.log(this.output);
//   }
//   method2() {
//     this.output = 1;
//   }
//   method3() {
//     this.output = 2;
//   }
// };

// const e = new Example();

// e.method2();
// e.method1();

// e.method3();
// e.method1();
