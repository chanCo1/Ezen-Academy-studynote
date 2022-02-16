/*
1. Syntax Error : 문법에러. 코딩상의 실수이므로 수정하지 않으면 프로그램이 동작하지 않음 (Syntax Error는 단순 오타)
2. Runtime Error : 프로그램 작성 과정에서 논리상의 오류로 미쳐 대응하지 못한 상황이 발생하는 경우. -> 처리하지 않을 경우 프로그램이 중단된다.
*/

// 기본적인 에러 핸들링 //
const data = [1,2,3];
console.log("배열 탐색 시작");

/*
먼저 try{} 안의 코드가 실행된다.
에러가 없다면 try 안의 마지막 줄까지 실행되고, catch 블록은 건너뛴다.
에러가 있다면 try 안의 코드가 실행되다가 중단되고, catch(err) 블록으로 코드 흐름이 넘어간다 (try-catch는 한쌍)
변수 err(아무 이름이나 사용가능)는 무슨 일이 일어났는지에 대한 설명이 담긴 에러 객체를 포함한다
*/

try {
  for(let i = 0; i < 10; i++) {
    console.log(data[i].toFixed(2));  // toFixed() 괄호안의 숫자까지 소수점으로 나타낸다(문자열로)
  }

  // 에러가 나면 에러난 코드 부분 밑에 코드는 실행되지 않는다.
  console.log("try 블록 실행 완료");
  // catch 안에 파라미터는 아무 이름이나 넣어도 된다.
} catch(errr) {

  // console.error("에러발생(1)");
  // console.error("에러 이름 : " + errr.name);
  // console.error("에러 메세지 : " + errr.message);

  console.group("%s 에러발생", errr.name);
  console.error(errr.message);
  console.groupEnd();

  // 에러정보 전체 출력 -> 흔히 에러 났을 때 출력되는 것과 같다
  // console.error(errr);
} finally {
  // 에러의 발생 여부에 상관 없이 무조건 맨 마지막에 실행되는 블록.
  // 필요하지 않은 경우 생략 가능
  console.log("배열 탐색이 종료되었습니다.");
}

// try-catch로 발생할 에러에 대비하면 애러가 발생하더라도 프로그램이 중단되지 않는다.
console.log("프로그램 종료");
