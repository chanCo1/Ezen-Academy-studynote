/** (1) 모듈참조
 * - ES6(Node14) 버전 이후 import 구문을 지원
 * - 참조 가능한 모듈은 내 컴퓨터에 설치된 Node.js 기본모듈, npm 명령으로 설치한 오픈소프 모듈, 내가 작성한 코드
 * - 직접 작성한 코드를 참조할 경우 './', '../' 등을 반드시 적용해야 한다
 * - 모듈 이름 앞에 './' 등의 경로 표시가 없는 경우 기본모듈 혹은 npm명령으로 설치한 모듈로 인식하고, 모듈 저장소를 탐색한다. -> 사용자홈디렉토리/.node_modules
 */

// ES5 스타일 모듈 참조
// const path = require('path');

// ES6 스타일 모듈 참조
// import path from 'path';
// -> 'path'라는 모듈의 모든 기능을 path 객체에 부여 (객체이름 변경 가능, 모듈이름 변경 불가능)
import path from 'path';


/** (2) 경로 합치기
 * 파라미터의 제한이 없다.
 * 조합된 경로 문자열에 해당하는 Path가 실제로 존재하는지는 상관없다.
 */
const currentPath = path.join('C:/Users/hello/world', 'myphoto', '../photo.jpg');
console.debug('path.join >> ' + currentPath);


/** (3) 경로에서 디렉토리, 파일명, 확장자 구분하기 */
const dirname = path.dirname(currentPath);
const basename = path.basename(currentPath);
const extname = path.extname(currentPath);
console.group('경로 분할하기');
console.debug('디렉토리 : %s', dirname);
console.debug('파일이름 : %s', basename);
console.debug('확장자 : %s', extname);
console.groupEnd();


/** (4) 경로정보 파싱 
 * 경로 성분을 JSON 형태로 한번에 분할
*/
const parse = path.parse(currentPath);
console.group('경로정보 파싱');
console.debug('%o', parse);
console.debug('root: ' + parse.root);
console.debug('dir: ' + parse.dir);
console.debug('name: ' + parse.name);
console.debug('ext: ' + parse.ext);
console.groupEnd();