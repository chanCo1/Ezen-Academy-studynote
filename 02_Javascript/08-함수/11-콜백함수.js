// 콜백함수를 파라미터로 요구하는 함수 정의하기
function something(x, y, cb) {
  // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
  const result = cb(x,y);
  console.group(cb);
    console.log(`${x}와 ${y}의 연산결과는 ${result}`);
  console.groupEnd();
}

// // 콜백함수 유형 1 - 직접 함수를 정의함
// function plus(a,b) {
//   return a + b;
// }
// function minus(a,b) {
//   return a - b;
// }

// something(100, 50, plus);
// something(100, 50, minus);

// // 콜백함수 유형 2 - 콜백함수를 익명함수 형태로 전달하기
// something(200, 100, function(a, b) {
//   return a * b;
// });

// something(200, 100, function(a, b) {
//   return a / b;
// });

// 콜백함수 유형 3 - 익명함수를 화살표 함수로 사용
something(5, 7, (a, b) => {
  for(let i = a; i < b; i++) {
    console.log("7 X " + i + " = " + (i*7));
  }
})

// // 함수 로직이 한 줄인 경우 축약된 형태
// something(5, 7, (a, b) => {
//   console.log(a + b);
// });

// something(5, 7, (a, b) => console.log(a + b));