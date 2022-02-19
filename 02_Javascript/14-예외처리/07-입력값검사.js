const RegexHelper = require("./RegexHelper");

// 회원가입시 입력받은 값을 가정한 변수
// 사용자가 입력한 모든 내용은 문자열 변수이다.

const uername = "자바스크립트123";
const age = "20";
const uerid = "js123";

// 입력값 검사를 수행하기 위한 객체
const regex = new RegexHelper();

// 입력값의 형식 검사 수행

try {
  regex.kor(uername, "이름은 한글로만 입력하세요.");
  regex.maxLen(uername, 20, "이름은 최대 20글자까지만 가능합니다.");
  regex.num(age, "나이는 숫자로만 입력하세요");
  regex.engNum(uerid, "아이디는 영여와 숫자의 조합만 가능합니다.");
  regex.maxLen(uerid, 20, "아이디는 최대 20글자까지만 가능합니다.");
  
} catch(err) {
  console.group("%s 에러 발생", err.name);
  console.error("에러코드: %d", err.statusCode);
  console.error("에러내용: %s", err.message);
  console.groupEnd();
}

console.log("검사 완료");