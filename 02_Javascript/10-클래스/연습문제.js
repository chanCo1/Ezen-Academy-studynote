
// // FIXME: 문제 1.
// // function Student(name, kor, eng, math) {
// //   this._name = name;
// //   this._kor = kor;
// //   this._eng = eng;
// //   this._math = math;
// // };

// // Student.prototype = {
// //   get name() {
// //     return this._name;
// //   },
// //   set name(para) {
// //     this.name = para;
// //   },
// //   get sum() {
// //     return this._kor + this._eng + this._math;
// //   },
// //   set sum(para) {
// //     this.sum = para;
// //   },
// //   get avg() {
// //     return this.sum / 3;
// //   },
// //   set avg(para) {
// //     this.avg = para;
// //   },
// //   out: function() {
// //     console.log(`${this.name}의 총점은 ${this.sum}점 이고, 평균은 ${this.avg}점 입니다.`);
// //   }
// // };

// // const student1 = new Student("철수", 92, 81, 77);
// // const student2 = new Student("영희", 72, 95, 98);
// // const student3 = new Student("민혁", 80, 86, 84);

// // student1.out();
// // student2.out();
// // student3.out();

// // TODO: 문제 1.
// function Student(kor, eng, math) {
//   this._kor = kor;
//   this._eng = eng;
//   this._math = math;
// };

// Student.prototype = {
//   sum : function() {
//     return this._kor + this._eng + this._math;
//   },

//   avg : function() {
//     return this.sum() / 3;
//   }
// };

// const grade = [
//   ["철수", 92, 81, 77],
//   ["영희", 72, 95, 98],
//   ["민혁", 80, 86, 84]
// ];

// for(const item of grade) {
//   const s = new Student(item[1], item[2], item[3]);
//   console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
// }


// // FIXME: 문제 2.

// // function Rectangle(width, height) {
// //   this._width = width;
// //   this._height = height;
// // };

// // Rectangle.prototype.getAround = function() {
// //   this.width
// // }

// // TODO: 문제 2.
// function Rectangle() {
//   this._width = null;
//   this._height = null;
// };

// Rectangle.prototype = {
//   get width() {
//     return this._width;
//   },
//   set width(para) {
//     this._width = para;
//   },
//   get height() {
//     return this._height;
//   },
//   set height(para) {
//     this._height = para;
//   },
//   getAround: function() {
//     return (this.width + this.height) * 2;
//   },
//   getArea: function() {
//     return this.width * this.height;
//   }
// };

// const result = new Rectangle();
// result.width = 10;
// result.height = 5;

// console.log(`둘레의 길이는 ${result.getAround()}이고, 넓이는 ${result.getArea()}입니다.`);



// // FIXME: 문제 3.

// class Student {

//   constructor(kor, eng, math) {
//     this.kor = kor;
//     this.eng = eng;
//     this.math = math;
//   }

//   sum() {
//     return this.kor + this.eng + this.math;
//   }

//   avg() {
//     return (this.kor + this.eng + this.math) / 3
//   }

// }

// const s1 = new Student(92, 81, 77);
// const s2 = new Student(72, 95, 98);
// const s3 = new Student(80, 86, 84);

// console.log(`철수의 총점은 ${s1.sum()}점 이고 평균은 ${s1.avg()}점 입니다.`);
// console.log(`영희의 총점은 ${s2.sum()}점 이고 평균은 ${s2.avg()}점 입니다.`);
// console.log(`민혁의 총점은 ${s3.sum()}점 이고 평균은 ${s3.avg()}점 입니다.`);


// // FIXME: 문데 3-1

// class Rectangle {
//   constructor() {
//     this._width = null;
//     this._height = null;
//   }

//   get width() {
//     return this._width;
//   }

//   set width(para) {
//     this._width = para;
//   }

//   get height() {
//     return this._height;
//   }
//   set height(para) {
//     this._height = para;
//   }
//   getAround() {
//     return (this.width + this.height) * 2;
//   }
//   getArea() {
//     return this.width * this.height;
//   }
// }

// const result = new Rectangle();
// result.width = 10;
// result.height = 5;

// console.log(`둘레의 길이는 ${result.getAround()}이고, 넓이는 ${result.getArea()}입니다.`);

// // const grade = [
// //   ["철수", 92, 81, 77],
// //   ["영희", 72, 95, 98],
// //   ["철수", 80, 86, 84]
// // ];

// // for(const item of grade) {
// //   const s = new Student(item[1], item[2], item[3]);
// //   console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
// // }



// /*
// 문제 1 - 다음을 만족하는 Student 클래스를 작성하시오.

// 1) String형의 학과와 정수형의 학번을 프로퍼티로로 선언후 생성자를 통해 주입
// 2) getter, setter를 정의
// 3) sayHello() 메서드를 통해 "나는 OOOO학과 OO학번 입니다." 를 출력하는 기능을 구현

// */

// // TODO: 
// class Student {
//   constructor(department, classNum) {
//     this._department = department;
//     this._classNum = classNum;
//   }

//   get department() {
//     return this._department;
//   }
//   set department(value) {
//     this._department = value;
//   }

//   get classNum() {
//     return this._classNum;
//   }
//   set classNum(value) {
//     this._classNum = value;
//   }

//   sayHello() {
//     console.log("나는 %s학과 %d학번 입니다.", this.department, this.classNum);
//   }
// };

// const me = new Student("0000", 00);
// me.sayHello();


// // TODO:





// /*
// 문제 - 2. 다음을 만족하는 클래스 Account를 작성하시오.

// 1) 다음의 2 개의 필드를 선언
//     문자열 owner; (이름)
//     숫자형 balance; (금액)
// 2) 위 모든 필드에 대한 getter와 setter의 구현
// 3) 위 모든 필드를 사용하는 가능한 모든 생성자의 구현
// 3) 메소드 deposit()의 헤드는 다음과 같으며 인자인 금액을 저축하는 메소드
//     deposit(amount)
// 4) 메소드 withdraw()의 헤드는 다음과 같으며 인자인 금액을 인출(리턴)하는 메소드
//     withdraw(long amount)
//     인출 상한 금액은 잔액까지로 하며, 이 경우 이러한 상황을 출력
// */

// // TODO:
// class Account {
//   constructor(owner, balance) {
//     this._owner = owner;
//     this._balance = balance;
//   }

//   get owner() {
//     return this._owner;
//   }
//   set owner(value) {
//     this._owner = value;
//   }

//   get balance() {
//     return this._balance;
//   }
//   set balance(value) {
//     this._balance = value;
//   }

//   deposit(amount) {
//     return this._balance += amount;
//   }

//   withdraw(amount) {
//     if(this.balance > amount) {
//       return this.balance -= amount;
//     } else {
//       console.log("인출할수없음");
//     }
//   }

//   Output() {
//     console.log(`${this._owner}님의 현재 금액:${this._balance}`);
//   }
// };

// const money = new Account("이름", 10000);

// money.deposit(5000);  // 이름님의 현재 금액:15000
// // money.withdraw(99999999);  // 인출할 수 없음
// money.withdraw(4000);  //이름님의 현재 금액:11000
// money.Output();







// // 다시 풀어 봄
// // TODO: 문제 1.

// class Student {
//   constructor(kor, eng, math) {
//     this._kor = kor;
//     this._eng = eng;
//     this._math = math;
//   }

//   sum() {
//     return this._kor + this._eng + this._math;
//   }
//   avg() {
//     return this.sum() / 3
//   }
// };

// const grade = [
//   ["철수", 92, 81, 82],
//   ["영희", 72, 95, 100],
//   ["민혁", 80, 86, 89]
// ];

// for(const i of grade) {
//   const s = new Student(i[1], i[2], i[3]);
//   console.log(`${i[0]}의 총점은 ${s.sum()}점이고, 평균은 ${s.avg()}점 입니다.}`);
// }


// // const s1 = new Student(92, 81, 82);
// // const s2 = new Student(72, 95, 100);
// // const s3 = new Student(80, 86, 89);

// // console.log(`철수의 총점은 ${s1.sum()}점이고, 평균은 ${s1.avg()}점 입니다.}`);
// // console.log(`영희의 총점은 ${s2.sum()}점이고, 평균은 ${s2.avg()}점 입니다.}`);
// // console.log(`민혁의 총점은 ${s3.sum()}점이고, 평균은 ${s3.avg()}점 입니다.}`);

// // TODO: 문제 2.

// class Rectangle {
//   constructor() {
//     this._width = null;
//     this._height = null;
//   }

//   get width() {
//     return this._width;
//   }
//   set width(length) {
//     this._width = length;
//   }
//   get height() {
//     return this._height;
//   }
//   set height(length) {
//     this._height = length;
//   }

//   getAround() {
//     return (this._width + this._height) * 2;
//   }
//   getArea() {
//     return this._width * this._height;
//   }
// };

// const r = new Rectangle();
// r.width = 10;
// r.height = 5;
// console.log(`둘레의 길이는 ${r.getAround()}이고, 넓이는 ${r.getArea()}입니다.`);

// // TODO: 문제 3.

// class Student {
//   constructor(department, studentNum) {
//     this._department = department;
//     this._studentNum = studentNum;
//   }

//   get department() {
//     return this._department;
//   }
//   set department(department) {
//     this._department = department;
//   }
//   get studentNum() {
//     return this._studentNum;
//   }
//   set studentNum(studentNum) {
//     this._studentNum = studentNum;
//   }

//   sayHello() {
//     console.log("나는 %s학과 %d학번 입니다.", this._department, this._studentNum);
//   }
// };

// const s = new Student("0000", 00);
// s.sayHello();

// TODO: 문제 4.
class Account {
  constructor(owner, balance) {
    this._owner = owner;
    this._balance = balance;
  }

  get owner() {
    return this._owner;
  }
  set owner(owner) {
    this._owner = owner;
  }
  get balance() {
    return this._balance;
  }
  set balance(balance) {
    this._balance = balance;
  }

  deposit(amount) {
    return this._balance += amount;
  }
  withdraw(amount) {
    if(this._balance > amount) {
      this._balance -= amount;
    } else {
      console.log("인출 할 수 없음");
    }
    return this._balance;
  }

  output() {
    console.log("%s님의 잔액: %d원", this.owner, this.balance);
  }
};

const money = new Account("OO", 0);
console.group('1. 5000원 저축');
  money.deposit(5000);
  money.output();
console.groupEnd();

console.group('2. 10000원 인출');
  money.withdraw(10000);
  money.output();
console.groupEnd();

console.group('3. 4000원 인출');
  money.withdraw(4000);
  money.output();
console.groupEnd();


// console.group('1. 5000원 저축');
//   money.deposit(5000);
//   console.log("%s님의 잔액: %d", money.owner, money.balance);
// console.groupEnd();

// console.group('2. 10000원 인출');
//   money.withdraw(10000);
//   console.log("%s님의 잔액: %d", money.owner, money.balance);
// console.groupEnd();

// console.group('3. 4000원 인출');
//   money.withdraw(4000);
//   console.log("%s님의 잔액: %d", money.owner, money.balance);
// console.groupEnd();