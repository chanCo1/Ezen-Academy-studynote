"use strict";

// // 문제 1
// const YEAR = 2022;
// let age = YEAR - 1992;
// console.log("나는 %d세 입니다.", age);


// //문제 2
// const AGE = 30;
// let year = 2022 - AGE;
// console.log("나는 %d년도에 태어났습니다.", year);

//문제 3

// 사과를 바구니에 나누어 담으려고 한다. 하나의 바구니는 사과를 10개씩 담을 수 있으며 사과를 담다가 10개 미만으로 남는 경우 하나의 바구니를 추가로 사용해야 한다. 예를 들어 120개의 사과를 나누어 담기 위해서는 12개의 바구니가 필요하지만 121~130개까지 사과가 있다면 13개의 바구니가 필요하고 다시 131개의 사과를 나누어 담기 위해서는 14개의 바구니가 필요하게 된다.
// 현재 갖고 있는 사과의 수를 의미하는 `numOfApples` 변수에 123이라는 값이 할당되어 있을 경우 필요한 바구니의 수를 구하는 프로그램을 구현하시오.

// const numOfApple = 123;
// const baguni = numOfApple / 10 > 12 ? 13 : 12;
// console.log(baguni); 


const numOfApples = 80;
const extra = (numOfApples % 10) / 10;
let basketCount = extra > 0 ? (numOfApples / 10) - extra + 1 : (numOfApples / 10) - extra;
// console.log(basketCount);

let basketCount2 = (numOfApples / 10) - extra;
basketCount2 += extra > 0 ? 1 : 0;





// const numOfApple = 123;
// const extra = (numOfApple % 10) / 10
// let basketCount = extra > 0 ? (numOfApple / 10) - extra + 1 : (numOfApple / 10) - extra;
// console.log(basketCount);

// let basketCount2 = (numOfApple / 10) - extra;
// basketCount2 += extra > 0 ? 1 : 0;
// console.log(basketCount2);



//문제 4

// 어떤 계산기는 입력된 값에서 백의자리 이하를 버리고 결과를 도출한다고 한다. 예를 들어 입력된 값이 457이라면 400이 결과로 출력된다. 이러한 출력결과를 만들 수 있는 코드를 작성하시오.

// let num = 456;
// let result = Math.floor(num / 100) * 100;
// console.log(result);

let num = 457;
const ex = (num % 100) / 100;
const result = ((num / 100) - ex) * 100;
console.log(result);




// const number = 457;
// const ex = (number % 100) / 100;
// const result = ((number / 100) - ex) * 100;
// console.log(result);


