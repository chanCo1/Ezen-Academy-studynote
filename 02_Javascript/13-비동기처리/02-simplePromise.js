// #비동기 처리로 실행되는 함수에 대한 결과 처리를 별도의 로직으로 실행할 수 있는 기법 //
//콜백지옥을 벗어나기 위한 최신 기술 : 프로미스 - 차선택이다. (좋은건아님)

function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 + 1)) + n1;
}

// Promise를 가동하기 위해서는 Promise 객체를 리턴하는 함수가 필요함
function getLuckyResult() {
  // Promise 객체는 resolve 함수 reject 함수를 파라미터로 받는 콜백이 필요함
  return new Promise(function(resolve, reject) {
    // 이 안에서 비동기 작업을 시작함
    setTimeout(() => {
      console.log("당신의 추첨 결과는...?");
      const lucky = random(1,9);

      if(lucky % 2 === 0) {

        // 작업의 결과가 성공으로 판별된 경우 resolve()를 호출함
        // 파라미터는 단 하나만 가능.
        // 여러개의 정보를 보내야 하는 경우 JSON 구조가 적절하다.
        resolve({msg: "당첨", a: 1, b: 2, c: 3});
      } else {
        // 작업의 결과가 실패로 판별된 경우 reject()를 호출함
        reject({msg: "꽝", d: -1, e:-2});
      }
    }, 1000);
  });
}

// #Promise 객체를 리턴받기 위한 함수 호출 //
/*
getLuckyResult()함수 내부에서 Promise객체가 생성되면서, Promise 클래스에 전달한 생성자 파라미터(콜백함수)가 실행될 것이다. -> resolve 혹은 reject가 호출된 상태라는 의미
*/
const myPromise = getLuckyResult();

// #Promise 객체가 생성되는 과정에서 생성자로 전달된 콜백함수의 실행 결과를 감지하는 부분 //
// -> resolve 혹은 reject 중에서 실행된 함수가 무엇인지 감지
// -> 비동기 작업의 결과를 알아냄
// -> 타이머 종료에 이은 후속처리가 가능하다는 의미
myPromise.then(({msg, a, b, c}) => {
  // [작업성공] -> resolve() 실행됨
  console.log("%s, a=%d, b=%d, c=%d", msg, a, b, c);
}).catch(({msg, d, e}) => {
  console.error("%s, d=%d, e=%d", msg, d, e);
}).finally(() => {
  // 성공 실패 여부에 상관 없이 무조건 실행되는 마무리 처리
  // 생략가능
  console.log(":p");
});