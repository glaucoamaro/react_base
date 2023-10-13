import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRouter from './privateRouter';
import Login from '../pages/Login';
import Error404 from '../pages/Error404';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRouter redirectTo="/login" Title="SLA" Des="SLA 22222">
            <Login />
          </PrivateRouter>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
