import React from "react";

import { BrowserRouter, Outlet } from "react-router-dom";

// Importing Components
import { Container } from "semantic-ui-react";
import { Navbar } from "./components";

// Importing routes
import Router from "./router/router";

export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Navbar />

        <Router />

        <Outlet />
      </Container>
    </BrowserRouter>
  );
}
