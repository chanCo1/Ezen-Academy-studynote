import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import counterSlice from './slices/CounterSlice';
import departmentSlice from './slices/DepartmentSlice';

const logger = createLogger();

const store = configureStore({
  reducer: {
    // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
    counter: counterSlice,
    department: departmentSlice,
  },

  // 미들웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk 사용시 필수)
  middleware: [...getDefaultMiddleware({serializableCheck: false}), logger],

  // redux-devtools-extention을 사용하지 않을 경우 false 혹은 이 라인을 명시 안함
  devTools: true,
});

export default store;
