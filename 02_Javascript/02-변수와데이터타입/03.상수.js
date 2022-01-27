"use strict";

// 상수
const MY_EXAMPLE = 123;
console.log(MY_EXAMPLE);

// TypeError: Assignment to constant variable.
// 에러. const로 선언된 변수이므로 값을 변경할 수 없다.
MY_EXAMPLE = 456;