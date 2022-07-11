import { configureStore } from '@reduxjs/toolkit';
import DepartmentSlice from './slice/DepartmentSlice';

const store = configureStore({
  reducer: {
    Department: DepartmentSlice
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default store;