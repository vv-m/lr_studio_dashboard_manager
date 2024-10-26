import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './ModalsSlice/ModalsSlice';
import vacationSlice from './VacationSlice/VacationSlice';
import alertsSlice from './AlertsSlice/AlertsSlice';

const store = configureStore({
  reducer: {
    modals: modalSlice,
    vacation: vacationSlice,
    alerts: alertsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
