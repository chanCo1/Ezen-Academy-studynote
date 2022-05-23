import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// TODO: 비동기 처리 함수 구현
export const getList = createAsyncThunk('news/getList', async (payload, {rejectWithValue}) => {
  let result = null;

  try {
    result = await axios.get('http://localhost:3001/news');
  } catch(e) {
    result = rejectWithValue(e.response);
  }

  return result;
});

// TODO: Slice 정의
const NewsListSlice = createSlice({
  name: 'newsList',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: {
    [getList.pending]: (state, {payload}) => {
      return {...state, loading: true}
    },

    [getList.fulfilled]: (state, {payload}) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },

    [getList.rejected]: (state, {payload}) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error',
        }
      }
    }
  }
});

export default NewsListSlice.reducer;