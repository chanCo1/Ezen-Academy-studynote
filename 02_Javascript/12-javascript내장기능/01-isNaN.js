/*
isNaN(value)
파라미터로 전달된 값이 NaN일 경우 true, 그렇지 않을 경우 false를 반환한다.
-> 숫자가 아니면 true, 숫자면 false
-> 숫자로 변환 가능한 형식일 경우 false

자바스크립트의 다른 모든 값과 달리, NaN은 연산자(==, ===)를 사용해 판별할 수 없다. 그래서 NaN 여부를 판별하는 함수가 필요하다.
*/

// is로 시작하는 것은 대부분 boolean 값을 찾기 위함이다


// 숫자로 변환할 수 없다고 판단하는 경우
console.log(isNaN(NaN));  // true
console.log(isNaN(undefined));  // true
console.log(isNaN({}));  // true
console.log(isNaN("asdasd"));  // true
console.log(isNaN("123ABC"));  // true  

// 숫자로 변환할 수 있다고 판단하는 경우
console.log(isNaN(true));  // false: 1로 변환해서 판단
console.log(isNaN(null));  // false: 0으로 변환해서 판단
console.log(isNaN(37));  // false
console.log(isNaN("37"));  // flase: "37"은 숫자 37로 변환해서 판단
console.log(isNaN("37.37"));  // flase: "37.37"은 숫자 37로 변환해서 판단
console.log(isNaN(""));  // false: 빈무자열은 0으로 변환해서 판단
console.log(isNaN(" "));  // false: 공백은 0으로 변환해서 판단