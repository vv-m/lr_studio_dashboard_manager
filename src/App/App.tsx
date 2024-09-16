import Calculation from 'pages/Calculation';
import Calls from 'pages/Calls';
import Statistics from 'pages/Statistics/Statistics';

import { Route, Routes } from 'react-router-dom';
import Layout from 'shared/components/Layout/Layout';
import ProtectedRoutes from 'shared/components/ProtectedRoutes';

function App() {
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
          <Route path=":chapter" element={<Calls />} />
          <Route path="/calculation" element={<Calculation />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
