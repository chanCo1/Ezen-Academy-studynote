
// FIXME: 문제 1.
// function Student(name, kor, eng, math) {
//   this._name = name;
//   this._kor = kor;
//   this._eng = eng;
//   this._math = math;
// };

// Student.prototype = {
//   get name() {
//     return this._name;
//   },
//   set name(para) {
//     this.name = para;
//   },
//   get sum() {
//     return this._kor + this._eng + this._math;
//   },
//   set sum(para) {
//     this.sum = para;
//   },
//   get avg() {
//     return this.sum / 3;
//   },
//   set avg(para) {
//     this.avg = para;
//   },
//   out: function() {
//     console.log(`${this.name}의 총점은 ${this.sum}점 이고, 평균은 ${this.avg}점 입니다.`);
//   }
// };

// const student1 = new Student("철수", 92, 81, 77);
// const student2 = new Student("영희", 72, 95, 98);
// const student3 = new Student("민혁", 80, 86, 84);

// student1.out();
// student2.out();
// student3.out();

// TODO: 문제 1.
function Student(kor, eng, math) {
  this._kor = kor;
  this._eng = eng;
  this._math = math;
};

Student.prototype = {
  sum : function() {
    return this._kor + this._eng + this._math;
  },

  avg : function() {
    return this.sum() / 3;
  }
};

const grade = [
  ["철수", 92, 81, 77],
  ["영희", 72, 95, 98],
  ["민혁", 80, 86, 84]
];

for(const item of grade) {
  const s = new Student(item[1], item[2], item[3]);
  console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
}


// FIXME: 문제 2.

// function Rectangle(width, height) {
//   this._width = width;
//   this._height = height;
// };

// Rectangle.prototype.getAround = function() {
//   this.width
// }

// TODO: 문제 2.
function Rectangle() {
  this._width = null;
  this._height = null;
};

Rectangle.prototype = {
  get width() {
    return this._width;
  },
  set width(para) {
    this._width = para;
  },
  get height() {
    return this._height;
  },
  set height(para) {
    this._height = para;
  },
  getAround: function() {
    return (this.width + this.height) * 2;
  },
  getArea: function() {
    return this.width * this.height;
  }
};

const result = new Rectangle();
result.width = 10;
result.height = 5;

console.log(`둘레의 길이는 ${result.getAround()}이고, 넓이는 ${result.getArea()}입니다.`);



// FIXME: 문제 3.

class Student {

  constructor(kor, eng, math) {
    this.kor = kor;
    this.eng = eng;
    this.math = math;
  }

  sum() {
    return this.kor + this.eng + this.math;
  }

  avg() {
    return (this.kor + this.eng + this.math) / 3
  }

}

const s1 = new Student(92, 81, 77);
const s2 = new Student(72, 95, 98);
const s3 = new Student(80, 86, 84);

console.log(`철수의 총점은 ${s1.sum()}점 이고 평균은 ${s1.avg()}점 입니다.`);
console.log(`영희의 총점은 ${s2.sum()}점 이고 평균은 ${s2.avg()}점 입니다.`);
console.log(`민혁의 총점은 ${s3.sum()}점 이고 평균은 ${s3.avg()}점 입니다.`);


// FIXME: 문데 3-1

class Rectangle {
  constructor() {
    this._width = null;
    this._height = null;
  }

  get width() {
    return this._width;
  }

  set width(para) {
    this._width = para;
  }

  get height() {
    return this._height;
  }
  set height(para) {
    this._height = para;
  }
  getAround() {
    return (this.width + this.height) * 2;
  }
  getArea() {
    return this.width * this.height;
  }
}

const result = new Rectangle();
result.width = 10;
result.height = 5;

console.log(`둘레의 길이는 ${result.getAround()}이고, 넓이는 ${result.getArea()}입니다.`);

// const grade = [
//   ["철수", 92, 81, 77],
//   ["영희", 72, 95, 98],
//   ["철수", 80, 86, 84]
// ];

// for(const item of grade) {
//   const s = new Student(item[1], item[2], item[3]);
//   console.log("%s의 총점은 %d점 이고 평균은 %d점 입니다.", item[0], s.sum(), s.avg());
// }