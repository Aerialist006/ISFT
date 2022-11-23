import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.jsx";
const Render = () => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};
Render();
