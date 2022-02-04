// 배열, JSON 은 정보가 어딘가에 저장되고 정보를 찾아갈수 있는 위치 정보가 복사되는거라 원본을 바꾸면 다 바뀐다.

// const foo <- 객체 참조변수 = {...} <- 인스턴스

//! 값복사 -> 일반 변수끼리의 복사
let a = 100;
let b = a;
console.log("a = " + a + ", b = " + b);

// 일반 변수끼리 복사한 경우 원본이 변경되면 복사본에는 영향이 없다.
a++;
console.log("a = " + a + ", b = " + b);
console.log(`a = ${a}, b = ${b}`);


//! 참조복사 (=옅은복사)
// 배열, JSON, 객체 끼리의 복사는 참조처리 된다.
// 원본을 수정하면 복사본도 함께 수정된다.(반대의 경우도 마찬가지)
const user = {
  name: "lee"
};

const member = user;
console.log(user);  // { name: 'lee' }
console.log(member);  // { name: 'lee' }

member.name = "Kim";
console.log(user);  // { name: 'Kim' }
console.log(member);  // { name: 'Kim' }

const d1 = [1,2,3];
const d2 = d1;
console.log(d1);  // [ 1, 2, 3 ]
console.log(d2);  // [ 1, 2, 3 ]

d1[0] += 10;
d1[1] += 10;
d1[2] += 10;
console.log(d1);  // [ 11, 12, 13 ]
console.log(d2);  // [ 11, 12, 13 ]


//! 배열끼리의 값 복사 방법 (=깊은복사)
const a1 = [1, 2, 3];

// 원본과 동일한 길이를 갖는 배열을 생성
const a2 = new Array(a1.length);

// 배열을 온전히 값 복사하기 위해서는 원소끼리 개별 복사 해야함
for(let i = 0; i < a1.length; i++) {
  a2[i] = a1[i];
}

// 배열 객체가 갖는 메서드를 활용한 깊은 복사 방법
const a3 = a1.slice(); // 깊은 복사를 한번에 해주는 명령어 ..

console.log(a1);
console.log(a2);
console.log(a3);

a1[0] += 100;

console.log(a1);
console.log(a2);
console.log(a3);


// JSON의 깊은 복사
const addr = {
  city: "서울",
  gu: "서초"
};

// 깊은 복사를 수행할 빈 JSON 객체를 생성
const copy = {};

for(let key in addr) {
  // copy.city와 copy.gu와 동일한 처리
  copy[key] = addr[key];
}

console.log(addr);
console.log(copy);

addr.gu = "강남";

console.log(addr);
console.log(copy);


// js가 제공하는 기능 활용하기
const copy2 = {};

// addr을 copy2에 깊은 복사 수행하는 JS 내장기능
// 복사 될 copy2가 비어 있는 json일 경우 복사
// copy2가 비어있지 않으면 누적
Object.assign(copy2, addr);
console.log(copy2);

