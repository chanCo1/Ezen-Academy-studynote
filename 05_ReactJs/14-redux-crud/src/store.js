import { configureStore } from '@reduxjs/toolkit';
import DepartmentSlice from './slices/DepartmentSlice';

const store = configureStore({
  reducer: {
    DepartmentSlice: DepartmentSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default store;