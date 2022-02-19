// ## 연산자 실습 //

// // TODO: 1.
// const year = 2022;
// const age = year - 1992 + 1;
// console.log("나는 %s세 입니다", age);


// // TODO: 2.
// const age = 31;
// var year = 2022 - (age - 1);
// console.log("나는 %s년도에 태어났습니다.", year);


// // TODO: 3.
// const numOfApples = 96;

// const lastDecimalPoint = (numOfApples * 100) / 1000;
// const demical = Math.floor(lastDecimalPoint);

// const result = lastDecimalPoint > demical ? demical + 1 : demical;
// console.log(result); 


// // const extra = (numOfApples % 10) / 10;

// // let basketCount = (numOfApples / 10) - extra;
// // basketCount += extra > 0 ? 1 : 0;
// // console.log(basketCount);


// // TODO: 4.
// const input = 457;
// const result = input / 100;
// console.log(Math.floor(result) * 100);


// ## 프로그램 흐름 제어 실습 //

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


// ## 기본 문법 활용 실습 //

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


// // FIXME: 문제 5.  // 바깥 for는 행, 안쪽 for는 열/ 중간에 공백 넣는 방법 숙지 할 것.
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



// // FIXME: 7.  // 삼항연산자와 증감식에 대해 숙지 할 것.
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


// // TODO: 8-1.
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


// // TODO: 8-2.
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


// // TODO: 8-3.
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


// ## 배열 실습 //

// // TODO: 1.
// const before = [true, false, false, true, false];
// console.log("before -> " + before);

// for(let i = 0; i < before.length; i++) {
//   before[i] = !before[i];
// }

// const after = before;
// console.log("after -> " + after);


// // TODO: 2.
// const score = [75,82,91];

// let total = 0;

// for(let i = 0; i < score.length; i++) {
//   total += score[i];
// }

// let avg = (total / score.length).toFixed(2);

// console.log(`총점: ${total}, 평균점수: ${avg}`);


// // TODO: 3.
// const day = [7, 5, 5, 5, 5, 10, 7];

// let total = 0;

// for(let i = 0; i < day.length; i++) {
//   if(i < 4) {
//     day[i] *= 4500;
//   } else {
//     day[i] *= 5200;
//   }
  
//   total += day[i]
// }
// console.log(total);


// // TODO: 4.
// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];

// let total = 0;

// for(let i = 0; i < price.length; i++) {
//   total += price[i] * qty[i];
// };

// console.log(total);


// // FIXME: 5.  // 최대값 구하는 방법 숙지 할 것.
// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];

// let totalPrice = price[0] * qty[0];

// for(let i = 0; i < price.length; i++) {
//   let sum = price[i] * qty[i];
  
//   if(totalPrice < sum) {
//     totalPrice = sum;
//   }
// };
// console.log(totalPrice);



// // TODO: 6.
// const price = [38000, 20000, 17900, 17900];
// const qty = [6, 4, 3, 5];

// let count = 0;

// for(let i = 0; i < price.length; i++) {
//   let totalPrice = price[i] * qty[i];
  
//   if(totalPrice >= 80000) {
//     count++;
//   }
// };
// console.log(count);


// // FIXME: 7.  // 숫자를 sort()로 정렬하는 방법 숙지 할것.
// const price = [209000, 109000, 119000, 109000, 94000];
// console.log("상품가격 -> " + price);

// price.sort((a, b) => {  
//   console.log(a,b);

//   if(a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(price);


// // TODO: 8.
// const arr = [5, 3, 2, 8, 9];
// console.log("before -> " + arr);
// arr.reverse();
// console.log("after -> " + arr);


// // FIXME: 9.  // 모든 총합은 반복문 밖에서 선언, 개별 총합은 반복문 안에서 선언
// const student = ["둘리", "도우너", "또치", "희동"];
// const score = [
//   [78, 89, 96],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// let avg = 0;

// for(let i = 0; i < score.length; i++) {
//   let sum = 0;
//   for(let j = 0; j < score[i].length; j++) {
//     sum += score[i][j]
//   }

//   avg = (sum / score[i].length).toFixed(2)
//   console.log(`${student[i]}, ${sum}, ${avg}`);
// };


// // FIXME: 10.
// const student = ["둘리", "도우너", "또치", "희동"];
// const score = [
//   [78, 89, 96],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// let avg = 0;
// let totalAvg = 0;

// for(let i = 0; i < score.length; i++) {
//   let sum = 0;
//   for(let j = 0; j < score[i].length; j++) {
//     sum += score[i][j]
//   }

//   avg = (sum / score[i].length).toFixed(2)
//   console.log(`${student[i]}, ${sum}, ${avg}`);

//   totalAvg += avg / student.length;
// };
// console.log(totalAvg);


// // TODO: 11.
// const item = [
//   [500, 291],
//   [320, 586],
//   [100, 460],
//   [120, 558],
//   [92, 18],
//   [30, 72]
// ];

// let totalSum = 0;

// for(let i = 0; i < item.length; i++) {
//   let sum = 1;
//   for(let j = 0; j < item[i].length; j++) {
//     sum *= item[i][j];
//   }

//   totalSum += (sum * 0.9);
// }
// console.log(totalSum);


// // TODO: 12.
// const jumin = [9,2,0,1,2,4,1,0,8,2,1,1,2];

// const checkJumin = [2,3,4,5,6,7,8,9,2,3,4,5];

// let check = 0;

// for(let i = 0; i < jumin.length - 1; i++) {
//   check += jumin[i] * checkJumin[i];
// }

// let result = (11 - (check % 11)) % 10;

// if(result == jumin[jumin.length - 1]) {
//   console.log("유효");
// } else {
//   console.log("가짜");
// }


// ## JSON 실습 //

// // FIXME: 1.
// const bloodType = ['A', 'A', 'A', 'O', 'B', 'B', 'O', 'AB', 'AB', 'O'];

// const result = {
//   "A": 0,
//   "B": 0,
//   "AB": 0,
//   "O": 0
// };

// for(const i of bloodType) {
//   result[i]++;
// }

// console.log(result);


// FIXME: 2.
// const exam = { 
//   "철수": [89, 82, 79, 91], 
//   "민영": [91, 95, 94, 89], 
//   "남철": [65, 57, 71, 64], 
//   "혜진": [82, 76, 81, 83] 
// }


// for(const i in exam) {
//   let sum = 0;
//   for(const j of exam[i]) {
//     sum += j 
//   }

//   let avg = sum / exam[i].length;
//   console.log(`${i}, ${sum}, ${avg}`);
// }


// // TODO: 3.
// const exam = { 
//   "철수": [89, 82, 79, 91], 
//   "민영": [91, 95, 94, 89], 
//   "남철": [65, 57, 71, 64], 
//   "혜진": [82, 76, 81, 83] 
// }

// let mathSum = 0;
// let avg = 0;

// for(const i in exam) {
//   mathSum += exam[i][2];

//   avg = mathSum / exam[i].length;
// }
// console.log(mathSum,avg);


// // TODO: 4.
// covid19 = [ 
//   {date: '0125', active: 426},
//   {date: '0126', active: 343}, 
//   {date: '0127', active: 547}, 
//   {date: '0128', active: 490}, 
//   {date: '0129', active: 460}, 
//   {date: '0130', active: 443}, 
//   {date: '0131', active: 338}, 
//   {date: '0201', active: 299} 
// ]

// let sum = 0;
// // let avg = 0;

// for(const i of covid19) {
//   sum += i.active;
// }
// let avg = sum / covid19.length;

// console.log(sum, avg);


// // FIXME: 5.
// covid19 = [ 
//   {date: '0125', active: 426},
//   {date: '0126', active: 343}, 
//   {date: '0127', active: 547}, 
//   {date: '0128', active: 490}, 
//   {date: '0129', active: 460}, 
//   {date: '0130', active: 443}, 
//   {date: '0131', active: 338}, 
//   {date: '0201', active: 299} 
// ]

// let maxDate = covid19[0].date;
// let maxActive = covid19[0].active;

// for(const i of covid19) {
//   if(maxActive < i.active) {
//     maxActive = i.active;
//     maxDate = i.date
//   }
// }
// console.log(maxDate);


// ## 함수 실습 //

// // TODO: 1.
// function star(num) {
//   for(let i = 0; i < num; i++) {
//     let str = "";
//     for(let j = 0; j < i + 1; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// star(5);


// // TODO: 2.
// function star(num) {
//   for(let i = 0; i < num; i++) {
//     let str = "";
//     for(let j = 0; j < num - i; j++) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// star(5);


// // FIXME: 3.  // 손도 못댔음.
// function myGame(n) {
//   let count = 0;
//   for(let i = 1; i <= n; i++) {

//     const str = i + "";

//     let say = "";
//     let clap = 0;

//     for(let j of str) {
//       if(j == "3" || j == "6" || j =="9") {
//         say += "짝"
//         clap++;
//       }
//     }
//     if(clap == 0) {
//       console.log(i);
//     } else {
//       console.log(say, i, clap);
//       count += clap
//     }
//   }
//   console.log(count);
// }
// myGame(35)


// // FIXME: 4.  // 재귀함수의 작동원리를 숙지할 것.
// function printStar(max, current=1) {
//   if(current > max) {
//     return;

//   } else {
//     let star = "";
//     for(let i = 0; i < current; i++) {
//       star += "*";
//     }
//     console.log(star);
//     printStar(max,current+1);
//   }
// }
// printStar(5)


// // FIXME: 5.  // 위와 동일
// function PrintRevStar(max, current=1) {
//   if(max < current) {
//     return;
//   } else {
//     let star = "";
//     for(let i = 0; i < max - current+1; i++) {
//       star += "*";
//     }
//     console.log(star);
//     PrintRevStar(max, current+1)
//   }
// }
// PrintRevStar(5)


// ## 클래스 실습 //

// // TODO: 1.
// class Student {
//   constructor(department, studentNum) {
//     this._department = department;
//     this._studentNum = studentNum;
//   }

//   get department() {
//     return this._department;
//   }
//   set department(value) {
//     this._department = value;
//   }
//   get studentNum() {
//     return this._studentNum;
//   }
//   set studentNum(value) {
//     this._studentNum = value;
//   }

//   sayHello() {
//     console.log("나는 %s학과 %d학번 입니다.",this._department, this._studentNum);
//   }
// }

// const me = new Student("실용음악", 12);
// // me.department = "실용음악"
// // me.studentNum = 12;
// me.sayHello();


// // TODO: 2.  // 2차원 배열로 푸는 방법 연습할 것.
// class Student {
//   constructor(kor, eng, math) {
//     this._kor = kor;
//     this._eng = eng;
//     this._math = math;
//   }

//   sum() {
//     return this._kor + this._eng + this._math;
//   }
//   avg() {
//     return this.sum() / 3;
//   }
// }

// const score = [
//   ["철수", 92, 81, 82],
//   ["영희", 72, 95, 100],
//   ["민혁", 80, 86, 89],
// ];

// for(const i of score) {
//   const std = new Student(i[1], i[2], i[3]);
//   console.log(`${i[0]}, ${std.sum()}, ${std.avg()}`);
// }

// // const student1 = new Student(92, 81, 82);
// // const student2 = new Student(72, 95, 100);
// // const student3 = new Student(80, 86, 89);

// // console.log(`철수의 총점은 ${student1.sum()}이고, 평균은 ${student1.avg()}`);
// // console.log(`영희의 총점은 ${student2.sum()}이고, 평균은 ${student2.avg()}`);
// // console.log(`민혁의 총점은 ${student3.sum()}이고, 평균은 ${student3.avg()}`);


// // TODO: 3.
// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   get width() {
//     return this._width;
//   }
//   set width(value) {
//     this._width = value
//   }
//   get height() {
//     return this._height;
//   }
//   set height(value) {
//     this._height = value;
//   }

//   getAround() {
//     return (this._width + this._height) * 2;
//   }
//   getArea() {
//     return this._width * this._height;
//   }
//   output() {
//     console.log(`${this.getAround()}, ${this.getArea()}`);
//   }
// }

// const rect = new Rectangle(10,5);
// rect.output();


// // TODO: 4.
// class Account {
//   constructor(owner, balance) {
//     this._owner = owner;
//     this._balance = balance;
//   }

//   get owner() {
//     return this._owner;
//   }
//   set owner(value) {
//     this._owner = value; 
//   }
//   get balance() {
//     return this._balance
//   }
//   set balance(value) {
//     this._balance = value
//   }

//   deposit(deposit) {
//     return this._balance += deposit;
//   }
//   withdraw(withdraw) {
//     if(this._balance > withdraw) {
//       this._balance -= withdraw; 
//     } else {
//       console.log("인출 할 수 없음");
//     }
//     return this._balance;
//   }
//   output() {
//     console.log(`${this._owner}님의 잔액: ${this._balance}`);
//   }
// }

// const customer = new Account("찬우", 0);
// customer.deposit(5000);
// customer.output();

// customer.withdraw(10000);
// customer.output();

// customer.withdraw(4000);
// customer.output();


// ## 내장기능 실습 //

// TODO: 1.
