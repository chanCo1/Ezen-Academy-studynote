// JSON은 하나의 그릇이다..

const m3 = {
  userName: "철민",
  email: "cm@mail.com"
};

// m3와 같은 구조를 갖는 m4를 정의
const m4 = m3;

console.log(m3);
console.log(m4);

// 값의 변경
m3.userName = "민수";
m3.email = "ms@naver.com";

// 객체간의 복사는 서로 영향을 준다.
// 객체끼리의 대입은 복사가 아닌 참조이므로 원본의 데이터를 변경하면 복사본도 함께 변경된다. (반대도 동일)
console.log(m3);
console.log(m4);


// const ex = {
//   x: "Andy",
//   y: "Josh"
// };

// const ex2 = ex;

// console.log(ex);
// console.log(ex2);

// ex.x = "Tom";
// ex.y = "Juny";

// console.log(ex);
// console.log(ex2);