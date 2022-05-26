import { configureStore } from '@reduxjs/toolkit';
import KakaoSlice from './slice/KakaoSlice';

const Store = configureStore({
  reducer: {
    kakao: KakaoSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store