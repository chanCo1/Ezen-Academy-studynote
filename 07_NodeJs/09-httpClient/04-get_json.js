import axios from 'axios';

const url = 'http://itpaper.co.kr/data/grade_card.json';

(async () => {
  let json = null;
  try {
    // axios를 활용하여 json 데이터 요청
    const response = await axios.get(url);
    json = response.data;
  } catch (e) {
    const errorMsg = `[${e.response.status}] ${e.response.statusText}`;
    console.error(errorMsg);
    return;
  }

  json.grade_card.map((v, i) => {
    console.log(
      `이름: ${v.이름}, 학년: ${v.학년}, 성별: ${v.성별}, 국어: ${v.국어}, 영어: ${v.영어}, 수학: ${v.수학}, 과학: ${v.과학}`
    );
  });
})();
