/* 
Math
수학적인 속성과 메서드를 가진 내장 객체
모든 기능이 정적 멤버변수와 정적 메서드 형태로 제공된다.
즉, 객체 생성을 하지 않고 클래스 이름으로 직접 접근한다.
*/

// 주어진 값 중에서 최대값 (파라미터 수 제한 없음)
const max = Math.max(100,123,456,789,1000);
console.log(max);  // 1000

// 주어진 값 중에서 최소값 (파라미터 수 제한 없음)
const min = Math.min(100,123, 493, 233);
console.log(min);  // 100

// 소수점 반옮림
const num1 = 3.7146;
console.log(Math.round(num1));  // 4

// 소수점 올림
console.log(Math.ceil(num1));  // 4
// 소수점 내림
console.log(Math.floor(num1));  // 3

// 절대값을 반환
const num2 = -123;
console.log(Math.abs(num2));  // 123

// 0~1 난수
console.log(Math.random()); // 1~10은 *10

// 두 수 사이의 난수
function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1
}
// console.log(random(50, 60));

// 함수 응용 >> 5자리 인증번호 생성
let auth = "";
for(let i = 0; i < 5; i++) {
  // 문자열과 숫자의 결합은 문자열 결합과 같다.
  auth += random(0, 9);
}
console.log("인증번호: " + auth);
console.log(typeof(auth));