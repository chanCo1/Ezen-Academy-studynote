
// 기본 문법 활용 실습

// TODO: 문제 1.
// for(let i = 9; i > -1; i--) {
//   if(i % 2 == 1 ) {
//     console.log(i);
//   }
// };

// for(let i = 9; i > -1; i -= 2) { 
//   console.log(i);
// }


// TODO: 문제 2.
// let i = 9;
// while(i > -1) {
//   if(i % 2 == 1) {
//     console.log(i);
//   };
//   i--;
// };

// let i = 9;
// while(i > -1) {
//   console.log(i);
//   i -= 2;
// };


// TODO: 문제 3.
// let sum = 0;
// for(let i = 0; i < 20; i++) {
//   if(i % 2 == 0 || i % 3 == 0) {
//     sum += i;
//   };
// }
// console.log(sum);


// TODO: 문제 4.
// let count = 0;

// for(let i = 0; i < 6; i++) {
//   for(let j = 0; j < 6; j++) {
//     if(i + j == 6) {
//       console.log([i, j]);
//       count++;
//     }
//   }
// }
// console.log(`경우의 수는 ${count}개 입니다.`);


// FIXME: 문제 5.
// for(let i = 0; i < 4; i++) {
//   let str = "";
//   for(let j = 0; j < 4; j++) {
//     str += i + j;
//     if(j + 1 < 4) {
//       str += " ";
//     }
//   }
//   console.log(str);
// }


// TODO: 문제 6.
// for(let i = 0; i < 7; i++) {
//   let num = "";
//   for(let j = 0; j < i +1; j++) {
//     num += j +1;
//   }
//   console.log(num);
// }


// TODO: 문제 7.

// const number = 1

// for(let i = 1; i < 10; i++) {
//   for(let j = 1; j < 10; j++) {
//     if(number == 1 && i % 2 == 1) {
//       console.log(`${i} X ${j} = ${i*j}`);
//     }
//   }
// }


const number = 1;

let num = number === 1 ? 3 : 2;
for(let i = num; i < 10; i +=2) {
  for(let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i*j}`);
  }
}






