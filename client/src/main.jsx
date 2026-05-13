import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import {
  HelmetProvider,
} from "react-helmet-async";

import App from "./App.jsx";

import "./index.css";
import "./i18n";

import AuthProvider from "./context/AuthContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

  <React.StrictMode>

    <BrowserRouter>

      <HelmetProvider>

        <AuthProvider>

          <App />

          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </AuthProvider>

      </HelmetProvider>

    </BrowserRouter>

  </React.StrictMode>

);