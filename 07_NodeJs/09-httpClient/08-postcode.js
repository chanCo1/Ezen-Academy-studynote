import axios from "axios";

(async () => {
  let json = null;

  try{
    const response = await axios.get('http://www.juso.go.kr/addrlink/addrLinkApi.do', {
      params: {
        confmKey: 'devU01TX0FVVEgyMDIyMDYyNzE1MjU0MTExMjczNjA=',  // 발급 받은 승인키
        currentPage: 1,  // 현재 페이지 번호
        countPerPage: 20,  // 페이지당 출력할 결과 Row 수
        keyword: '강남',  // 주소 검색어
        resultType: 'json',  // 검색결과형식 설정 (xml or json)
      }
    });

    if(response.data.results?.common?.errorCode !== '0') {
      const error = new Error();
      error.response = {
        stauts: response.data.results.common.errorCode,
        statusText: response.data.results.common.errorMessage,
      }

      throw error;
    }

    console.log(response.data)
    json = response.data;

  } catch(e) {
    const errorMsg = `[${e.response.status}] ${e.response.statusText}`;
    console.error(errorMsg);
    return;
  }

  json.results.juso.map((v,i) => {
    console.log(v.zipNo);
    console.log(v.jibunAddr);
    console.log(v.roadAddr);
    console.debug();
  })
})();