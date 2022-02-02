// // TODO: 문제 1
// var check_list = [true, false, false, true, false];
// console.log("before -->" + check_list);

// for(let i = 0; i < check_list.length; i++) {
//   check_list[i] = !check_list[i];
// }

// console.log("after -->" + check_list);



// // TODO: 문제 2
// var grade = [75, 82, 91];  // 성적표 배열
// var sum = 0, avg = 0;  // 총점과 평균점수 변수 생성

// // 총점 구하기
// for(let i = 0; i < grade.length; i++) {
//   sum += grade[i];
// }

// // 평균 구하기
// avg = sum / grade.length;

// // avg의 값을 소수점 둘째 자리까지로 한다.
// avg = avg.toFixed(2);
// console.log("총점: " + sum + "점, 평균점수 : " + avg + "점");



// // TODO: 문제 3
// var time = [7,5,5,5,5,10,7];
// var money = 0;

// for(let i = 0; i < time.length; i++) {
//   if(i < time.length - 3) {
//     money += time[i] * 4500
//   } else {
//     money += time[i] * 5200
//   }
// }
// console.log("1주일간의 전체 급여 : " + money + "원");



// // TODO: 문제 4
// var price = [38000, 20000, 17900, 17900];
// var qty = [6,4,3,5];
// var money = 0;

// for(let i = 0; i < price.length; i++) {
//   money += price[i] * qty[i]
// }
// console.log("전체 결제 급액 : " + money + "원");



// // TODO: 문제 5
// var price = [38000, 20000, 17900, 17900];
// var qty = [6,4,3,5];
// var money = [];

// for(let i = 0; i < price.length; i++) {
//   money[i] = price[i] * qty[i]
// }

// let max = money[0];

// for(let i = 0; i < money.length; i++) {
//   if(max < money[i]) {
//     max = money[i]
//   }
// }
// console.log("가장 높은 금액: " + max + "원");



// // TODO: 문제 6
// var price = [38000, 20000, 17900, 17900];
// var qty = [6,4,3,5];
// var money = [];
// let count = 0;

// for(let i = 0; i < price.length; i++) {
//   money[i] = price[i] * qty[i]
//   if(money[i] >= 80000) {
//     count++;
//   }
// }
// console.log("무료배송 항목: " + count + "건");



// // TODO: 문제 7
// var price = [209000, 109000, 119000, 109000, 94000];
// console.log("상품가격 --> " + price);

// for(var i = 0; i < price.length -1 ; i++) {
//   for(var j = i + 1; j < price.length; j++) {
//     if(price[i] > price[j]) {
//       var tmp = price[i];
//       price[i] = price[j];
//       price[j] = tmp;
//     }
//   }
// }
// console.log("낮은가격순 --> " + price);



// // TODO: 문제 8
// var arr = [5, 3, 2, 8, 9];
// console.log("before --> " + arr);

// for(var i = 0; i < parseInt(arr.length / 2); i++) {
//   var tmp = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i - 1] = tmp;
// }

// console.log("after --> " + arr);



// // TODO: 문제 9
// // 학생이름 배열
// var student = ["둘리", "도우너", "또치", "희동"];

// // 성적표 배열
// var grade = [
//   [78, 89, 96,],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// // 총점과 평균점수를 저장할 변수
// var sum = 0, avg = 0;

// // 총점과 평균 구하기
// for(let i = 0; i < grade.length; i++) {
//   let personalSum = 0;
//   for(let j = 0; j < grade[i].length; j++) {
//     personalSum += grade[i][j];
//   }
//   avg = (personalSum / grade[i].length).toFixed(2);
//   console.log("%s 총점: %d점, 평균: %s점", student[i], personalSum, avg)
// };



// // TODO: 문제 10
// var student = ["둘리", "도우너", "또치", "희동"];

// var grade = [
//   [78, 89, 96,],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// var sum = 0, avg = 0, classAvg = 0;

// for(let i = 0; i < grade.length; i++) {
//   let personalSum = 0;
//   for(let j = 0; j < grade[i].length; j++) {
//     personalSum += grade[i][j];
//   }

//   avg = personalSum / grade[i].length;

//   personalAvg = avg.toFixed(2);
//   classAvg += avg / student.length;
//   console.log("%s 총점: %d점, 평균: %s점", student[i], personalSum, personalAvg);
// };
// console.log("반평균 = " + classAvg + "점");



// TODO: 문제 11
// const item = [
//   [500, 291],
//   [320, 586],
//   [100, 460],
//   [120, 558],
//   [92, 18],
//   [30, 72]
// ];

// let totalMoney = 0;

// for(let i = 0; i < item.length; i++) {
//   let money = 1;
//   for(let j = 0; j < item[i].length; j++) {
//     money *= item[i][j];
//   }
//   totalMoney += money;
// }
// const changeMoney = totalMoney * 0.9;
// console.log(`아이템 총 판매가격: ${changeMoney}G`);

/*
let price = [500,320,100,120,92,30];
let quantity = [291,586,460,558,18,72];

let money = 0;

for(let i = 0; i < price.length; i++) {
  money += price[i] * quantity[i];
}

let result = money * 0.9;
console.log(`아이템 총 판매가격: ${result}G`);
*/



// // TODO: 문제 12
const jumin = [0,1,1,2,1,3,1,0,0,0,1,2,3];
const checkJumin = [2,3,4,5,6,7,8,9,2,3,4,5];

let multiply = 0;
let result = 0;

for(let i = 0; i < jumin.length - 1; i++) {
  multiply += jumin[i] * checkJumin[i]
}

result = (11 - (multiply % 11)) % 10;

if(result == jumin[jumin.length - 1]) {
  console.log("유효한 주민번호");
} else {
  console.log("유효하지 않은 주민번호");
}
