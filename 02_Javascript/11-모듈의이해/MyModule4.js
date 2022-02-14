// 객체를 모듈화 하기 -> 가장 일반적인 방법

class HelloWorld {
  constructor(p) {
  //   // console.log("---- HelloWorld 객체가 생성되었습니다. ----");
    this._p = p;
  }

  get p() {
    return this._p;
  }
  set p(p) {
    this._p = p;
  }
  say(say) {
    console.log(this.p);
  }
}

// 모듈에다가 객체생성까지 한번에 처리
module.exports = new HelloWorld("ㅋㅋㅋㅋ");

// const pp = new HelloWorld();
// pp.say("dd")