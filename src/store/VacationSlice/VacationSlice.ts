import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import VacationSliceType, { IInfoVacation } from './VacationSlice.model';

const initialState: VacationSliceType = {
  vacation: null,
};

const vacationSlice = createSlice({
  name: 'vacation',
  initialState,

  reducers: {
    setVacation(state, action: PayloadAction<IInfoVacation[] | null>) {
      state.vacation = action.payload;
    },
    addVacation(state, action: PayloadAction<IInfoVacation>) {
      state.vacation = [...(state.vacation || []), action.payload];
    },
  },
});

export const { setVacation, addVacation } = vacationSlice.actions;

export default vacationSlice.reducer;
