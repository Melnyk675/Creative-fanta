import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import { MouseFollower } from "react-mouse-follower";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>
);
