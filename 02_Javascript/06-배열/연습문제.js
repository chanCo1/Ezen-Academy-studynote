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

// // FIXME:
// // for(const p of grade) {
// //   sum += p;
// // } // for문 대신 가능



// // TODO: 문제 3
// let time = [7,5,5,5,5,10,7];
// let money = 0;

// for(let i = 0; i < time.length; i++) {
//   if(i < time.length - 3) {
//     money += time[i] * 4500
//   } else {
//     money += time[i] * 5200
//   }
// }
// console.log(`1주일간의 전체 급여: ${money}원`);

// // FIXME:
// // 1.
// for(let i = 0; i < time.length; i++) {
//   if(i < 4) {
//     money += time[i] * 4500
//   } else {
//     money += time[i] * 5200
//   }
// }

// // 2.
// let x = 0;
// if(i < 4) {
//   x = 4500
// } else {
//   x = 5200
// }
// money += time[i] * x

// // 3.
// let x = (i < 4) ? 4500 : 5200;
// money += time * x

// // 4.
// money += time[i] * (i < 4) ? 4500 : 5200;



// // TODO: 문제 4
// const price = [38000, 20000, 17900, 17900];
// const qty = [6,4,3,5];
// let money = 0;

// for(let i = 0; i < price.length; i++) {
//   money += price[i] * qty[i]
// }
// console.log(`전체 결제 금액: ${money}원`);



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

// // FIXME:
// const price = [38000, 20000, 17900, 17900];
// const qty = [6,4,3,5];

// let money = price[0] * qty[0];

// for(let i = 1; i < price.length; i++) {
//   const sum = price[i] * qty[i];

//   if(money < sum) {
//     money = sum
//   }
// }
// console.log(`가장 높은 상품금액: ${money}원`);



// // TODO: 문제 6
// const price = [38000, 20000, 17900, 17900];
// const qty = [6,4,3,5];
// let count = 0;

// for(let i = 0; i < price.length; i++) {
//   const sum = price[i] * qty[i];

//   if(sum >= 80000) {
//     count++;
//   }
// }
// console.log(`무료배송 항목: ${count}건`);



// // TODO: 문제 7
// const price = [209000, 109000, 119000, 109000, 94000];
// console.log(`상품가격 → ${price}`);

// // 낮은 가격순으로 정렬 수행
// // (공식) 부모 반복문 -> i가 0부터 길이 -1 보다 작은 동안
// //       자식 반복문 -> j가 i+1부터 길이보다 작은 동안
// //       i번째와 j번째의 크기를 비교하여 맞교환 처리 수행
// for(var i = 0; i < price.length -1 ; i++) {
//   for(var j = i + 1; j < price.length; j++) {
//     if(price[i] > price[j]) {
//       let tmp = price[i];
//       price[i] = price[j];
//       price[j] = tmp;
//     }
//   }
// }
// console.log(`낮은가격순 → ${price}`);



// // TODO: 문제 8
// const arr = [5, 3, 2, 8, 9];5
// console.log("before --> " + arr);

// // 역순 배치 공식
// // 1) 배열길이 / 2 만큼 반복
// // 2) i번째와 길이-i-1 번째를 맞교환
// for(let i = 0; i < parseInt(arr.length / 2); i++) {
//   let tmp = arr[i];
//   arr[i] = arr[arr.length - i - 1];
//   arr[arr.length - i - 1] = tmp;
// }
// console.log("after --> " + arr);



// // TODO: 문제 9
// // 학생이름 배열
// const student = ["둘리", "도우너", "또치", "희동"];

// // 성적표 배열
// const grade = [
//   [78, 89, 96,],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// // 총점과 평균점수를 저장할 변수
// let avg = 0;

// // 총점과 평균 구하기
// for(let i = 0; i < grade.length; i++) {
//   let sum = 0;
//   for(let j = 0; j < grade[i].length; j++) {
//     sum += grade[i][j];
//   }
//   avg = (sum / grade[i].length).toFixed(2);
//   console.log(`${student[i]} 총점: ${sum}점, 평균: ${avg}점`)
// };



// // TODO: 문제 10
// const student = ["둘리", "도우너", "또치", "희동"];

// const grade = [
//   [78, 89, 96,],
//   [62, 77, 67],
//   [54, 90, 80],
//   [100, 99, 98],
// ];

// let avg = 0, classAvg = 0;

// for(let i = 0; i < grade.length; i++) {
//   let sum = 0;
//   for(let j = 0; j < grade[i].length; j++) {
//     sum += grade[i][j];
//   }

//   avg = sum / grade[i].length;

//   personalAvg = avg.toFixed(2);
//   classAvg += avg / student.length;
//   console.log(`${student[i]} 총점: ${sum}점, 평균: ${personalAvg}점`);
// };
// console.log(`반평균 = ${classAvg}점`);



// // TODO: 문제 11
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
// console.log(`물건 총 판매가격: ${changeMoney}원`);

// // FIXME:
// const inven = [
//   [500,291],
//   [320,586],
//   [100,460],
//   [120,558],
//   [92,18],
//   [30,72]
// ];

// let totalPrice = 0;

// for(let i = 0; i < inven.length; i++) {
//   const itemPrice = (inven[i][0] * 0.9) * inven[i][1];
//   totalPrice += itemPrice;
// }
// console.log(`물건 총 판매가격: ${totalPrice}원`);


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
  console.log("유효하지 않는 주민번호");
}


ssn = [0,1,1,2,1,3,1,0,0,0,1,2,3];

let k = 2;
let sum = 0;

for(let i = 0; i < ssn.length -1; i++) {
  sum += ssn[i] * k;
  k++;
  if(k > 9) {
    k = 2;
  }
}

let mod = sum % 11;
let x = (11 - mod) % 10;
let y = x % 10;

if(y == ssn[ssn.length-1]) {
  console.log("유효한 주민번호");
} else {
  console.log("유효하지 않는 주민번호");
}


// 2회차 풀이 //

// // 문제 1.
// let checkList = [true,false,false,true,false];
// console.log(`before → ${checkList}`);

// for(let i = 0; i < checkList.length; i++) {
//   checkList[i] = !checkList[i];
// }

// console.log(`after → ${checkList}`);


// // 문제 2.
// let grade = [75,82,91];
// let sum = 0, avg = 0;

// for(let i = 0; i < grade.length; i++) {
//   sum += grade[i];
// }

// avg = (sum / grade.length).toFixed(2);
// console.log(`총점: ${sum}점, 평균점수: ${avg}점`);


// // 문제 3.
// let time = [7,5,5,5,5,10,7];
// let money = 0;

// for(let i = 0; i < time.length; i++) {
//   if(i < time[i] - 3) {
//     money += time[i] * 4500;
//   } else {
//     money += time[i] * 5200;
//   }
// }

// console.log(`1주일간의 전체 급여: ${money}원`);


// // 문제 4.
// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let money = 0;

// for(let i = 0; i < price.length; i++) {
//   money += price[i] * qty[i];
// }

// console.log("전체 결제 금액: " + money + "원");


// // 문제 5.
// let price = [38000, 20000, 17900, 17900];
// let qty = [6,4,3,5];
// let money = [];

// for(let i = 0; i < price.length; i++) {
//   money[i] = price[i] * qty[i]
// }
// let max = money[0];

// for(let i = 0; i < money.length; i++) {
//   if(max < money[i]) {
//     max = money[i];
//   }
// }
// console.log(`가장 높은 상품금액: ${max}원`);


// 프로그래밍 활용
// 프로그래밍 응용



