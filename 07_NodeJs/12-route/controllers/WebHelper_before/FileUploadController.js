import express from 'express';

// import logger from '../../helper/logHelper.js';
import { initMulter, checkUploadError, createThumbnail, createThumbnailMultiple } from '../../../helper/FileHelper.js';

export default () => {
  const router = express.Router();

  router.route('/upload/single').post((req, res, next) => {
    // name 속성이 myphoto인 경우에 대한 업로드를 수행 -> multer 객체가 생성되고 설정 내용이 실행됨
    // <input type='file' name='myphoto' />
    const uploade = initMulter().single('myphoto');
  
    uploade(req, res, (err) => {
      console.group('request');
      console.debug(req.file);
      console.groupEnd();
  
      // 에러 여부를 확인하여 결과코드와 메세지를 생성한다.
      const { result_code, result_msg } = checkUploadError(err);
  
      // 업로드결과가 성공적이라면 썸네일 생성 함수를 호출한다.
      if(result_code == 200) {
        try {
          createThumbnail(req.file);
        } catch (error) {
          result_code = 500;
          result_msg = '썸네일 이미지 생성에 실패했습니다.';
        }
      };
  
      // 업로드 된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
      const result = {
        rt: result_code,
        remsg: result_msg,
        item: req.file,
      }
  
      res.status(result_code).send(result);
    })
  });
  
  
  // public/07_upload_multi.html
  router.route('/upload/multiple').post((req, res, next) => {
    // 업로드 처리시 배열로 설정
    req.file = [];
  
    // name 속성이 myphoto인 경우에 대한 업로드를 수행 -> multer 객체가 생성되고 설정 내용이 실행됨
    // <input type="file" name="myphoto" />
    const upload = initMulter().array('myphoto');
  
    upload(req, res, (err) => {
      console.group('request');
      console.debug(req.file);
      console.groupEnd();
  
      // 에러여부를 확인하여 결과코드와 메시지를 생성한다.
      let { result_code, result_msg } = checkUploadError(err);
      // console.log(result_code);
  
      // 업로드결과가 성공적이라면 썸네일 생성 함수를 호출한다.
      if(result_code == 200) {
        try {
          createThumbnailMultiple(req.file);
        } catch (error) {
          result_code = 500;
          result_msg = '썸네일 이미지 생성에 실패했습니다.';
        }
      };
  
      // 업로드 된 파일의 정보와 결과 코드 및 결과 메세지를 조합하여 응답정보를 구성한다.
      const result = {
        rt: result_code,
        rtmsg: result_msg,
        item: req.file,
      }
  
      res.status(result_code).send(result);
    });
  });

  return router;
};