/**
 * require() 힘수는 module.exports 를 통해서 등록된 기능들을 리턴한다
 * 리턴을 받는 my객체는 module.exports에 확장된 기능들을 참조한다.
 * 파일 경로 명시할 때 확장자 생략 가능
 * 하지만 동일 경로라 하더라도 './'는 생략불가
 * './'가 생략되는 경우 node의 내장 모듈로 인식한다.
 */
const my1 = require('./MyModule1');
// 모듈형태로 참조된 함수를 호출한다.
my1();

const my2 = require('./MyModule2');

console.log(my2.name);
console.log(my2.property.id);
console.log(my2.property.type);

my2.say();

console.log(my2.home.postcode);
console.log(my2.home.adress);

// - - - - - - - - - - - - - - - - - - 클래스 형태의 모듈 참조 
const my3 = require('./MyModule3');

// 리턴된 모듈은 클래스 형태이므로
// 기능의 사용을 위해서는 인스턴스를 생성해야 한다.
const module_obj = new my3();
module_obj.say();


// 객체 형태의 모듈 참조
const my4 = require('./MyModule4');

// 리턴된 모듈은 객체 형태이므로,
// 직접 모듈 내의 기능을 호출할 수 있다.
my4.say();