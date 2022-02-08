// 함수를 정의하고 호출하기

// 함수정의
function sayHello() {
  // 두개의 출력 명령을 내장함
  console.log("Hello Javascript.");
  console.log("안녕 자바스크립트.");
}

// 함수 호출하기
sayHello();

// 정의된 함수는 여러번 재사용이 가능함
for(let i = 0; i < 5; i++) {
  sayHello();
}

// 함수 만들 때 최대한 많은 경우의 수를 커버쳐줘야한다..
