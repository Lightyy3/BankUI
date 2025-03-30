// src/components/ProtectedRoute.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Navigate } from "react-router-dom"; // Use Navigate to redirect

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("authToken") !== null;

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children components
  return children;
};

export default ProtectedRoute;
