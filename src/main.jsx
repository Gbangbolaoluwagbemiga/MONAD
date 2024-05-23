import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MonadProvider } from "./context/UseMonad.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MonadProvider>
      <App />
    </MonadProvider>
  </React.StrictMode>
);
