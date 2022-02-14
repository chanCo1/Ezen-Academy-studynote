// 배열을 탐색하는 방법 //

// 테스트를 위한 배열
const arr = [10,20,30,40,50];

// 배열에 대한 반복 처리(1) - 배열의 원소 스캔하기 //
for(let i = 0; i < arr.length; i++) {
  if(i == 3) {
    console.log("반복중단!!");
    break;
  }
  console.log(`${i}번째 원소 -> ${arr[i]}`);
}
console.log("----------------");

// 콜백함수에게 배뎔의 값과 인덱스를 전달한다.
// 콜백함수는 원소의 수 만큼 순차적으로 실행된다.
// forEach(value, index)
// 브레이크는 포, 와일문 안에서만 가능
// 함수의 중단은 return
arr.forEach((v, i) => {
  if(i == 3) {
    console.log("반복중단!!");
    return;
  }
  console.log("%d번째 원소 -> %d", i ,v);
});
console.log("----------------");


// 배열에 대한 반복처리(2) - 탐색 중단
// 중단할 일 있으면 some, 없으면 forEach
arr.some((v,i) => {
  // some 함수는 콜백함수가 true를 리턴하는 순간 탐색을 중단
  if(i == 3) {
    console.log("반복중단!!");
    return true;
  }
  console.log("%d번째 원소 -> %d", i ,v);
})
console.log("----------------");


// 배열에 대한 반복 처리(3) - 콜백함수에서 리턴하는 값들을 하나의 배열로 묶기 //

// 전통적인 방법
const d1 = [];
for(let i = 0; i < arr.length; i++) {
  // 배열의 맨뒤에 새로운 원소 추가 -> 확장
  if(arr[i] % 4 == 0) {
    d1.push(arr[i]);
  }
}
console.log(d1);

// forEach 사용하는 방법
const d2 = [];
arr.forEach((v, i) => {
  if(v % 4 == 0) {
    d2.push(v);
  }
});
console.log(d2);

// map 함수에 전달된 콜백이 리턴하는 값들을 하나의 배열로 묶어서 변수에 저장
const hello1 = arr.map(function(v, i) {
  return v +1;
});
console.log(hello1);

// 콜백함수를 화살표 함수로 변환(ES6)
const hello2 = arr.map((v, i) => {
  return v +2;
});
console.log(hello2);

// 화살표 함수는 처리로직이 한줄인 경우 {} ; return 키워드 생략 가능
const hello3 = arr.map((v, i) => v +3)
console.log(hello3);
