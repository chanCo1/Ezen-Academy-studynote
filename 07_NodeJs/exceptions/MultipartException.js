// const multer = require("multer");
import multer from 'multer';

class MultipartException extends Error {
  constructor(err) {
    let msg = null;

    if(err instanceof multer.MulterError) {
      switch (err.code) {
        case 'LIMIT_FILE_COUNT':
          msg = '업로드 가능한 파일 수 를 초과했습니다.';
          break;
        case 'LIMIT_FILE_SIZE':
          msg = '압로드 가능한 파일 용량을 초과했습니다.';
          break;
        default:
          msg = '파일 업로드 도중 알 수 없는 에러가 발생했습니다.';
          break;
      } 
    }

    super(msg);
    this._statusCode = 500;
  }

  get statusCode() {
    return this._statusCode;
  }
}

export default MultipartException;