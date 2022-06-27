import axios from "axios";

const url = 'http://itpaper.co.kr/demo/covid19/now.php';

{
  state: [{
    region: "서울",
    confirmed: 62308,
  }]
}

(async () => {
  let json = null;
  try {
    const response = await axios.get(url);
    json = response.data;
  } catch(e) {
    const errorMsg = `[${e.response.status}] ${e.response.statusText}`;
    console.error(errorMsg);
    return;
  }

  let total = 0;

  json.state.map((v,i) => {
    const confirmed = v.confirmed - v.confirmed_prev;
    console.log(`${v.region} 확진자: ${confirmed}`);
    total += confirmed;
  });

  console.log('오늘 총 확진자 수: %d', total);
})();