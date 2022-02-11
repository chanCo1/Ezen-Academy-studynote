// 객체를 모듈화 하기 -> 가장 일반적인 방법

class HelloWorld {
  constructor() {
    console.log("---- HelloWorld 객체가 생성되었습니다. ----");

  }

  say() {
    console.log("Hello World");
  }
}

// 모듈에다가 객체생성까지 한번에 처리
module.exports = new HelloWorld();