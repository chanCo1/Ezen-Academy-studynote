// 배열을 저장할 빈 변수 선언
let myArr1;

// 배열의 할당
myArr1 = [1,3.14,true,"hello"];
console.log(myArr1);

// 선언과 할당의 통합
let myArr2 = [1,3.14,true,"hello2"];
console.log(myArr2);

const len = myArr2.length;
console.log("배열의 원소 수 = %d", len);

// 5라는 값을 원소로 갖는 한 칸으로 구성된 배열 만들기
let myArr3 = [5];
console.log(myArr3);

// 값이 존재하지 않는 5개의 빈 칸을 갖는 배열 만들기
let myArr4 = new Array(5);
console.log(myArr4);


// TODO: 2/14 자바스크립트 시험 ..

// 여러개의 값을 하나로 묶어버린게 배열이다.

// new Array(100)은 비어있는 100칸 짜리 배열을 만드는 것..

// 없는 배열을 불러 올 땐 undefined