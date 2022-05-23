import { configureStore } from '@reduxjs/toolkit';

import NewsListSlice from './slice/NewsListSlice';

const Store = configureStore({
  reducer: {
    newsList: NewsListSlice,
  },

  // middleware: [...getDefaultMiddleware({serializableCheck: false})],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),

  devTools: true,
});

export default Store;