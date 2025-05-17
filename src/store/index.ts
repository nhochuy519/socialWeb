import { configureStore } from "@reduxjs/toolkit";

import chatReduder from "./chatSlice";

export const store = configureStore({
  reducer: {
    chatReduder,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
