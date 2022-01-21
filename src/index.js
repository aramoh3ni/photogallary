import React from "react";
import ReactDOM from "react-dom";

import "./app.css";


// import 'semantic-ui-css/semantic.min.css';
// Import if need from moduels 
// semantic.min.css is imported with cdn on index.html


import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
