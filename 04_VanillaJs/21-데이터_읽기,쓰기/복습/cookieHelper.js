class CookieHelper {

  /**
   * 쿠키를 저장한다. 저장시 이름과 같은 내부에서 urlencoding 처리 한다.
   * @param {string} name 
   * @param {string} value 
   * @param {json} options 
   */
  setCookie(name, value, options={}) {
    if(options.path == undefined) {
      options.path = "/";
    };

    // expires 값이 Date 클래스의 객체라면 UTCString 타입으로 변환함. (max-age가 있으면 사용 안해도 된다.)
    if(options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    };

    // 이름="값" 형식으로 저장할 문자열을 만듦
    let updateCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    // options에 명시된 정보가 있다면 추가함
    for(let optionKey in options) {
      updateCookie += ";" + optionKey;

      let optionValue = options[optionKey];

      // 불리언 값이 아니라면? (논리값은 쿠키로 저장이 안된다.)
      if(optionValue !== true) {
        updateCookie += "=" + optionValue;
      }
    };
    // 저장
    document.cookie = updateCookie;
  };

  deleteCookie(name) {
    // max-age 값을 0으로 설정하여 name에 대한 쿠키가 즉시 삭제하도록 변환함
    this.setCookie(name, "", {"max-age" : 0});
  };

  getCookie(name) {
    // 주어진 이름에 대해 "; name=<value>" 패턴을 찾아 <value> 부분만 반환함.
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));

    // 변환할 값이 있다면 decoding을 수행하고 없다면 undefined를 변환함
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };
}