// URI 는 URL 의 상위 개념

/*
encodeURI(string)
주어진 문자열을 URL에 포함시키기에 적절한 형태로 변환(==인코딩)하는 처리
인코딩하지 않는 문자.
  A-Z, a-z, 0-9, ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #

주소창에 한글이 절대 나올 수 없다
*/

const set1 = ";,/?:@&=+$#";  // 예약문자
const set2 = "-_.!~*'()";  // 비예약문자
const set3 = "ABC abc 123";  // 알파벳 및 숫자, 공백 (공백은 %20 으로 인코딩)
const set4 = "자바스크립트";

// 특수문자 (예약문자 및 비예약문자)를 변환하지 못하기 때문에 UTF-8 환경에서는 사용이 불가
const enc1 = encodeURI(set1);
const enc2 = encodeURI(set2);
const enc3 = encodeURI(set3);
const enc4 = encodeURI(set4);

console.group('encodeURI');
console.log(enc1);  // ;,/?:@&=+$#
console.log(enc2);  // -_.!~*'()
console.log(enc3);  // ABC%20abc%20123
console.log(enc4);  // %EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8
console.groupEnd();

// 인코딩 된 문자열을 원래의 문자열로 역변환 (디코딩)
console.group('decodeURI');
console.log(decodeURI(enc1));  // ;,/?:@&=+$#
console.log(decodeURI(enc2));  // -_.!~*'()
console.log(decodeURI(enc3));  // ABC abc 123
console.log(decodeURI(enc4));  // 자바스크립트
console.groupEnd();