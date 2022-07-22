import { configureStore } from "@reduxjs/toolkit";
import ProfessorSlice from "./slice/ProfessorSlice";

const Store = configureStore({
  reducer: {
    Professor: ProfessorSlice,
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default Store;