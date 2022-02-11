/*
setTimeout(func, int)
@param - func : 콜백함수
@param - 1/1000초 단위으 시간 값 (1000 == 1초)

지정된 함수를 두 번째 인자로 전달된 시간 후에 실행하도록 예약한다. (딜레이 기능)
setTimeout() 이후의 처리 로직들은 func의 실행 여부와 상관없이 즉시 실행된다.

프로그램의 흐름과 상관없이 별도로 실행되는것이다
*/

function foo() {
  for(let i = 1; i < 10; i++) {
    console.log(`2 X ${i} = ${i*2}`);
  }
}
setTimeout(foo, 3000);


// 일반적으로 콜백함수를 별도로 정의하지 않고 즉시 전달한다.
// 화살표함수로 정의해도 됨
setTimeout(() => {
  for(let i = 1; i < 10; i++) {
    console.log(`5 X ${i} = ${i*2}`);
  }
}, 2000);

////
console.log("밑에 있는데 먼저 출력");