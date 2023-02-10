import './App.css';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import SuspenceFallback from './utils/SuspenceFallback';
import ClientsCheckPage from './pages/ClientsCheckPage';
import IdentificationHOPage from './pages/IdentificationHOPage';

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
            path="/identification"
            element={
              // <PrivateRoute>
              <IdentificationHOPage />
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
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
