// TODO: 문제 1
// var check_list = [true, false, false, true, false];
// console.log("before -->" + check_list);


// for(let i = 0; i < check_list.length; i++) {
//   check_list[i] 
// }

// console.log("after -->" + check_list);


// TODO: 문제 2  v
var grade = [75, 82, 91];  // 성적표 배열
var sum = 0, avg = 0;  // 총점과 평균점수 변수 생성

// 총점 구하기
for(let i = 0; i < grade.length; i++) {
  sum += grade[i];
}

// 평균 구하기
avg = sum / grade.length;

// avg의 값을 소수점 둘째 자리까지로 한다.
avg = avg.toFixed(2);
console.log("총점: " + sum + "점, 평균점수 : " + avg + "점");


// TODO: 문제 3
var time = [7,5,5,5,5,10,7];
var money = 0;



console.log("1주일간의 전체 급여 : " + money + "원");


// TODO: 문제 4  v
var price = [38000, 20000, 17900, 17900];
var qty = [6,4,3,5];
var money = 0;

for(let i = 0; i < price.length; i++) {
  money += price[i] * qty[i]
}
console.log("전체 결재 급액 : " + money + "원");


// TODO: 문제 5

let max = price[0] * qty[0]; 



// let max1 = price[0];
// let max2 = qty[0];

// for(let i = 0; i < price.length; i++) {
//   if(max1 < price[0]) {
//     max1 = price[i];
//   }
// }
// console.log(max1);

// for(let i = 0; i < qty.length; i++) {
//   if(max1 < qty[0]) {
//     max1 = qty[i];
//   }
// }
// console.log(max2);

// let maxx = max1 * max2;
// console.log(maxx);


// TODO: 문제 6




// TODO: 문제 7  v
var price = [209000, 109000, 119000, 109000, 94000];
console.log("상품가격 --> " + price);

for(var i = 0; i < price.length -1 ; i++) {
  for(var j = 1 + 2; j < price.length; j++) {
    if(price[i] > price[j]) {
      var tmp = price[i];
      price[i] = price[j];
      price[j] = tmp;
    }
  }
}
console.log("낮은가격순 --> " + price);


// TODO: 문제 8  v
var arr = [5, 3, 2, 8, 9];
console.log("before --> " + arr);

for(var i = 0; i < parseInt(arr.length / 2); i++) {
  var tmp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = tmp;
}
console.log("after --> " + arr);