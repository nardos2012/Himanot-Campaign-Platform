import express from "express";

import {
  login,
  register,
  loginAdmin,
} from "../controllers/auth.controller.js";

const router = express.Router();

// REGISTER
router.post(
  "/register",
  register
);

// NORMAL LOGIN
router.post("/login",loginAdmin);


export default router;