// 마지막 회차 생략

// 1) 반복문의 조건식이 변수 < 최댓값 인 경우의 조건: 변수 + 1 < 최댓값
for (let i = 1; i < 10; i++) {
  if(i + 1 < 10) {
    console.log(i);
  }
}

// 2) 반복문의 조건식이 변수 <= 최댓값 인 경우의 조건 : 변수 < 최댓값
for (let i = 1; i <= 9; i++) {
  if (i < 9) {
    console.log(i);
  }
}

// 1 ~ 9 까지의 숫자 사이사이에 콤마를 넣어 한 문장으로 결함 (이러한 공식은 외워두면 좋다)
let str = "";

for (let i = 1; i < 10; i++) {
  str += i;
  if (i + 1 < 10) {
    str += ",";
  }
}
console.log(str);



let line = "";
for(let i = 1; i < 5; i++) {
  line += i;
  if (i + 1 < 5) {
    line += '|';
  }
}
console.log(line);