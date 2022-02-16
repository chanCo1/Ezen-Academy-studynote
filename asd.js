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


// const example = "Javascript, Typescript, React.js, Node.js"
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

// const a = "   trim   ";
// const msg10 = a.trim();
// console.log(msg10);

// const max = Math.max(231, 12, 99, 35, 290, 132);
// console.log(max);  // 290

// const min = Math.min(231, 12, 99, 35, 290, 132);
// console.log(min);

// const num1 = Math.round(3.7146);
// console.log(num1);

// const num2 = 5.123;
// console.log(Math.ceil(num2));

// const num3 = 5.821;
// console.log(Math.floor(num3));

// console.log(parseInt(Math.random() * 10 + 1));

// function random(min, max) {
//   return parseInt(Math.random() * (max - min +1)) + min;
// }
// console.log(random(10,15));

// function random(min, max) {
//   return parseInt(Math.random() * (max - min +1)) + min;
// };

// let num = "";
// for(let i = 0; i < 5; i++) {
//   // 문자열과 숫자의 결합은 문자열이다.
//   num += random(0,9);
// }
// console.log(num);

// const username = "Andy";

// const example1 = /^[ㄱ-ㅎ가-힣]*$/;
// if(!example1.test(username)) {
//   console.log("이름은 한글만 입력 가능합니다.");
// };

// const age = 20;

// const example2 = /^[0-9]*$/;
// if(!example2.test(age)) {
//   console.log("나이는 숫자만 입력 가능합니다.");
// }

// const userId = "콩순이77"

// const example3 = /^[a-zA-Z0-9]*$/;
// if(!example3.test(userId)) {
//   console.log("영문과 숫자만 입력 가능합니다");
// }

// const arr2 = [5, 12, 8, 131, 44];
// arr2.reverse();
// console.log(arr2);

// const arr3 = [10,20,30,40,50];

// arr3.forEach((v, i) => {
//   if(i == 3) {
//     console.log("종료");
//     return;
//   }
//   console.log("%d번째 원소 -> %d", i ,v);
// });
// console.log("----------------");

// arr3.some((v,i) => {
//   // some 함수는 콜백함수가 true를 리턴하는 순간 탐색을 중단
//   if(i == 3) {
//     console.log("종료");
//     return true;
//   }
//   console.log("%d번째 원소 -> %d", i ,v);
// });
// console.log("----------------");

// for(let i = 0; i < arr3.length; i++) {
//   if(i == 3) {
//     console.log("종료");
//     break;
//   }
//   console.log("%d번째 원소 -> %d", i, arr3[i]);
// }

// const d2 = [];
// arr3.forEach((v, i) => {
//   if(v % 4 == 0) {
//     d2.push(v);
//   }
// });
// console.log(d2);

// const ex1 = arr3.map((v,i) => {
//   return `${i}번 인덱스의 값: ${v}`;
// });
// console.log(ex1);

// const ex2 = arr3.map((v,i) => `${v}값의 인덱스 위치: ${i}`);
// console.log(ex2);

// const date = new Date();
// const tt = date.getTime();
// console.log(tt);

// // 며칠 지났는지 계산
// const day1 = new Date(date.getFullYear(), 0, 1);
// const ms = day1.getTime();




// const email = "leekh4232@gmail.com";
// const find = email.indexOf("@");
// const id = email.substring(0, find);
// const domain = email.substring(find+1);

// console.log(id);
// console.log(domain);

// const jumin = "020517-3******";

// // Date() 객체를 활용해서 현재 년도를 구한다
// const date = new Date();
// const now_year = date.getFullYear();

// // 주민번호의 각 번호를 변수에 대입
// let yy = parseInt(jumin.substring(0,2));
// let mm = parseInt(jumin.substring(2,4));
// let dd = parseInt(jumin.substring(4,6));
// let gen = parseInt(jumin.substring(7,8));

// // 2000년대 생인지 1900년대 생인지 구한다.
// yy = (gen > 2) ? yy + 2000 : yy + 1900;

// // 나이 계산
// const age = now_year - yy + 1;

// // 성별 계산
// // 나머지 값이 1이면 true 값, 0이면 false 값 리턴
// const gender = (gen % 2) ? "남자" : "여자";
// console.log(`${yy}년 ${mm}월 ${dd}일에 태어난 ${age}세 ${gender}입니다.`);


// let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다";

// // 찾을 단어를 변수에 대입
// const word = "수업시간";

// // 찾는 값의 길이 대입
// const flen = word.length;

// // 무한 반복하기 위한 변수 생성
// let find = true;

// // 카운트 초기화
// let count = 0;

// // 범위를 알 수 없어서 무한반복으로 찾는다.
// while(find) {
//   // 반복해서 찾은 단어의 인덱스를 found 변수에 대입한다.
//   found = str.indexOf(word);
//   // 찾은 값이 true면 find에 대입, false(-1)이면 반복을 멈춘다.
//   find = found > -1;

//   // find가 true면
//   if(find) {
//     count++;  // 1씩 카운트
//     // 찾은 값은 잘라내고 문자열 변수에 대입
//     str = str.substring(found + flen);
//   }
// }
// console.log(`총 ${count}번`);

// function random(n1, n2) {
//   return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// // 0개의 원소를 갖는 빈배열 생성
// const lotto = [];

// // 6회 반복 수행
// for(let i = 0; i < 6; i++) {

//   // 중복되지 않는 숫자가 몇 번째에 생설 될지 알수 없기 때문에 무한 반복 처리
//   while(true) {

//     // 랜덤 숫자 대입
//     const ran = random(1,45);

//     // lotto 배열에 ran 값이 포함되지 않아있다면
//     if(!lotto.includes(ran)) {
//       // lotto 배열에 ran 값 추가
//       lotto.push(ran);
//       break;
//     }
//   }
// }
// console.log(lotto);

// function random(n1, n2) {
//   return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
// }

// // 1~45의 배열값을 선언
// let balls = [];
// for(let i = 0; i < 45; i++) {
//   balls[i] = i + 1;
// }

// // 6개의 빈배열을 가진 변수 선언
// let lotto = new Array(6);

// // lotto 변수의 길이만큼 반복
// for(let i = 0; i < lotto.length; i++) {

//   // balls의 범위안에서 랜덤값 대입
//   const ran = random(0, balls.length-1);

//   // lotto 배열안에 balls 랜덤 값 대입
//   lotto[i] = balls[ran];

//   // 추출된 값은 삭제한다.
//   balls.splice(ran, 1);
// }
// console.log(lotto);

/*

// 달력만들기 //

// 이번달 1일의 요일 구하기
// 날짜 객체 생성
const date4 = new Date(2022, 11, 1);
// 이번달 1일로 설정
date4.setDate(1)
// 설정된 요일 구하기
const startDay = date4.getDay();
// console.log(startDay);

// 이번달의 마지막날 구하기 -> 다음달 0번째 날짜 구함
// 현재 월을 추출 (month는 0부터 시작함을 유의)
const m = date4.getMonth();
// setMonth가 2가 돼야 3월이 설정됨
date4.setMonth(m +1);
// 3월의 0번째. 즉, 2월의 마지막날
date4.setDate(0);
// 설정된 날짜 대입
const lastDate = date4.getDate();
// console.log(lastDate);


// 6행 7열의 빈 배열 만들기
const calendar = new Array(7);
for(let i = 0; i < calendar.length; i++) {
  calendar[i] = new Array(7);
};
// console.log(calendar);

// 1씩 증가할 값
let counter = 1;

// calendar 길이 만큼 행을 반복 (6번)
for(let i = 0; i < calendar.length; i++) {
  // 열을 반복 (6번)
  for(let j = 0; j < calendar[i].length; j++) {
    // i가 0이고 월의 시작 날짜보다 작거나 마지막 날짜보다 카운터가 작으면 
    if(i == 0 && j < startDay || counter > lastDate) {
      calendar[i][j] = 0;
    } else {
      calendar[i][j] = counter++;
    }
  }
}

// 출력

for(let i = 0; i < calendar.length; i++) {
  let str = "";
  for(let j = 0; j < calendar.length; j++) {
    str += calendar[i][j] == 0 ? "  \t" : (calendar[i][j] + " \t");
  }
  console.log(str);
}

*/

// // 변수 선언
// const data = [1, 2, 3];

// try {
//   for(let i = 0; i < 10; i++) {
//   	console.log(data[i].toFixed(2)); // toFixed 할 배열 수 부족, 에러발생
//   }

//   // 에러가 발생하면 에러난 코드 밑으로는 실행되지 않는다.
//   console.log("try 블록 실행완료");  // 실행 안됨

// } catch(err) {
//   console.log(err);  // 예외 정보 전체가 출력된다.
//   console.log(err.name);  // 예외 이름
//   console.log(err.message);  // 예외 메세지
//   console.log(err.description);  // 예외 설명

// } finally {  // 생략가능
//   console.log("배열 탐색 종료");
// }

// // try-catch문을 사용하면 에러가 발생하더라도 프로그램이 중단되지 않는다.
// console.log("프로그램 종료");


// class X_Small extends Error {
//   // 자식클래스가 생성자를 갖는 경우 부모의 생정자를 반드시 강제 호출해야한다. (super)
//   constructor(msg) {
//     super(msg);
//     super.name = "에러발생! x가 0보다 작은데요?"
//   }
// }
// class Y_Small extends Error {
//   constructor(msg) {
//     super(msg);
//     super.name = "에러발생! y가 0보다 작은데요?"
//   }
// }

// function example(x, y) {
//   if(x < 0) {
//     throw new X_Small("x가 0보다 작습니다.");
//   }
//   if(y < 0) {
//     throw new Y_Small("y가 0보다 작습니다.");
//   }
//   return x + y;
// }

// let a = null;
// let b = null;

// try {
//   a = example(-1, 1);

// } catch (err) {
//   console.log(err.name);  // 에러발생! x가 0보다 작은데요?
//   console.log(err.message);  // x가 0보다 작습니다.
// }

// try {
//   b = example(1, -1);

// } catch (err) {
//   console.log(err.name);  //에러발생! y가 0보다 작은데요?
//   console.log(err.message);  // y가 0보다 작습니다
// }

// console.log(a);  // null
// console.log(b);  // null



// function example(x) {
//   if(x < 0) {
//     throw new Error("x작");
//   }
//   return x;
// }

// let a = null;

// try {
//   a = example(1);
// } catch(err) {
//   console.log(err.name);
//   console.log(err.message);
// }
// console.log(a);