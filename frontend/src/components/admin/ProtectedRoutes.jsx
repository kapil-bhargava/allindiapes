import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    // Redirect to login page
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;