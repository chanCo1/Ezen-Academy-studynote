// 사용자 정의 함수를 작성
function helloWorld() {
  console.log("Hello World");
}

// 작성된 함수를 모듈로 등록
module.exports = helloWorld;

// // 이렇게도 정의 가능
// module.exports = function() {
//   console.log("World Hello");
// };