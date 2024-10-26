import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ModalSliceType from './ModalsSlice.model';

const initialState: ModalSliceType = {
  modals: {
    createApplication: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    setModals(
      state,
      action: PayloadAction<{ key: keyof ModalSliceType['modals']; value: boolean }>,
    ) {
      state.modals = {
        ...state.modals,
        [action.payload.key]: action.payload.value,
      };
    },
  },
});

export const { setModals } = modalSlice.actions;

export default modalSlice.reducer;
