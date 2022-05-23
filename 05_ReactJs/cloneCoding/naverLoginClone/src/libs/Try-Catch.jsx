import regexHelper from './RegexHelper';

export const regex = (
    id, password, passwordRe, name, birthYear, birthMonth, birthDay , gender, email, userNumber, authNumber
   ) => {    

    try {
      // 아이디검사
      regexHelper.value(id, '이름을 입력하세요.');
      regexHelper.idCheck(id, '아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다.');

      // 비밀번호 검사
      regexHelper.value(password, "비밀번호를 입력하세요.");
      regexHelper.pwCheck(password, "비밀번호는 8~16자의 영문 대 소문자, 숫자와 특수문자만 사용 가능합니다.")
      regexHelper.compareTo(password, passwordRe, "비밀번호 재확인이 일치하지 않습니다.");

      // 이름 검사
      regexHelper.value(name, "이름을 입력하세요.");
      regexHelper.nameCheck(name, "이름은 2글자 이상의 한글과 영문(소문자)만 가능합니다.");

      // 출생년도 검사
      regexHelper.value(birthYear, "생년원일을 입력하세요.");
      regexHelper.birthYear(birthYear, "출생년도는 4자의 숫자만 가능합니다.");

      // 출생월 검사
      regexHelper.value(birthMonth, "출생월을 선택하세요.");

      // 출생일 검사
      regexHelper.value(birthDay, "출생일을 입력하세요.");
      regexHelper.birthDate(birthDay, "출생일은 1~2자의 숫자만 가능합니다.");

      // 성별 검사
      regexHelper.value(gender, "성별을 선택하세요.");

      // 본인 확인 이메일 검사
      regexHelper.emailCheck(email, "이메일 주소를 다시 확인해주세요.");

      // 휴대전화 입력 검사
      regexHelper.value(userNumber, "전화번호를 입력하세요.");
      regexHelper.cellphone(userNumber, "형식에 맞지 않는 번호입니다.");

      // 인증번호 검사
      regexHelper.value(authNumber, "인증번호를 입력하세요.");
      regexHelper.authCheck(authNumber,"인증번호를 다시 확인해주세요.")
    
    } catch(e) {
      window.alert(e.message);
      e.field.focus();
      return;
    }
   }