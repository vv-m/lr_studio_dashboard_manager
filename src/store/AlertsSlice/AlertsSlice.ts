import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import alertsSliceTypes, { TPageAlert } from './AlertsSlice.model';

const initialState: alertsSliceTypes = {
  pageAlerts: [],
};

const alertsSlice = createSlice({
  name: 'alerts',
  initialState,

  reducers: {
    addAlert(state, action: PayloadAction<TPageAlert>) {
      state.pageAlerts.push(action.payload);
    },
    removeAlert(state, action: PayloadAction<number>) {
      state.pageAlerts = state.pageAlerts.filter((alert) => alert.id !== action.payload);
    },
    removeAllAlert(state) {
      state.pageAlerts = [];
    },
  },
});

export const { addAlert, removeAlert, removeAllAlert } = alertsSlice.actions;

export default alertsSlice.reducer;
