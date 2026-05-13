import express from "express";

import {
  register,
  loginAdmin,
} from "../controllers/auth.controller.js";

const router = express.Router();

// REGISTER
router.post(
  "/register",
  register
);

// ADMIN LOGIN
router.post(
  "/login",
  loginAdmin
);

export default router;