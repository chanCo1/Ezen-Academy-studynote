function ajaxPromiseHelper(url, method="GET") {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.onreadystatechange = e => {
      const ajax = e.target;

      if(ajax.readyState == XMLHttpRequest.DONE) {
        if(ajax.status == 200) {
          const json = JSON.parse(ajax.responseText);
          // promise 기법은 콜백함수를 줄이기 위해 등장한 기법.
          // 성공했을 경우 콜백 호출아닌 resolve를 호출한다.
          // -> 바깐 실행부분의 .then(function() {...}) 영역의 콜백함수를 대신 호출해줌
          resolve(json);
        } else {
          const s = parseInt(ajax.status / 100);
          let msg = null;

          if(s == 4) {
            msg = "요청 주소가 잘못되었습니다.";
          } else if(s == 5) {
            msg = "서버의 응답이 없습니다."
          } else {
            msg = "요청에 실패했습니다."
          }

          // 실패했을 경우 콜백이 호출이 아닌 reject 호출함.
          // -> 바깥 실행부분의 .catch(fuction(e) {...}) 영역의 콜백함수를 대신 호출해줌
          reject({status: ajax.status, text: ajax.statusText, msg: msg});
        }
      } // end if
    };
    xhr.send();
  });
};