/**
 * @fileName    : tryCatch.js
 * @author      : 박찬우
 * @description : 정규표현식을 호출하여 입력값에 대한 오류를 판별한다.
 */

document.querySelector("#join_content").addEventListener("submit", e => {
  e.preventDefault();

  const regexHelper = new RegexHelper;

  try {
    // --- 아이디 검사 --- //
    regexHelper.value("#user_id", "아이디를 입력하세요.");
    regexHelper.idCheck("#user_id", "아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다.");


    // --- 비밀번호 검사 --- //
    regexHelper.value("#user_pw", "비밀번호를 입력하세요.");
    regexHelper.pwCheck("#user_pw", "비밀번호는 8~16자의 영문 대 소문자, 숫자만 사용 가능합니다.")
    regexHelper.reconfirm("#user_pw", "#user_pw_re", "비밀번호 재확인이 일치하지 않습니다.");
  

    // --- 이름 검사 --- //
    regexHelper.value("#user_name", "이름을 입력하세요.");
    regexHelper.nameCheck("#user_name", "이름은 2글자 이상의 한글과 영문(소문자)만 가능합니다.");


    // --- 생년월일 검사 --- //
    // 출생년도 검사
    regexHelper.value("#user_birth_year", "생년원일을 입력하세요.");
    regexHelper.birthYear("#user_birth_year", "출생년도는 4자의 숫자만 가능합니다.");

    // 출생월 검사
    regexHelper.value("#user_birth_month", "출생월을 선택하세요.");

    // 출생일 검사
    regexHelper.value("#user_birth_date", "출생일을 입력하세요.");
    regexHelper.birthDate("#user_birth_date", "출생일은 1~2자의 숫자만 가능합니다.");


    // --- 성별 검사 --- //
    regexHelper.value("#gender", "성별을 선택하세요.");


    // --- 본인 확인 이메일 검사 --- //
    regexHelper.emailCheck("#email", "이메일 주소를 다시 확인해주세요.");

    
    // --- 휴대전화 입력 검사 --- //
    regexHelper.value("#tel", "전화번호를 입력하세요.");
    regexHelper.cellphone("#tel", "형식에 맞지 않는 번호입니다.");


    // --- 인증번호 검사 --- //
    regexHelper.value("#auth_num", "인증번호를 입력하세요.");
    regexHelper.authCheck("#auth_num","인증번호를 다시 확인해주세요.")

  } catch(e) {
    alert(e.message);
    console.error(e);
    document.querySelector(e.selector).focus();
    return;
  }

  alert("축하드립니다!!");
});



// 인증번호 받기 //
document.querySelector("#auth_btn").addEventListener("click", e => {
  e.preventDefault();

  const regexHelper = new RegexHelper;

  try {

    // --- 휴대전화 형식 검사 --- //
    // 전화번호를 입력하지 않았을 경우
    regexHelper.cellphone("#tel", "형식에 맞지 않는 번호입니다.");

  } catch(e) {
    alert(e.message);
    console.error(e);
    document.querySelector(e.selector).focus();
    return;
  }

  alert(`인증번호를 발송했습니다.(유효시간 30분)\n인증번호가 오지 않으면 입력하신 정보가 정확한지 확인하여 주세요.\n이미 가입된 번호이거나, 가상전화번호는 인증번호를 받을 수 없습니다.`);

  // HTML의 style 속성 제거
  const backgroundOn = document.querySelector("#auth_num_box");
  backgroundOn.removeAttribute("style");

  // HTML의 disabled 속성 제거
  const disabledOff = document.querySelector("#auth_num");
  disabledOff.removeAttribute("disabled");
});