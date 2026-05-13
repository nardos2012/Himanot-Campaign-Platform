export const API_URL =

import.meta.env.VITE_API_URL;
  import.meta.env.MODE ===
  "development"

    ? "http://${API_URL}"

    : "https://your-backend-url.onrender.com";


  