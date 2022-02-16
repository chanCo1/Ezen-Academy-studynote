// // 개인적인 문제

// // 1. 올해 며칠이 지났는지 계산하시오
const date = new Date();  // 객체 생성
const ms = date.getTime();  // 밀리세컨드로 변환

// 현재 년도 , 0(1월), 1일을 파라미터 값으로 받는 객체 생성
const day1 = new Date(date.getFullYear(), 0, 1);
const ms1 = day1.getTime();  // 받은 값을 밀리세컨드로 변환
const calc1 = ms - ms1;  // 지금까지 지나온 총 시간 - 현재년도 1월 1일 을 뺀다.

// 계산 결과를 원하는 단위로 환산 -> (24시간 * 60분 * 60초 * 1000) 을 나눈다
// 과거 시점으로부터 지나온 시간을 계산할 경우 소수점을 내린다.
const result1 = Math.floor(calc1 / (24 * 60 * 60 * 1000));

const today = date.toLocaleString("ko-KR")

console.log(`${today} 기준 ${result1}일 지났습니다.`);

// 2. 올해 며칠이 남았는지 계산하시오
// 객체 생성
const date2 = new Date();
// 객체 시간을 문자열로 반환
const ms2 = date2.getTime();  // 밀리세컨드로 변환

// 현재 년도, 11(12월), 31일을 파라미터 값으로 받는 객체 생성
const day2 = new Date(date2.getFullYear(), 11, 31);
const ms3 = day2.getTime();
const calc2 = ms3 - ms2

// 미래의 시점으로 남은 시간을 계산할 경우 소수점을 올린다.
const result2 = Math.ceil(calc2/ (24 * 60 * 60 * 1000));

const today2 = date2.toLocaleString("ko-KR")
console.log(`${today2} 기준 ${result2}일 남았습니다.`);



// 30일 후
// 날짜 객체 생성
const date3 = new Date();
// 날짜를 반환해서 +30을 해서 변수에 대입
const a = date3.getDate() + 30;
// 대입된 시간을 설정
date3.setDate(a);
console.log(date3.toLocaleString("ko-KR"));


// 30일 후에 100일 전
const b = date3.getDate() - 100;
date3.setDate(b);
console.log(date3.toLocaleString("ko-KR"));


// 달력만들기 //

// 이번달 1일의 요일 구하기
// 날짜 객체 생성
const date4 = new Date();
// 이번달 1일로 설정
date4.setDate(1)
// 설정된 요일 구하기
const startDay = date4.getDay();
console.log(startDay);

// 이번달의 마지막날 구하기 -> 다음달 0번째 날짜 구함
// 현재 월을 추출 (month는 0부터 시작함을 유의)
const m = date4.getMonth();
// setMonth가 2가 돼야 3월이 설정됨
date4.setMonth(m+1);
// 3월의 0번째. 즉, 2월의 마지막날
date4.setDate(0);
// 설정된 날짜 대입
const lastDate = date4.getDate();
console.log(lastDate);


// 6행 7열의 빈 배열 만들기
const calendar = new Array(6);
for(let i = 0; i < calendar.length; i++) {
  calendar[i] = new Array(7);
};
// console.log(calendar);

// 1씩 증가할 값
let counter = 1;

for(let i = 0; i < calendar.length; i++) {
  for(let j = 0; j < calendar[i].length; j++) {
    if(i == 0 && j < startDay || counter > lastDate) {
      calendar[i][j] = 0;
    } else {
      calendar[i][j] = counter++;
    }
  }
}

// 출력

for(let i = 0; i < calendar.length; i++) {
  let str = "";
  for(let j = 0; j < calendar.length; j++) {
    str += calendar[i][j] == 0 ? "\t" : (calendar[i][j] + "\t");
  }
  console.log(str);
}













// FIXME: 문제 1.
const email = "leekh4232@gmail.com";
const id = email.substring(0,9);
const domain = email.substring(10);

console.log(id);
console.log(domain);


// TODO: 1
email = "leekh4232@gmail.com";

// 문자열에서 "@"를 찾아 변수에 대입
p = email.indexOf("@");

// 0번째 부터 @이전 까지 문자열 리턴
id = email.substring(0, p);

// @ 이후의 문자열 리턴
domain = email.substring(p+1);

console.log(id);
console.log(domain);







// // FIXME: 문제 2.
// const ssn = "020517-3******";

// const date = new Date();
// const now_year = date.getFullYear();


// TODO: 2
const ssn = "020517-3******";

const date = new Date();
const now_year = date.getFullYear();

let yy = parseInt(ssn.substring(0,2));
let mm = parseInt(ssn.substring(2,4));
let dd = parseInt(ssn.substring(4,6));
let gen = parseInt(ssn.substring(7,8));

yy = (gen > 2) ? yy+2000 : yy+1900;

// 나이 계산
const age = now_year - yy +1;

// 성별 확인
const sex = (gen % 2) ? "남자" : "여자";

console.log("%d년 %d월 %d일에 태어난 %d세 %s 입니다.", yy, mm, dd,age, sex);







// FIXME: 문제 3.
const str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다";

let count = 0;
const msg = "수업시간"


// TODO:
let str = "수업시간에 배운것은 수업시간에 다 이해하고 넘어가야지 수업시간에 놓치면 따라오기 힘들다";

word = "수업시간";
flen = word.length;
find = true;
count = 0;

while(find) {
  // console.log(str);
  p = str.indexOf(word);
  find = p > -1;

  if(find) {
    count++;
    str = str.substring(p+flen);
  }
}
console.log(count);




// FIXME: 문제 4.
// 랜덤함수
function random(min, max) {
  return parseInt(Math.random() * (max - min +1)) + min;
}

let lotto = [];
for(let i = 0; i < 6; i++) {
  lotto[i] = random(1, 45);
}
console.log(lotto);

// TODO: 4.

//랜덤 함수
function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 +1)) + n1;
}

// 0개의 원소를 갖는 배열
const lotto = [];

// 6회의 반복을 수행
for(let i = 0; i < 6; i++) {
  // console.log("%s", lotto);

  // 중복되지 않는 숫자가 몇 번째에 생성될지 알수없으므로 무한 반복
  while(true) {
    // 랜덤 숫자
    const rnd = random(1, 45);

    // rnd 값이 lotto 배열안의 원소와 중복되지 않는다면?
    if(!lotto.includes(rnd)) {
      // console.log(">>> %d는 중복되지 않음", rnd);
      lotto.push(rnd);
      break;
    } else {
      // console.log(">>> %d는 중복됨", rnd);
    }
  }
}
console.log(lotto);







// FIXME: 문제 5.

const lotto = new Array(6);

let balls = [];
for(let i = 0; i < 45; i++) {
  balls[i] = i+1;
}

// for(let i = 0; i < 6; i++) {
//   lotto.splice(0,6,balls[i]);
// }
// console.log(lotto);

// TODO: 5.
function random(n1, n2) {
  return parseInt(Math.random() * (n2 - n1 +1)) + n1;
}

// 1~45 사이의 범위에 1씩 증가하는 배열 balls
const balls = [];
for(let i = 0; i < 45; i++) {
  balls[i] = i+1;
}

// 6개의 빈 칸을 갖는 배열 lotto
const lotto = new Array(6);

// lotto의 길이만큼 반복 (6칸)
for(let i = 0; i < lotto.length; i++) {

  // balls의 범위 안에서 랜덤값을 대입
  const rnd = random(0, balls.length-1);

  // balls의 랜덤 배열 값을 lotto에 배열에 대입
  lotto[i] = balls[rnd];

  // rnd번째 에서 1개의 데이터 삭제
  balls.splice(rnd, 1);
}
console.log(lotto);





// FIXME: 문제 6.
function solution(participant, completion) {
  let answer = "";
  for(let i = 0; i < participant.length; i++) {
    if(participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
};

// "leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "leo"가 출력
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));

// "vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "vinko"가 출력
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));

// "steave"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.
// 출력결과: "steave"가 출력
console.log(solution(["mislav", "stanko", "steave", "ana"], ["stanko", "ana", "mislav"]));


// TODO: 6.
function solution(participant, completion) {
  let answer = "";

  // for(let i = 0; i < participant.length; i++) {
  //   const p = participant[i];

  //   if(!completion.includes(p)) {
  //     answer = p;
  //     break;
  //   }
  // }

  participant.some((v,i) => {
    if(!completion.includes(v)) {
      answer = v;
      return true;
    }
  })
  return answer;
};

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"], ["josipa", "filipa", "marina", "nikola"]));
console.log(solution(["mislav", "stanko", "steave", "ana"], ["stanko", "ana", "mislav"]));
