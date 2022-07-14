/**
 * @filename: ProfessorController.js
 * @author: 박찬우
 * @description:
 */

import { pagination } from '../helper/UtilHelper.js';
import express from 'express';
import RegexHelper from '../helper/RegexHelper.js';
import ProfessorService from '../service/ProfessorService.js';

const ProfessorController = () => {
  const url = '/professor';
  const router = express.Router();

  /** 전체 목록 조회 */
  router.get(url, async (req, res, next) => {
    // 검색어 파라미터
    const query = req.get('query');
    // 페이지 번호 파라미터 (기본값은 1)
    const page = req.get('page', 1);
    // 한 페이지에 보여질 목록 수 받기 (기본값은 10)
    const rows = req.get('rows', 10);

    const params = {};
    if(query) {
      params.name = query;
    }

    let json = null;
    let pageInfo = null;

    try {
      // 전체 데이터 수 얻기
      const totalCount = await ProfessorService.getCount(params);
      pageInfo = pagination(totalCount, page, rows);

      params.offset = pageInfo.offset;
      params.listCount = pageInfo.listCount;

      json = await ProfessorService.getList(params);

    } catch (e) {
      return next(e);
    }

    res.sendResult({ pagination: pageInfo, item: json });
  });

  /** 단일행 조희 */
  router.get(`${url}/:profno`, async (req, res, next) => {
    // 파라미터 받기
    const profno = req.get('profno');

    // 파라미터 유효성검사
    try {
      RegexHelper.value(profno, '교수번호가 없습니다.');
      RegexHelper.num(profno, '교수번호가 잘 못 되었습니다.');
    } catch (err) {
      return next(err);
    }

    // 데이터 조회
    let json = null;

    try {
      json = await ProfessorService.getItem({
        profno: profno,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ item: json });
  });

  /** 데이터 추가 */
  router.post(url, async (req, res, next) => {
    // 파라미터 받기
    const name = req.post('name');
    const userid = req.post('userid');
    const position = req.post('position');
    const sal = req.post('sal');
    const hiredate = req.post('hiredate');
    const comm = req.post('comm');
    const deptno = req.post('deptno');

    // 유효성 검사
    try {
      RegexHelper.value(name, '이름을 입력해주세요');
      RegexHelper.value(userid, '아이디를 입력해주세요');
      RegexHelper.value(position, '직급을 입력해주세요');
      RegexHelper.value(sal, '급여를 입력해주세요');
      RegexHelper.value(hiredate, '입사일을 입력해주세요');
      RegexHelper.value(comm, '수당을 입력해주세요');
      RegexHelper.value(deptno, '학과번호를 입력해주세요');
    } catch (err) {
      return err;
    }

    // 데이터 저장
    let json = null;

    try {
      json = await ProfessorService.addItem({
        name: name,
        userid: userid,
        position: position,
        sal: sal,
        hiredate: hiredate,
        comm: comm,
        deptno: deptno,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ item: json });
  });

  /** 데이터 수정 */
  router.put(`${url}/:profno`, async (req, res, next) => {
    // 파라미터 받기
    const profno = req.get('profno');
    const name = req.put('name');
    const position = req.put('position');

    // 유효성 검사
    try {
      RegexHelper.value(profno, '교수번호가 없습니다.');
      RegexHelper.value(name, '이름이 없습니다.');
      RegexHelper.value(position, '직급이 없습니다.');
    } catch (err) {
      return err;
    }

    // 데이터 저장
    let json = null;

    try {
      json = await ProfessorService.editItem({
        profno: profno,
        name: name,
        position: position,
      });
    } catch (err) {
      return next(err);
    }

    res.sendResult({ item: json });
  });

  /** 데이터 삭제 */
  router.delete(`${url}/:profno`, async (req, res, next) => {
    // 파라미터 받기
    const profno = req.get('profno');

    // 유효성 검사
    try {
      RegexHelper.value(profno, '교수번호가 없습니다.');
    } catch(err) {
      return(err);
    };

    try {
      await ProfessorService.deleteItem({
        profno: profno,
      });
    } catch(err) {
      console.log(err);
      return next(err);
    }

    res.sendResult();
  });

  return router;
};

export default ProfessorController;


