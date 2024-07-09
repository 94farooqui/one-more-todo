// src/components/utils/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

  const {user,loading} = useAuth()

  if(loading){
    return <div>Loading...</div>
  }


  // const auth = useSelector((state) => state.auth);
  
  return user ? children : <Navigate to="/welcome" />;
  return (<></>)
};

export default PrivateRoute;
