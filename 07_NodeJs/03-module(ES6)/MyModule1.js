// 사용자 정의 함수를 작성
function helloWorld() {
  console.log("Hello World");
}

// 하나의 모듈에서 단 하나의 기능만을 내보낼 때
export default helloWorld;

// // 이렇게도 정의 가능
// module.exports = function() {
//   console.log("World Hello");
// };