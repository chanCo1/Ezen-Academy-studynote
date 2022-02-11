
// require() 함수는 module.exports를 통해서 등록된 기능들을 리턴한다
// 리턴을 받는 my객체는 module.exports에 확장된 기능들을 참조한다.
// 파일 경로 명시할 때 확장자 생략 가능.
// 하지만 동일 경로라 하더라도 상대경로 ( ./ )는 생략 불가
// 상대경로가 생락되는 경우 node의 내장 모둘로 인식한다

const my = require("./MyModule1");

my();