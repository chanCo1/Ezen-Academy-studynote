function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 +1)) + n1;
}

function getLuckyResult() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      console.log("당신의 추첨 결과는...?");
      const lucky = random(1, 9);

      if(lucky % 2 === 0) {
        resolve({msg: "당첨", a: 1, b: 2, c: 3});
      } else {
        reject({msg: "꽝", d: -1, e: -2});
      }
    }, 1000);
  });
}
// Promise를 리턴하는 함수를 호출하기 위해 새로운 async 함수를 정의
// 주로 즉시 실행 함수 형태로 정의됨.
// -> 익명함수 전체를 괄호()로 묶어버리고 그 뒤에 호출을 위한 ()를 연달아 넣는 형식
// 현재 자바스크립트에서 가장 발전된 형태

// async는 1회용 목적으로 만든다.
// (async function() {
(async () => {
  let result = null;

  // Promise를 리턴받는 과정을 await 키워드를 적용하여 처리, 예외처리도 적용
  try {

    // await은 async가 정의된 함수안에서만 사용가능
    // getLuckyResult에서 resolve()가 호출 되면서 전달한 파라미터는 그냥 리턴
    result = await getLuckyResult();
    console.log(result.msg, result.a, result.b, result.c);
  } catch(e) {

    // getLuckyResult에서 reject()가 호출되면서 전달한 파라미터는 예외객체(e)로 전달
    console.error(e.msg, e.d, e.e);
  }
})();