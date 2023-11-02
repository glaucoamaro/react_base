import React from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRouter from './privateRouter';
import Error404 from '../pages/Error404';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Student from '../pages/Student';
import Students from '../pages/Students';
import StudentImages from '../pages/StudentImages';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/register/" element={<Register />} />
      <Route path="/login/" element={<Login />} />
      <Route
        path="/student/:id/edit/"
        element={
          <PrivateRouter redirectTo="/login/">
            <Student />
          </PrivateRouter>
        }
      />
      <Route
        path="/student/"
        element={
          <PrivateRouter redirectTo="/login/">
            <Student />
          </PrivateRouter>
        }
      />
      <Route
        path="/images:id/"
        element={
          <PrivateRouter redirectTo="/login/">
            <StudentImages />
          </PrivateRouter>
        }
      />

      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
