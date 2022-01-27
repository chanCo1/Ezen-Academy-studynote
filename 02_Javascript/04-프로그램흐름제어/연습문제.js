
// 문제 1
//아래의 switch문을 if문 으로 재작성 하시오
// const 수학 = "B";

// switch(수학) {
//   case 'A' :
//   case 'B' :
//   case 'C' :
//     console.log("이 과목을 pass 했습니다");
//     break;
//   default :
//     console.log("이 과목을 pass하지 못했습니다");
//     break;
// };


// 내가 한거
const 수학 = "B";

if(수학 == "A") {
  console.log("이 과목을 Pass 했습니다.");
} else if(수학 == "B") {
  console.log("이 과목을 Pass 했습니다.");
} else if(수학 == "C") {
  console.log("이 과목을 Pass 했습니다.");
} else {
  console.log("이 과목을 pass하지 못 했습니다");
};



// // 강사님이 한거
// const 수학 = "B";

// if(수학 == "A" || 수학 == "B" || 수학 == "C") {
//   console.log("이 과목을 Pass 했습니다.");
// } else {
//   console.log("이 과목을 pass하지 못 했습니다");
// };




// 문제 2
// 한 개의 2진수는 `0`과 `1` 두 개의 정보를 표시할 수 있고 두 개의 이진수는 `00`,`01`,`10`,`11`과 같이 총 네 개의 정보를 표시할 수 있다. 이처럼 이진수가 하나 늘어날 때 마다 2배씩 표현할 수 있는 정보의 수가 늘어날 때 10개의 이진수는 총 몇개의 정보를 표현할 수 있는지를 while문으로 구현하시오.

// !내가 한거
let leeJinSu = 2;
let num = 1;

while(num <= 10) {
  console.log("이진수 %d개는 %d개의 정보를 표시가능", num, leeJinSu);
  leeJinSu *= 2;
  num++
}


// // !강사님
// let leeJinSu = 1;
// let num = 1;

// while(num <= 10) {
//   leeJinSu *= 2;
//   console.log("이진수 %d개는 %d개의 정보를 표시가능", num, leeJinSu);
//   num++
// }


// 문제 3
//위 2번 문제를 for문으로 다시 표현하시오.

let leeJinSu2 = 2;
for(let num = 1; num <= 10; num++) {
  console.log("이진수 %d개는 %d개의 정보를 표시가능", num, leeJinSu2);
  leeJinSu2 *= 2;
}