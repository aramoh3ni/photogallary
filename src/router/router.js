import React from "react";

import { Route, Routes } from "react-router-dom";

// Importing Pages
import {
  HomePage,
  Signin,
  Signup,
  Dashboard,
  NotFound,
  Blog,
  AddPost,
  UploadFrom,
  Gallery
} from "../pages";

// Context Auth Provider
import { AuthProvider } from "../Context/AuthContext";
import { ProtectedRoute } from "./secure/ProtectedRoute";


function Router() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route index path="/" element={<HomePage />} />

        {/* Private Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/api/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/new" element={<AddPost />}/>
          <Route path='/api/gallery' element={<Gallery />} />
          <Route path='/api/gallery/add' element={<UploadFrom />} />
        </Route>


        {/* Authentication Routes */}
        <Route path="/api/auth/sign-in" element={<Signin />} />
        <Route path="/api/auth/sign-up" element={<Signup />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default Router;
