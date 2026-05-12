import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import http from "http";
import { Server } from "socket.io";

// DATABASE
import connectDB from "./config/db.js";

// ROUTES
import translateRoutes  from "./routes/translate.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import donationRoutes from "./routes/donation.routes.js";
import postRoutes from "./routes/post.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import eventRoutes from "./routes/event.routes.js";
import supporterRoutes from "./routes/supporter.routes.js";
import exportRoutes from "./routes/export.routes.js";
import emailRoutes from "./routes/email.routes.js";

// --------------------
// CONNECT DATABASE
// --------------------
connectDB();

// --------------------
// EXPRESS APP
// --------------------
const app = express();

// --------------------
// HTTP SERVER
// --------------------
const server =
  http.createServer(app);

// --------------------
// SOCKET.IO
// --------------------
const io = new Server(server, {

  cors: {
    origin:
      "http://localhost:5173",
  },

});

// EXPORT SOCKET
export { io };

// --------------------
// MIDDLEWARE
// --------------------

// CORS
app.use(cors());

// JSON
app.use(express.json());

// FORM DATA
app.use(
  express.urlencoded({
    extended: true,
  })
);

// LOGGER
app.use(morgan("dev"));

// RATE LIMIT
app.use(

  rateLimit({

    windowMs:
      15 * 60 * 1000,

    max:
      process.env.NODE_ENV
        === "development"
        ? 1000
        : 100,

    message:
      "Too many requests, please try again later.",

  })

);

// --------------------
// ROUTES
// --------------------
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/users",
  userRoutes
);

app.use(
  "/api/donations",
  donationRoutes
);

app.use(
  "/api/posts",
  postRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/events",
  eventRoutes
);

app.use(
  "/api/supporters",
  supporterRoutes
);

app.use(
  "/api/export",
  exportRoutes
);

app.use(
  "/api/email",
  emailRoutes
);
// app.use(
//   "/api/translate",
//   translateRoutes
// );
// // --------------------
// HEALTH CHECK
// --------------------
app.get("/", (req, res) => {

  res.json({

    success: true,

    message:
      "Campaign backend running",

  });

});

// --------------------
// START SERVER
// --------------------
const PORT =
  process.env.PORT || 5000;

server.listen(PORT, () => {

  console.log(
    `🚀 Server running on port ${PORT}`
  );

});