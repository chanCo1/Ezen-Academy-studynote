/*
[반복 횟수를 구하기 위한 연산]
1. 원소가 5개일 경우 반복 횟수 : 2회
  - 5/2 연산한다. 연산 결과를 parseInt() 명령을 통해 나머지를 버릴 수 있다. 2 나머지 5는 2.

2. 원소가 6개일 경우 반복 횟수 : 3회
  - 6/2를 연산한다.

=> 즉 배열의 길이를 /2 만큼 반복 처리

[반대쪽 위치의 원소 구하기]
=> 배열의 길이 - i - 1
*/

const data = [1, 5, 2, 4, 3];
console.log(data);

// const rev = data.reverse();
// console.log(rev);

// 반복 횟수 -> 2 나누고 소수점 이하를 버린다.
const p = parseInt(data.length/2); // 괄호 안에 내용에서 소수점 이하를 버린다.
console.log(p);

// let q = (data.length % 2) / 10;
// let p = data.length / 2 - q;

for(let i = 0; i < p; i++) {
  // 반대 쪽 원소의 위치
  const k = data.length - i - 1;

  // i 번째 원소와 k 번째 원소의 교환
  const tmp = data[i];
  data[i] = data[k];
  data[k] = tmp;
}
console.log(data);