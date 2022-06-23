// ES6 버전의 모듈사용
// 확장자까지 해야 오류거 안난다
import my1 from './MyModule1.js';
my1();

// - - - - - - - - - - - - - -
import { name, property, say, home } from './MyModule2.js';

console.log(name);
console.log(property.id);
console.log(property.type);

say();

console.log(home.postcode);
console.log(home.adress);

// - - - - - - - - - - - - - -
import my3 from './MyModule3.js';

const module_obj = new my3();
module_obj.say();

// - - - - - - - - - - - - - -
import my4 from './MyModule4.js';
my4.say();