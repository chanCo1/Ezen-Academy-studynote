/**
 * @fileName    : RegexHelper.jsx
 * @author      : 박찬우
 * @description : 정규표현식을 통해 검사 수행
 */

import BadRequestException from '../exceptions/BadRequestException';

class RegexHelper {
  /**
   * TODO: 값의 존재 여부를 검사한다.
   * @param {HTMLElement} field    검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg           값이 없을 경우 표시할 메세지 내용
   */
  value(field, msg) {
    const content = field.value;

    if (
      content === undefined ||
      content === null ||
      (typeof content === 'string' && content.trim().length === 0)
    ) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  /**
   * TODO: 입력값이 지정된 글자수를 초과했는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {int} len             최대 글자 수
   * @param {string} msg          값이 없을 경우 표시될 메세지
   */
  maxLength(field, len, msg) {
    this.value(field, msg);

    const content = field.value;

    // 입력값에 대한 정규표현식 검사가 실패라면?
    if (content.trim().length > len) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  /**
   * TODO: 입력값이 지정된 글자수를 미만인지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {int} len             최대 글자 수
   * @param {string} msg          값이 없을 경우 표시될 메세지
   */
  minLength(field, len, msg) {
    this.value(field, msg);

    const content = field.value;

    // 입력값에 대한 정규표현식 검사가 실패라면?
    if (content.trim().length < len) {
      throw new BadRequestException(msg, field);
    }
    return true;
  }

  /**
   * TODO: 두 값이 동일한지 검사한다.
   * @param {string} origin   원본에 대한 CSS 선택자
   * @param {string} compare  검사 대상에 대한 CSS 선택자
   * @param {string} msg      검사에 실패할 경우 표시할 메세지
   */
  compareTo(origin, compare, msg) {
    this.value(origin, msg);
    this.value(compare, msg);

    let src = origin.value.trim();
    let dsc = compare.value.trim();

    if (src !== dsc) {
      throw new BadRequestException(msg, origin);
    }

    return true;
  }

  /**
   * TODO: 라디오나 체크박스가 선택된 항목인지 확인한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  check(field, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length === 0) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  /**
   * TODO: 라디오나 체크박스의 최소 선택 갯수를 제한한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  checkMin(field, len, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length < len) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  /**
   * TODO: 라디오나 체크박스의 최대 선택 갯수를 제한한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  checkMax(field, len, msg) {
    const checkedItem = Array.from(field).filter((v, i) => v.checked);

    if (checkedItem.length > len) {
      throw new BadRequestException(msg, field[0]);
    }
  }

  /**
   * TODO: 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElemnet} field    검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg           표시할 메세지
   * @param {object} regexHelper   검사할 정규표현식
   */
  field(field, msg, regexHelper) {
    this.value(field, msg);

    // 입력값에 대한 정규표현식 검사가 실패라면?
    if (!regexHelper.test(field.value.trim())) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  /**
   * TODO: 아이디 입력값이 정규표현식을 충족하는지 검사한다. - 영문, 한글, 5~20자리
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  idCheck(field, msg) {
    return this.field(field, msg, /^[a-z0-9]{5,20}$/);
  }

  /**
   * TODO: 비밀번호 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  pwCheck(field, msg) {
    return this.field(field, msg, /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_+]).{8,20}$/);
  }

  /**
   * TODO: 이름 입력값이 정규표현식을 충족하는지 검사한다. - 영문,한글,2~20자리
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  nameCheck(field, msg) {
    return this.field(field, msg, /^[a-z가-힣]{2,20}$/);
  }

  /**
   * TODO: 생년 입력값이 정규표현식을 충족하는지 검사한다. - 숫자, 4자리
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  birthYear(field, msg) {
    return this.field(field, msg, /^[0-9]{4}$/);
  }

  /**
   * TODO: 생일 입력값이 정규표현식을 충족하는지 검사한다. - 숫자, 1 ~ 2자리
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  birthDate(field, msg) {
    return this.field(field, msg, /^[0-9]{1,2}$/);
  }

  /**
   * TODO: 이메일 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  emailCheck(field, msg) {
    const content = document.queryField(field).value;

    if (content.length > 1) {
      return this.field(
        field,
        msg,
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      );
    }
  }

  /**
   * TODO: 핸드폰 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  cellphone(field, msg) {
    return this.field(field, msg, /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/);
  }

  /**
   * TODO: 집 전화 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  telphone(field, msg) {
    return this.field(field, msg, /^\d{2,3}\d{3,4}\d{4}$/);
  }

  /**
   * TODO: 집 전화, 핸드폰 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  phone(field, msg) {
    this.value(field, msg);

    const content = field.value.trim();
    let check1 = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/; // 핸드폰형식
    let check2 = /^\d{2,3}\d{3,4}\d{4}$/; // 집전화 형식

    // 형식이 핸드폰도 아니고 집전화도 아니라면
    if (!check1.test(content) && !check2.test(content)) {
      throw new BadRequestException(msg, field);
    }

    return true;
  }

  /**
   * TODO: 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  num(field, msg) {
    return this.field(field, msg, /^[0-9]*$/);
  }

  /**
   * TODO: 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  eng(field, msg) {
    return this.field(field, msg, /^[a-zA-Z]*$/);
  }

  /**
   * TODO: 영문으로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  engNum(field, msg) {
    return this.field(field, msg, /^[a-zA-Z0-9]*$/);
  }

  /**
   * TODO: 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  kor(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣]*$/);
  }

  /**
   * TODO: 한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <input>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  korNum(field, msg) {
    return this.field(field, msg, /^[ㄱ-ㅎ가-힣0-9]*$/);
  }

  /**
   * TODO: 인증번호 입력값이 정규표현식을 충족하는지 검사한다.
   * @param {HTMLElement} field   검사할 대상에 대한 <INPUT>요소의 DOM 객체
   * @param {string} msg          검사에 실패할 경우 표시할 메세지
   */
  authCheck(field, msg) {
    return this.field(field, msg, /^[0-9]{6}$/);
  }

  // TODO: exam10에 쓰일 정규식
  checkName(field, msg) {
    return this.field(field, msg, /^[가-힣]{2,10}$/);
  }
  checkId(field, msg) {
    return this.field(field, msg, /^(?=.*[a-zA-Z])(?=.*[0-9]).{2,20}$/);
  }
  checkMoney(field, msg) {
    return this.field(field, msg, /^[0-9]{1,9999}$/);
  }
}

export default new RegexHelper();
