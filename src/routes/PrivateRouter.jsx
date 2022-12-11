import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export function PrivateRouter() {
  const auth = useSelector((state) => state.auth.isSignIn);
  return auth ? <Outlet /> : <Navigate to="/signup" />;
}
