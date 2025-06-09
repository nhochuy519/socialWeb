import { createSlice } from "@reduxjs/toolkit";

interface Modal {
  isOpen: boolean;
}

const initialState: Modal = {
  isOpen: false,
};

const Modal = createSlice({
  name: "chat",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = Modal.actions;
export default Modal.reducer;
