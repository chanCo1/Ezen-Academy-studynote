"use strict"; // 엄격모드 적용 --> ES6 호환기능만 사용하도록 명시

// 원래는 html 안에 기생했는데
// node 의 등장으로 C, C++ 처럼 독립적으로 사용 가능해 졌다.

// 메세지 그룹핑
console.group("MyMessage1"); // 그룹 시작
  console.log("hi js1"); // 출력문
  console.log("hi js2");
  console.log("hi js3");
console.groupEnd(); // 그룹 끝

console.group("group");
  console.group("group2");
    console.log("1");
    console.log("2");
    console.log("3");
  console.groupEnd();
  console.group("group3");
    console.log("4");
    console.log("5");
    console.log("6");
  console.groupEnd();
console.groupEnd();

// 자스는 명령어를 통해 다이렉트로 실행
// 자바는 class라는 이름으로 변경 후 실행

// 프로그램 소스코드가 실행되는 과정



// 2 ~ 10 까지 시험 , 9단원 빠짐, 13,14도 빠짐, 12단원의 도움 필요