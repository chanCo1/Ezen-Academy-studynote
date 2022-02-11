
class Customer {
  constructor(name) {
    this._name = name;
  }

  // 모든 객체가 공유하는 정적 멤버변수 정의
  static count = 0;

  // 정적 멤버변수에 대한 관리를 위해서 함수 정의
  in() {
    // 스태틱은 클래스이름. 으로 접근
    Customer.count++;
  }

  out() {
    Customer.count--;
  }

  showState() {
    console.log(`손님의 이름: ${this._name}, 전체 손님 수: ${Customer.count}`);
  }
};

console.group('손님1');
const c1 = new Customer("Andy");
c1.in();

c1.showState();
console.groupEnd();

console.group('손님2');
const c2 = new Customer("Lucy");
c2.in();

c2.showState();
console.groupEnd();

console.group('손님3');
const c3 = new Customer("Josh");
c3.in();

c1.showState();
// c2.showState();
// c3.showState();
console.groupEnd();

console.group('손님2 out');
c1.out();
c2.out();

c1.showState();
c2.showState();
c3.showState();
console.groupEnd();



