// // 윤년 구하기
// function getLeapYear(year) {

//   let isLeapYear;

//   if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//     isLeapYear =  "true";
//   } else if(year % 100 == 0 || year) {
//     isLeapYear =  "false";
//   }
//   return isLeapYear;
// }

function getDate(year, month) {

  function getLeapYear(year) {

    let isLeapYear;
  
    if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
      isLeapYear =  "true";
    } else if(year % 100 == 0 || year) {
      isLeapYear =  "false";
    }
    return isLeapYear;
  }

  let date;

  if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    date = 31;
  } else if(month == 2) {
    if(getLeapYear(year)) {
      date = 29;
    } else {
      date = 28;
    };
  } else if(month == 4 || month == 6 || month == 9 || month == 11){
    date = 30;
  }
  return date;
}
console.log(getDate(1995,2));








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