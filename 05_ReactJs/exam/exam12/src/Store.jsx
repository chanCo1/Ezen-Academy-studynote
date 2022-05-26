import { configureStore } from "@reduxjs/toolkit";

import TrafficAccSlice from "./slice/TrafficAccSlice";

const Store = configureStore({
  reducer: {
    trafficAcc: TrafficAccSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;