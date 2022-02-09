// 재귀함수로 팩토리얼 구하기

function f(x) {
  if(x <= 1) {
    // console.log(1);
    return 1;
  } else {
    // console.log(`${x} X f(${x-1})`);
    return x * f(x-1);
  }
}
// const a = f(5);
// console.log(a);
console.log(f(5));
console.log(f(10));
console.log(f(20));


//팩토리얼 

function f(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    console.log(`${result} * ${i}`);
    result = result * i;
   }

	
  return result;
}

// 테스트
console.log(f(5));
console.log(f(10));
console.log(f(20));