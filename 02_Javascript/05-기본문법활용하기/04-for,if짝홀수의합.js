
let a = 0;  // 짝수의 합
let b = 0;  // 홀수의 합

// i가 1~10까지 1씩 증가하는 동안 반복   "<= 보단 < 가 낫다"
for (let i = 1; i < 11; i++) { 
  // 반복문 안에서 조건문은 주로 반복문의 초기식 변수 i에 대한 경우의 수를 판별함
  if (i % 2 === 0) {
    console.log("%d(은)는 짝수" , i);
    a += i;
  } else {
    console.log("%d(은)는 홀수", i);
    b += i;
  }
}
console.log("1~10 까지 홀수들의 합 : %d", a);
console.log("1~10 까지 짝수들의 합 : %d", b);