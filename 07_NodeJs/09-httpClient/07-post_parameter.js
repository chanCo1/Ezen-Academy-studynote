import axios from "axios";
import FormData from 'form-data';

(async () => {
  let result = null;
  try {
    // post 방식으로 전송할 파라미터 정의 -> 가상의 form 태그를 생성
    const form = new FormData();

    // form 태그에 input 요소 추가와 같은 원리
    form.append('num1', 200);
    form.append('num2', 300);

    // POST 방식 전송
    const response = await axios.post('http://itpaper.co.kr/data/post.php', form, {
      headers: form.getHeaders()
    });
    result = response.data;

  } catch(e) {
    const errorMsg = `[${e.response.status}] ${e.response.statusText}`;
    console.error(errorMsg);
    return;
  }

  console.log('다른 백엔드로 부터 응답 받은 결과 값: ' + result);
})();