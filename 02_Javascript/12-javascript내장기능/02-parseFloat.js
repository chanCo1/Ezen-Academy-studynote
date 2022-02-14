// 형변환 (type casting)

/*
parseFloat(value)
주어진 값에서 변환한 부동소수점 수(실수)를 리턴
변환할 수 없으면 NaN을 리턴
*/


// +는 소수점을 오른쪽으로 보낸다. ex) e+2 : 소수점을 오른쪽으로 두번 
// -는 소수점을 왼쪽으로 보낸다. ex) e-2 : 소수점을 왼쪽으로 두번 
// 대소문자는 구분하지 않는다.

// 정상적인 경우
console.log(parseFloat(3.14));
console.log(parseFloat("3.14"));  // 문자열은 벗기고 출력
console.log(parseFloat("314e-2"));  // 지수표현  e-2 : 10 -재곱
console.log(parseFloat("0.0314E+2"));

// NaN을 반환하는 경우
console.log(parseFloat("문자열인데요"));