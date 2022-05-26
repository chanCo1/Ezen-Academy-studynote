import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// TODO: 비동기 처리 함수 구현
export const getTrafficAcc = createAsyncThunk('traffic/getTrafficAcc', async (payload, {rejectWithValue}) => {
  let result = null;

  try {
    result = await axios.get('http://localhost:3001/traffic_acc', {
      params: {
        year: payload.year,
      }
    });

    if(result.data.faultInfo !== undefined) {
      const err = new Error();
      err.response = { status: 500, statusText: result.data.faultInfo.message };
      throw err;
    }

  } catch(err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

// TODO: Slice 정의
const TrafficAccSlice = createSlice({
  name: 'trafficAcc',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },

  extraReducers: {
    [getTrafficAcc.pending]: (state, {payload}) => {
      return { ...state, loading: true }
    },

    [getTrafficAcc.fulfilled]: (state, {payload}) => {
      return {
        data: payload?.data,
        loading: false,
        error: null,
      }
    },

    [getTrafficAcc.rejected]: (state, {payload}) => {
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

export default TrafficAccSlice.reducer;
