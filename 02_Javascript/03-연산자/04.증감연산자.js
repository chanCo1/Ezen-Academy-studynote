// 1) 변수 스스로 1 증가
let selfPlus = 1;
console.log(selfPlus);  // 1

selfPlus++;
console.log(selfPlus);  // 2

++selfPlus;
console.log(selfPlus);  // 3

// 2) 변수 스스로 1 감소
let selfMinus = 1;
console.log(selfMinus);  // 1

selfMinus--;
console.log(selfMinus);  // 0

--selfMinus;
console.log(selfMinus);  // -1

// 3) 전위 증감 연산자
let prevValue = 1; 

// prevValue 를 먼저 1 증가 시키고 전체 수식을 처리한다.
let prevResult = 100 + ++prevValue;

console.log(prevValue);  // 2
console.log(prevResult);  // 102

// 4) 후위 증감 연산자
let nextValue = 1;

// 100 + nextValue를 먼저 처리하고 나중에서야 nextValue가 1 증가한다.
let nextResult = 100 + nextValue++;

console.log(nextValue);  // 2
console.log(nextResult);  // 101