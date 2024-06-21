// src/components/utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  // const auth = useSelector((state) => state.auth);
  
  // return auth.isAuthenticated ? children : <Navigate to="/login" />;
  return (<></>)
};

export default PrivateRoute;
