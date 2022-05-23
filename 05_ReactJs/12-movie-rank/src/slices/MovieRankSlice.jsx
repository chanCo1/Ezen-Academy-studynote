import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
const API_KEY = '6d43813d9a215a631e29171efd50c890';

export const getMovieRank = createAsyncThunk('MovieRankSlice/getMovieRank', async (payload, {rejectWithValue}) => {
  let result = null;

  try {
    result = await axios.get(API_URL, {
      params: {
        key: API_KEY,

        // 컨트롤러에서 전달하는 파라미터는 payload로 전달된다.
        // -> 단일 값인 경우 payload 자체가 그 값.
        // -> JSON인 경우 payload가 JSON이 된다.
        targetDt: payload.targetDt,
      }
    });

    // 에러가 발생하더라고 HTTP 상태코드는 200으로 응답이 오기 때문에 catch문이 동작하지 않는다
    // 그러므로 직접 에러를 감지해야 하낟.
    if(result.data.faultInfo !== undefined) {
      const err = new Error();
      err.reponse = { status: 500, statusText: result.data.faultInfo.message };
      throw err;
    }

  } catch(err) {
    result = rejectWithValue(err.reponse);
  }
  return result;
});

const MovieRankSlice = createSlice({
  name: 'movieRank',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: {
    [getMovieRank.pending]: (state, {payload}) => {
      return {...state, loading: true}
    },
    [getMovieRank.fulfilled]: (state, {payload}) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },
    [getMovieRank.rejected]: (state, {payload}) => {
      return {
        data: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : 'Server Error',
        },
      }
    },
  }
});

export default MovieRankSlice.reducer;