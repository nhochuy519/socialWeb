import { configureStore } from "@reduxjs/toolkit";

import chatReduder from "./chatSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    chat: chatReduder,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
