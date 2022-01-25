// 1) AND
// 전체가 참인 경우만 결과가 참
console.group("1) and (&&)");
  console.log(true && true); // true
  console.log(true && false); // false
  console.log(false && true); // false
  console.log(false && false); // false
console.groupEnd();

// 2) AND 연산 여러개 사용
console.group("2) and 연산 여러개 사용");
  console.log(true && true && true); // true
  console.log(true && true && false); // false
  console.log(false && false && true); // false
  console.log(false && true && true); // false
console.groupEnd();

// 3) OR
// 하나라도 참이 포함되어 있다면 결과는 참
console.group("3) or (||)"); 
  console.log(true || true); // true
  console.log(true || false); // true
  console.log(false || true); // true
  console.log(false || false); // false
console.groupEnd();

// 4) OR 연산 여러개 사용
console.group("4) or 연산 여러개 사용");
  console.log(true || true || true); // true
  console.log(true || true || false); // true
  console.log(false || true || true); // true
  console.log(false || true || true); // true
console.groupEnd();

// 5) 복합 사용
// AND 가 OR 보다 항상 우선이다.
// AND 먼저 확인 후 OR 계산 (AND에서 false 여도 OR에서 true면 true)
console.group("5) 복합 사용");
  console.log(true && true || true); // true
  console.log(true && true || false); // true
  console.log(false && false || true); // true
  console.log(false && true || true); // true

  console.log(true || true && true); // true
  console.log(true || true && false); // true
  console.log(false || false && true); // false
  console.log(false || true && true); // true
console.groupEnd();

// 6) NOT
console.group("6) not");
  let success = true;
  let fail = !success;
  console.log(fail); // false

  let k = 1;
  console.log(!k); // false

  let l = 0;
  console.log(!l); // true

  let str1 = "Hello";
  console.log(!str1); // false

  let str2 = "";
  console.log(!str2); // true

  let str3 = " ";
  console.log(!str3); // false (공백은 true로 본다)

console.groupEnd();