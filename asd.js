// // // 윤년 구하기
// function getLeapYear(year) {

//   let isLeapYear;

//   if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     isLeapYear =  "true";
//   } else if(year % 100 == 0 || year) {
//     isLeapYear =  "false";
//   }
//   return isLeapYear;
// }

// function getDate(year, month) {

//   // function getLeapYear(year) {

//   //   let isLeapYear;
  
//   //   if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//   //     isLeapYear =  "true";
//   //   } else if(year % 100 == 0 || year) {
//   //     isLeapYear =  "false";
//   //   }
//   //   return isLeapYear;
//   // }

//   let date;

//   if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
//     date = 31;
//   } else if(month == 2) {
//     if(getLeapYear(year)) {
//       date = 29;
//     } else {
//       date = 28;
//     };
//   } else if(month == 4 || month == 6 || month == 9 || month == 11){
//     date = 30;
//   }
//   return date;
// }
// console.log(getDate(1992,2));








/*
// 주사위 게임

// 주사위 값을 생성하는 함수
function dice(maxNumber) {
  return Math.floor(Math.random()*maxNumber) + 1;
}

// 주사위 값을 출력하는 함수
function printDice(name, num) {
  console.log(`${name}의 주사위는 ${num}입니다.`);
}

// 승자를 출력하는 함수
function printWinner(name) {
  console.log(`${name}의 승리`);
}

// 비겼음을 출력하는 함수
function printDraw() {
  console.log("비겼습니다.");
}

// 게임 메인 함수
function diceGame() {
  let computerName = "컴퓨터";
  let yourName = "당신";

  let computerDice = dice(6); // 컴퓨터의 주사위 값
  printDice(computerName, computerDice); // 컴퓨터의 주사위 값 출력

  let yourDice = dice(6); // 사용자의 주사위 값
  printDice(yourName, yourDice); // 사용자의 주사위 값 출력

  // 조건문
  if(computerDice > yourDice) {
    printWinner(computerName);
  }else if(computerDice < yourDice) {
    printWinner(yourName);
  }else {
    printDraw();
  }
}
// 호출
diceGame();
*/

// 2 ~ 14 까지 시험 , 9단원 빠짐, 13,14도 빠짐


// // Fizz Buzz

// for(let i = 1; i < 101; i++) {
//   if(i % (3 * 5) === 0 ) {
//     console.log("FizzBuzz");
//   } else if(i % 3 === 0) {
//     console.log("Fizz");
//   } else if(i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// let i = 1;
// while(i < 101) {
//   if(i % 3 == 0) {
//     console.log("Fizz");
//   } else if(i % 5 == 0) {
//     console.log("Buzz");
//   } else if(i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else {
//     console.log(i);
//   }
//   i++
// }

// for(let i = 0; i < 5; i++) {
//   let star = "";
//   for(let j = 0; j < 5 - i; j++) {
//     star += "*";
//   }
//   console.log(star);
// }


// for(let i = 0; i < 5; i++) {
//   let star = "";
//   for(let j = 0; j < i; j++) {
//     star += " ";
//   }
//   for(let k = 0; k < 5 - i; k++) {
//     star += "*";
//   }
//   console.log(star);
// }

// for(let i = 0; i < 5; i++) {
//   let star = "";
//   for(let j = 0; j < 10; j++) {
//     if(j < 5 - i || j - 5 >= i) {
//       star += "*";
//     } else {
//       star += " ";
//     }
//   }
//   console.log(star);
// }


// const studentNames = ["이수현", "김수민", "아무개3", "아무개4", "아무개5", "아무개6", "아무개7", "아무개8", "아무개9", "아무개10"];

// function a(name) {
//   for(let i = name.length - 1; i >= 0 ; i--) {
//     console.log(`Hi, ${name[i]}!!`);
//   }
// }
// a(studentNames);

// let fruitArray = ["banana", "orange", "apple"];
// fruitArray.splice(fruitArray.indexOf("banana"),1);
// console.log(fruitArray);


// const RSP = ["가위","바위","보","묵","찌","빠","보자기","주먹","가우ㅣ"];
// let a = RSP[Math.floor(Math.random() * RSP.length)];
// console.log(a);


const example = "Javascript, Typescript, React.js, Node.js"
// console.log(msg);

// const msg1 = example.length;
// console.log(msg1);

// const msg2 = example.charAt(5);
// console.log(msg2);  // c

// console.log(example[12]);  // T

// const msg3 = example.indexOf("i");
// console.log(msg3);

// const msg3_1 = example.indexOf("z");
// console.log(msg3_1);

// const msg3_2 = example.indexOf("React");
// console.log(msg3_2);  // 24

// if(example.indexOf("Hello") > -1) {  // 없으므로 -1을 반환 -> false
//   console.log("Hello가 포함됨");
// } else {
//   console.log("Hello가 포함되지 않음.");
// }

// const msg4 = example.lastIndexOf("s");
// console.log(msg4);

// const msg5 = example.substring(0,10);
// console.log(msg5);

// const msg5_1 = example.substring(12,22);
// console.log(msg5_1);

// const msg5_2 = example.substring(24, 32);
// console.log(msg5_2);

// const msg5_3 = example.substring(34);
// console.log(msg5_3);  // Node.js

// const msg6 = example.toUpperCase();
// console.log(msg6);

// const msg7 = example.toLowerCase();
// console.log(msg7);

// const msg8 = example.split(",");
// console.log(msg8);

// const msg8_1 = example.split("");
// console.log(msg8_1);

// const msg9 = example.replace(",", "@");
// console.log(msg9);

const a = "   trim   ";
const msg10 = a.trim();
console.log(msg10);
