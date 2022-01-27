// 별찍기

/*
i가 0일 때 1회를 수행하기 위해서 j < 1
i가 1일 때 2회를 수행하기 위해서 j < 2
i가 2일 때 3회를 수행하기 위해서 j < 3
i가 3일 때 4회를 수행하기 위해서 j < 4
*/

// for (let i = 0; i < 7; i++) {  // 바깥의 반복문이 "행"을 담당
//   let str = "";
//   for(let j = 0; j < i + 1; j++) {
//     str += '*';
//   }
//   console.log(str);
// }

for (let i = 0; i < 7; i++) {  // 바깥의 반복문이 "행열"을 담당
  let str = "";
  for(let j = 0; j < i + 1; j++) {  // 안쪽 반복문이 "행열"을 담당
    str += '*';
  }
  console.log(str);
}











// let str2 = "";

// for(let i = 0; i < 7; i++) {
//   for(let j = 0; j < i + 1; j++) {
//     str2 += "*";
//   }
//   str2 += '\n';
// }
// console.log(str2);
