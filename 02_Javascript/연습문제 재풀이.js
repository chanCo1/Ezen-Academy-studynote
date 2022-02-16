//# 연산자 //

// // TODO: 1.
// const year = 2022;
// const age = year - 1992 + 1;
// console.log("나는 %s세 입니다", age);


// // TODO: 2.
// const age = 31;
// var year = 2022 - (age - 1);
// console.log("나는 %s년도에 태어났습니다.", year);

//# 프로그램 흐름 제어 //

// // TODO: 1.
// const math = "B";

// if(math === "A" || math === "B" || math === "C") {
//   console.log("이 과목을 pass");
// } else {
//   console.log("no pass");
// }


// // TODO: 2.
// let leeJinSu = 1;
// let i = 1;
// while(i < 11) {
//   leeJinSu *= 2;
//   console.log(`이진수 ${i}개는 ${leeJinSu}개의 정보`);
//   i++;
// }


// // TODO: 3.
// let leeJinSu2 = 1;
// for(let i = 1; i < 11; i++) {
//   leeJinSu2 *= 2;
//   console.log(`이진수 ${i}개는 ${leeJinSu2}개의 정보`);
// }


//# 기본 문법 활용 실습 //

// // TODO: 문제 1.
// for(let i = 9; i > -1; i--) {
//   if(i % 2 == 1 ) {
//     console.log(i);
//   }
// };

// for(let i = 9; i > -1; i -= 2) { 
//   console.log(i);
// }


// // TODO: 문제 2.
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


// // TODO: 문제 3.
// let sum = 0;
// for(let i = 0; i < 20; i++) {
//   if(i % 2 == 0 || i % 3 == 0) {
//     sum += i;
//   };
// }
// console.log(sum);


// // TODO: 문제 4.
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


// // FIXME: 문제 5.
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


// // TODO: 문제 6.
// for(let i = 0; i < 7; i++) {
//   let num = "";
//   for(let j = 0; j < i +1; j++) {
//     num += j +1;
//   }
//   console.log(num);
// }



// // FIXME: 7.
// const number = 2;

// let num = number == 1 ? 3 : 2;
// for(let i = num; i < 10; i +=2) {
//   for(let j = 1; j < 10; j++) {
//     console.log(`${i} X ${j} = ${i*j}`);
//   }
// }


// // TODO: 8.
// // 1
// for(let i = 0; i < 7; i++) {
//   str = "";
//   for(let j = 0; j < i + 1; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// // 2
// for(let i = 0; i < 7; i++) {
//   str = "";
//   for(let j = 0; j < 6 - i; j++) {
//     str += " ";
//   }
//   for(let k = 0; k < i + 1; k++) {
//     str += "*";
//   }
//   console.log(str);
// }


// // TODO: 8-1
// // 1
// for(let i = 0; i < 7; i++) {
//   let str = "";
//   for(let j = 0; j < 7 - i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }

// // 2
// for(let i = 0; i < 7; i++) {
//   let str = "";
//   for(let j = 0; j < i; j++) {
//     str += " ";
//   }
//   for(let k = 0; k < 7 - i; k++) {
//     str += "*";
//   }
//   console.log(str);
// }


// // TODO: 8-2
// for(let i = 0; i < 7; i++) {
//   let str = "";
//   for(let j = 0; j < 6 - i; j++) {
//     str += " ";
//   }
//   for(let k = 0; k < i * 2 + 1; k++) {
//     str += "*";
//   }
//   console.log(str);
// }


// // TODO: 8-3
// for(let i = 0; i < 7; i++) {
//   let star = "";
//   for(let j = 0; j < 6 - i; j++) {
//     star += " ";
//   }
//   for(let k = 0; k < i * 2 + 1; k++) {
//     star += "*";
//   }
//   // str += "\n";
//   console.log(star);
// }
// for(let i = 0; i < 6; i++) {
//   let star = "";
//   for(let j = 0; j < i + 1; j++) {
//     star += " ";
//   }
//   for(let k = 0; k < 10 - (i * 2) + 1; k++) {
//     star += "*";
//   }
//   console.log(star);
// }


// let star = "";
// for(let i = 0; i < 7; i++) {
//   for(let j = 0; j < 6 - i; j++) {
//     star += " ";
//   }
//   for(let k = 0; k < i * 2 + 1; k++) {
//     star += "*";
//   }
//   star += "\n";
// }
// for(let i = 0; i < 6; i++) {
//   for(let j = 0; j < i + 1; j++) {
//     star += " ";
//   }
//   for(let k = 0; k < 10 - (i * 2) + 1; k++) {
//     star += "*";
//   }
//   star += "\n"
// }
// console.log(star);



