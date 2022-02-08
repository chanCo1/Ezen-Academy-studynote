// 1) JSON에 대한 구조분해 (=비구조 할당)
const object = {a: 1, b: 2};

// const a = object.a;
// const b = object.b;
// JSON(혹은 객체)에서 값들을 추출하여 새로운 상수로 만들어 줌
// --> object에는 {} 안에 명시된 항목과 동일한 key를 갖는 데이터가 존재해야 함 (원본 key 이름과 일치해야 한다)
const {a,b} = object;

console.log(a);
console.log(b);

// 구조분해를 활용하여 필요한 데이터만 추출하기
const data = {
  name: "hello",
  age: 20,
  height: 172,
  weight: 85
};
const {name} = data;
console.log(name);

// data안에 있는 height와 weight를 분해하면서 이름을 h 와 w로 변경
const {name: a, age: b, height: h, weight: w} = data;
console.log(a);
console.log(b);
console.log(h);
console.log(w);
console.log(data);

// 구조분해를 수행한 나머지를 별도로 분리하기
const dummy = {
  a1: 100,
  a2: 200,
  a3: 300,
  a4: 400
};
const {a1, a2, ...etc} = dummy;
console.log(a1);
console.log(a2);
console.log(etc);

// 구조분해를 활용하여 기존 데이터와 추가적인 값을 병합한 새로운 객체 생성
const origin = {name: "javascript", age: 25};
const newdata1 = {...origin, gender: "M"};
console.log(newdata1);

// 구조분해를 통한 새로운 데이터 생성시 원본과 동일한 이름의 속성이 있다면 원본 데이터를 수정한다.
const newdata2 = {...origin, age: 30, gender: "F"};
console.log(newdata2);

// 2) 배열에 대한 구조분해
// 기본 사용
const array = [1,2];
const [one, two] = array;

console.log(one);
console.log(two);

// 구조분해를 수행한 나머지를 별도로 분리하기
[b1, b2, ...rest_b] = [3,1,2,4,6,8,7,5,9];
console.log(b1);
console.log(b2);
console.log(rest_b);
