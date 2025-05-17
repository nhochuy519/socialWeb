import { createSlice } from "@reduxjs/toolkit";

interface ChatState {
  isOpen: boolean;
}

const initialState: ChatState = {
  isOpen: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openChat(state) {
      state.isOpen = true;
    },
    closeChat(state) {
      state.isOpen = false;
    },
  },
});

export const { openChat, closeChat } = chatSlice.actions;
export default chatSlice.reducer;
