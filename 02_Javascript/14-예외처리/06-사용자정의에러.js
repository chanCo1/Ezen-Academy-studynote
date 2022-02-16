/*
에러의 종류를 세분화 하기 위해 기본 Error클래스의 기능을 확장하여 개발자가 직접 에러에 대한 경우의 수를 정의할 수 있다.
*/

class XlessError extends Error {
  // 자식 클래스가 생성자를 갖을 경우 부모의 생성자를 반드시 강제 호출해야한다. (super)
  constructor(msg) {
    super(msg);
    super.name = "XlessError";
  }
}

class YlessError extends Error {
  constructor(msg) {
    super(msg);
    super.name = "YlessError";
  }
}

function foo(x, y) {
  if(x < 0) {
    // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
    throw new XlessError("x가 0보다 작습니다.");
  }

  if(y < 0) {
    // 함수 안에서 에러를 강제로 발생시킬 경우, 이 함수를 호출하는 위치를 에러로 인식한다.
    throw new YlessError("y가 0보다 작습니다.");
  }
  return x + y;
}

const a = null;
const b = null;

try {
  a = foo(-1, 10);  // 호출 에러이기 때문에 대입이 안된다. (대입전에 에러)
} catch (err) {
  // 이 블록으로 전달되는 err 객체는 5라인에서 생성한 Error 클래스의 객체이다.
  console.log("에러이름: %s", err.name);
  console.log("에러내용: %s", err.message);
}

try {
  b = foo(10, -1);  // 호출 에러이기 때문에 대입이 안된다. (대입전에 에러)
} catch (err) {
  // 이 블록으로 전달되는 err 객체는 5라인에서 생성한 Error 클래스의 객체이다.
  console.log("에러이름: %s", err.name);
  console.log("에러내용: %s", err.message);
}

console.log(a);
console.log(b);