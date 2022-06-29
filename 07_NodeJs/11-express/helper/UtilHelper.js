/**
 * @Filename: UtilHelper.js
 * @Description: 백엔드 개발시 자주 사용되는 독립 함수들 모음
 * @Author:
 */

import { networkInterfaces } from 'os';

const myIp = () => {
  const ipAddress = [];
  const nets = networkInterfaces();

  for(const attr in nets) {
    const item = nets[attr];
    
    item.map((v,i) => {
      if (v.family == 'IPv4' && v.address != '127.0.0.1') {
      // if (v.family == 4 && v.address != '127.0.0.1') {
        ipAddress.push(v.address);
      }
    });
  }
  return ipAddress;
};

const urlFormat = (urlObject) => String(Object.assign(new URL('http://a.com'), urlObject));

export { myIp, urlFormat };