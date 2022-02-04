// 1) 다른 JSON 객체를 value로 포함하는 경우

// 단일 형태의 JSON
let centerPoint = {
  x: 5, // x 좌표
  y: 10 // y 좌표
}

// 다른 JSON을 포함하는 JSON
let circle1 = {
  center: centerPoint, // 중심의 좌표
  radius: 5.10 // 반지름
}

console.log("원의 중점: (%d, %d)", circle1.center.x, circle1.center.y);
console.log("원의 반지름: %d", circle1.radius);

// 2) 계층적으로 정의된 경우
let circle2 = {
  center: { // 중심의 좌표
    x: 5, // x좌표
    y: 10 // y좌표
  },
  radius: 5.10 // 반지름
}

console.log("원의 중점: (%d, %d)", circle2.center.x, circle2.center.y);
console.log("원의 반지름: %d", circle2.radius);


// const name1 = {
// 	a : 1,
//   b : 2
// };

// const jason1 = {
// 	c : name1,
//   d : 3
// };

// console.log(jason1.c);
// console.log(jason1.c.a);
// console.log(jason1.c.b);
// console.log(jason1.d);

// const jason2 = {
//   name1 : {
//     a : 4,
//     b : 5
//   },
//   c : 6
// };

// console.log(jason2.name1);
// console.log(jason2.name1.a);
// console.log(jason2.name1.b);
// console.log(jason2.c);