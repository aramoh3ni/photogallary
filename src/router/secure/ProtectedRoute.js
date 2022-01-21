import React from "react";

import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";

export const ProtectedRoute = () => {
  const { user } = useAuth();

  console.log("Check User in Privte", user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
