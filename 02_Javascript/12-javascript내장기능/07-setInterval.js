/*
setInterval(func, int)

지정된 함수를 두번째 인자로 전달된 시간마다 반복 호출(타이머기능)
이후 처리 로직들은 func의 실행 여부와 상관없이 즉시 실행된다.

타이머를 종료시킬 수 있는 timerId를 반환한다.

이 값은 clearInterval(변수이름) 함수에 전달하면 타이머가 종료된다.

int는 1/1000 초를 의미

*/

let count1 = 0;

const timeId = setInterval(() => {
  count1++;

  console.log(`[타이머1] ${count1}번째 자동 실행`);
  
  if(count1 == 5) {
    console.log("타이머1 종료");
    clearInterval(timeId);
  }
}, 1000);