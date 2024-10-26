import Calculation from 'pages/Calculation';
import Calls from 'pages/Calls/Calls';
import Deals from 'pages/Deals/Deals';
import Statistics from 'pages/Statistics/Statistics';
import WorkSchedule from 'pages/WorkSchedule/WorkSchedule';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/components/Layout/Layout';
import Modals from 'shared/components/Modals/Modals';
import PageAlerts from 'shared/components/PageAlerts/PageAlerts';
import ProtectedRoutes from 'shared/components/ProtectedRoutes';
import { removeAllAlert } from 'store/AlertsSlice/AlertsSlice';
import { RootState } from 'store/index';

const TIME_SHOW_ALERT = 4000;

function App() {
  const dispatch = useDispatch();
  const { pageAlerts } = useSelector((state: RootState) => state.alerts);

  useEffect(() => {
    if (!pageAlerts.length) return undefined;
    const showAlert = setTimeout(() => dispatch(removeAllAlert()), TIME_SHOW_ALERT);
    return () => {
      clearTimeout(showAlert);
    };
  }, [pageAlerts, dispatch]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Statistics />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/calculation" element={<Calculation />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/work_schedule" element={<WorkSchedule />}></Route>
        </Route>
      </Routes>
      <Modals />
      <PageAlerts />
    </>
  );
}

export default App;
