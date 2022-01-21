import React from "react";

import { BrowserRouter } from "react-router-dom";

// Importing Components
import { Container } from "semantic-ui-react";

// Importing routes
import Router from "./router/router";

export default function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Router />
      </Container>
    </BrowserRouter>
  );
}
