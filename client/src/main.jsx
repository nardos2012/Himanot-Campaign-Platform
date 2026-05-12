import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext"; // ✔ only once
import "./index.css";   // ✅ REQUIRED
import "./i18n";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
<>
  <App />
  <Toaster position="top-right" />
</>

// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";

// import "./index.css";
// import "./i18n";

// ReactDOM.createRoot(
//   document.getElementById("root")
// ).render(

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>

// );





