import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// TODO: 비동기 처리 함수 구현
export const getList = createAsyncThunk('department/getList', async (payload, {rejectWithValue}) => {
  let result = null;

  try {
    result = await axios.get('http://localhost:3001/department');
  } catch(error) {
    // rejectWithValue -> 에러 발생시 사용
    result = rejectWithValue(error.response);
  }

  return result;
});

// TODO: Slice 정의 (Action함수 + Reducer의 개념)
const departmentSlice = createSlice({
  name: 'department',
  initialState: {
    data: null,         // Ajax 처리를 통해 수신된 데이터
    loading: false,     // 로딩 여부
    error: null,        // 에러 정보
  },

  // 내부 action 및 동기 action을 할때는? (ajax와 상관이 없을 때)
  reducers: {},

  // 외부 action 및 비동기 action을 할때는? (ajax용)
  // getList에서 파생된 3개의 함수 -> 1세트
  extraReducers: {
    [getList.pending]: (state, {payload}) => {  // pending -> 로딩
      return {...state, loading: true}
    },

    [getList.fulfilled]: (state, {payload}) => {  // fulfilled -> ajax완료
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },

    [getList.rejected]: (state, {payload}) => {  // rejected -> error
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.staus ? payload.staus : 500,
          message: payload?.stausText ? payload.stausText : 'Server Error'
        }
      }
    }
  }
});

export default departmentSlice.reducer;