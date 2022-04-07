/**
 * @fileName    : RegexHelper.js
 * @author      : 박찬우
 * @description : 정규표현식을 통해 검사 수행
 */

class RegexHelper {

  /**
   * --- 값의 존재 여부를 검사한다.
   * @param {string} selector 검사할 대상의 CSS 선택자
   * @param {string} msg      값이 없을 경우 표시할 메세지 내용
   */
  value(selector, msg) {
    const content = document.querySelector(selector).value;
    
    if(content == undefined || content == null || (typeof content == "string" && content.trim().length == 0)) {
      throw new BadRequestException(msg, selector);
    }
    return true;    
  };
  

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   * @param {string} regexExpr  검사할 정규표현식
   */
   field(selector, msg, regexExpr) {
    this.value(selector, msg);

    const content = document.querySelector(selector).value;
    const src = content.trim();

    // 입력값에 대한 정규표현식 검사가 실패라면?
    if(!regexExpr.test(src)) {
      throw new BadRequestException(msg, selector);
    }
    return true;
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  idCheck(selector, msg) {
    return this.field(selector, msg, /^[a-z0-9]{5,20}$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  pwCheck(selector, msg) {
    return this.field(selector, msg, /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+]).{8,20}$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  nameCheck(selector, msg) {
    return this.field(selector, msg, /^[a-z가-힣]{2,20}$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  birthYear(selector, msg) {
    return this.field(selector, msg, /^[0-9]{4}$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  birthDate(selector, msg) {
    return this.field(selector, msg, /^[0-9]{1,2}$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  emailCheck(selector, msg) {
    const content = document.querySelector(selector).value;
    
    if(content.length > 1) {
      return this.field(selector, msg, /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    }
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  cellphone(selector, msg) {
    return this.field(selector, msg, /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
  }

  /**
   * 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {string} selector   검사할 대상의 CSS 선택자
   * @param {string} msg        검사에 실패할 경우 표시할 메세지
   */
  authCheck(selector, msg) {
    return this.field(selector, msg, /^[0-9]{6}$/);
  }


  /**
   * --- 두 값이 동일한지 검사한다.
    * @param {string} origin   원본에 대한 CSS 선택자
    * @param {string} compare  검사 대상에 대한 CSS 선택자
    * @param {string} msg      검사에 실패할 경우 표시할 메세지
    */
    reconfirm(origin, reconfirm, msg) {
      this.value(origin, msg);
      this.value(reconfirm, msg);

      let src = document.querySelector(origin).value.trim();
      let dsc = document.querySelector(reconfirm).value.trim();

      if(src != dsc) {
        throw new BadRequestException(msg, origin);
      }
      return true;
    }
}