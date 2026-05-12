import express from "express";
import userRoutes from "./routes/user.routes.js";
import donationRoutes from "./routes/donation.routes.js";

const app = express();

app.use(express.json());

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/donations", donationRoutes);


// HEALTH CHECK
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;