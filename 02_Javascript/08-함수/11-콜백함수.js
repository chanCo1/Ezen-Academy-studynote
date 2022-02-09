// 콜백함수를 파라미터로 요구하는 함수 정의하기
function something(x, y, cb) {
  // x와 y의 연산 결과를 파라미터로 전달받은 callback에게 다시 전달하여 리턴값을 받아 처리함
  const result = cb(x,y);
  // console.group(cb);
    console.log(`${x}과 ${y}의 연산결과는 ${result}`);
  // console.groupEnd();
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
// something(5, 7, (a, b) => {
//   for(let i = a; i < b; i++) {
//     console.log("7 X " + i + " = " + (i*7));
//   }
// })

// something(5, 7, (a, b) => {
//   if(a == 5) {
//     if(b == 7) {
//       console.log("true!!!");
//     } else {
//       console.log("NO");
//     }
//   } else {
//     console.log("X");
//   }
// });

// 함수 로직이 한 줄인 경우 축약된 형태
// something(5, 7, (a, b) => {
//   console.log(a + b);
// });

// something(3, 7, (a, b) => console.log(a + b));

// A -> 파라미터를 받아서 연산 결과를 출력하는 함수를 제작해서 B에게 전달
function sample(x, y, cb) {
  const result = cb(x, y);
  console.log("결과값은: " + result);
}

// B -> A로 부터 전달 받은 함수를 사용하여 파라미터를 전달하고 그에 따른 결과 (+)가 출력되도록 구현
sample(10, 20, function(x, y) {
  return (x * x) + y + 1;
})

// C -> A로 부터 전달 받은 함수를 사용하여 파라미터를 전달하고 그에 따른 결과 (-)가 출력되도록 구현
sample(50, 20, (x, y) => {
  return (x * 2) + (y * 2);
})

// D -> A로 부터 전달 받은 함수를 사용하여 파라미터를 전달하고 그에 따른 결과 (*)가 출력되도록 구현
sample(4, 2, (x, y) => (x + y) * x);

// E -> A로 부터 전달 받은 함수를 사용하여 파라미터를 전달하고 그에 따른 결과 (/)가 출력되도록 구현
sample(10, 2, (x, y) => x / y);