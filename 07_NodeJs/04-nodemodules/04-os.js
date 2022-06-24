/** (1) OS모듈 참조 */
// import os from 'os';


/** (2) 시스템 기본 정보 */
console.group('시스템 기본 정보');
console.debug('홈 디렉토리: ' + os.homedir);
console.debug('시스템 아키텍처: ' + os.arch);
console.debug('os플랫폼: ' + os.platform);
console.debug('시스템의 hostname: %s ', os.hostname);
console.debug();
console.groupEnd();


/** (3) 사용자 계정 정보 */
const userInfo = os.userInfo();

console.group('시스템 계정 정보');
console.debug('사용자 계정명: ' + userInfo.username);
console.debug('사용자 홈 디렉토리: ' + userInfo.homedir);
console.debug('사용자 쉘 환경: ' + userInfo.shell);
console.debug();
console.groupEnd();


/** (4) 메모리 용량 */
// freemem() -> 시스템에서 현재 사용 가능한 메모리 용량
// totalmem() -> 시스템의 전체 메모리 용량
console.group('메모리 용량');
console.debug('시스템의 메모리: %d(free) / %d(total)', os.freemem(), os.totalmem());
console.debug();
console.groupEnd();


/** (5) CPU 정보 */
// 쿼드코어 -> 4, 듀얼 -> 2
const cpus = os.cpus();

console.group('메모리 용량');
console.debug('CPU 코어 수: ' + cpus.length);
console.debug(cpus);

cpus.map((v,i) => {
  console.group('[%d번째 CPU] %s', i + 1, v.model);
  console.debug('처리속도: %d', v.speed);
  console.debug('수행시간 정보: %j', v.times);
  console.groupEnd();
})


/** (6) 네트워크 정보 */
const nets = os.networkInterfaces();
console.log(nets)

for (const attr in nets) {
  console.group('Network 장치 이름: %s', attr)

  const item = nets[attr];
  item.map((v,i) => {
    console.debug('주소형식: %s', v.family);
    console.debug('IP주소: %s', v.address);
    console.debug('맥주소: %s', v.mac);
    console.debug('넷마스크: %s', v.netmask);
    console.debug();
  })

  console.groupEnd();
}