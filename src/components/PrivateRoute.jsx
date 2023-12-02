import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { HOME_ROUTE } from 'constants/routes';

import { selectAuthenticated } from 'redux/selectors';

const PrivateRoute = ({ children, navigateTo = HOME_ROUTE }) => {
  const authenticated = useSelector(selectAuthenticated);

  return authenticated ? children : <Navigate to={navigateTo} replace />;
};

export default PrivateRoute;
