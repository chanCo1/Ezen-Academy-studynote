/**
 * @filename: ProfessorSlice.jsx
 * @author: 박찬우
 * @description: 
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cloneDeep } from 'lodash';

import { pending, fulfilled, rejected } from '../Util';

const API_URL = 'http://localhost:3001/professor/';

/** 다중행 데이터 조회를 위한 비동기 함수 */
export const getList = createAsyncThunk('ProfessorSlice/getList', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(API_URL, {
      params: {
        query: payload?.query,
        page: payload?.page,
        rows: payload?.rows
      }
    });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});


/** 단일행 데이터 조회를 위한 비동기 함수 */
export const getItem = createAsyncThunk('ProfessorSlice/getItem', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get(`${API_URL}${payload?.profno}/`);
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});


/** 데이터 저장을 위한 비동기 함수 */
export const postItem = createAsyncThunk('ProfessorSlice/postItem', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.post(API_URL, {
      name: payload.name,
      userid: payload.userid,
      position: payload.position,
      sal: payload.sal,
      hiredate: payload.hiredate,
      comm: payload.comm,
      deptno: payload.deptno,
    });
  } catch (err) {
    alert('교수 등록에 실패했습니다.');
    result = rejectWithValue(err.response);
  }
  console.log(result);
  return result;
});


/** 데이터 수정을 위한 비동기 함수 */
export const putItem = createAsyncThunk('ProfessorSlice/putItem', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.put(`${API_URL}${payload.profno}/`, {
      name: payload.name,
      userid: payload.userid,
      position: payload.position,
      sal: payload.sal,
      hiredate: payload.hiredate,
      comm: payload.comm,
      deptno: payload.deptno,
    });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});


/** 데이터 삭제를 위한 비동기 함수 */
export const deleteItem = createAsyncThunk('ProfessorSlice/deleteItem', async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.delete(`${API_URL}${payload?.profno}/`);
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});



const ProfessorSLice = createSlice({
  name: 'Professor',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    /** 다중행 데이터 조회를 위한 액션 함수 */
    [getList.pending]: pending,
    [getList.fulfilled]: fulfilled,
    [getList.rejected]: rejected,

    /** 단일행 데이터 조회를 위한 액션 함수 */
    [getItem.pending]: pending,
    [getItem.fulfilled]: fulfilled,
    [getItem.rejected]: rejected,

    /** 데이터 저장을 위한 액션 함수 */
    [postItem.pending]: pending,
    [postItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다.(원본이 JSON이므로 깊은 복사를 수행해야 한다.)
      const data = cloneDeep(state.data);
      console.log(data);

      // 새로 저장된 결과를 기존 상태값 배열의 맵 앞에 추가한다.
      data.item.unshift(payload.data.item);

      // 기존의 상태값 배열에서 맨 마지막 항목은 삭제한다.
      data.item.pop();

      return {
        data: data,
        loadin: false,
        error: null,
      }
    },
    [postItem.rejected]: rejected,

    /** 데이터 수정을 위한 액션 함수 */
    [putItem.pending]: pending,
    [putItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
      const data = cloneDeep(state.data);
      console.log(data);

      // 기존의 데이터에서 수정이 요청된 항목의 위치를 검색한다.
      const index = data.item.findIndex(element => element.profno === parseInt(meta.arg.profno));

      if(index !== undefined) {
        data.item.splice(index, 1, payload.data.item);
      }

      return {
        data: data,
        loading: false,
        error: null,
      }
    },
    [putItem.rejected]: rejected,

    /** 데이터 삭제를 위한 액션 함수 */
    [deleteItem.pending]: pending,
    [deleteItem.fulfilled]: (state, { meta, payload }) => {
      // 기존의 상태값을 복사한다. (원본이 JSON이므로 깊은 복사를 수행해야 한다.)
      const data = cloneDeep(state.data);
      console.log(data);

      // 기존의 데이터에서 삭제가 요청된 항목의 위치를 검색한다.
      const index = data.item.findIndex(element => element.profno === parseInt(meta.arg.profno));
      console.log('index = ', index);

      // 검색이 되었다면 해당 항목을 삭제
      if(index !== undefined) {
        data.item.splice(index, 1);
      };

      return {
        data: data,
        loading: false,
        error: null,
      }
    },
    [deleteItem.rejected]: rejected,
  },
});

export default ProfessorSLice.reducer;