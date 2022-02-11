// 파라미터를 멤버변수에 복사하는 생성자

const User2 = function(id, email) {
  this._id = id;
  this.email = email;
};

const foo = new User2("hello", "hello@javascript.com");
const bar = new User2("world", "world@javascript.com");

console.log(foo);
console.log(bar);


const example = function(p1, p2) {
  this._p1 = p1;
  this._p2 = p2;
};

const a = new example("Hi", "Bye");
const b = new example("Hello", "World");

console.log(a);
console.log(b);