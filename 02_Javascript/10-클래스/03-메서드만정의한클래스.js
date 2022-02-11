
class Calc {
  plus(x, y) {
    return x + y;
  }

  minus(x, y) {
    return x - y;
  }
};

const c = new Calc();
console.log(c.plus(1, 2));
console.log(c.minus(5, 1));


// class Ex {

//   // 메서드 정의
//   plus(x, y) {
//     return x + y;
//   }
//   minus(x, y) {
//     return x - y;
//   }
// };

// const e = new Ex();
// console.log(e.plus(4,2));
// console.log(e.minus(4,2));
