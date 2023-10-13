import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRouter({ children, redirectTo }) {
  const isLogged = true;
  return isLogged ? children : <Navigate to={redirectTo} />;
}

PrivateRouter.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  redirectTo: PropTypes.string.isRequired,
};
