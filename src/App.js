import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SuspenceFallback from './utils/SuspenceFallback';
import ClientsCheckPage from './pages/ClientsCheckPage';
import IdentificationPage from './pages/IdentificationPage';
import 'antd/dist/reset.css';

function App() {
  return (
    <>
      <Suspense fallback={<SuspenceFallback />}>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          {/* <Route element={<PrivateRoute />}> */}
          <Route
            path="main"
            element={
              // <PrivateRoute>
              <MainPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/client_check/identification"
            element={
              // <PrivateRoute>
              <IdentificationPage />
              // </PrivateRoute>
            }
          />
          <Route
            path="/client_check"
            element={
              // <PrivateRoute>
              <ClientsCheckPage />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
