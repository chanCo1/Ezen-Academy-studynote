/** (1) url 모듈 내에서 url클래스만 참조하기 */
import { URL } from 'url';

/** (2) 주소 문자열을 URL 객체로 만들기 */
const myurl = 'http://localhost:8756/hello/world.html?a=123&b=456#home';

// URL의 각 성분을 분해 -> 자바스크립트 location 객체와 동일한 기능
const location = new URL(myurl);

console.group('URL 성분 정보 확인');
console.debug(location);
console.debug('href: ' + location.href);
console.debug('protocol: ' + location.protocol);
console.debug('host: ' + location.host);
console.debug('hostname: ' + location.hostname);
console.debug('port: ' + location.port);
console.debug('origin: ' + location.origin);
console.debug('pathname: ' + location.pathname);
console.debug('search: ' + location.search);
console.debug('hash: ' + location.hash);
console.groupEnd();