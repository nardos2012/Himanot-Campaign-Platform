import express from "express";

import {
  sendEmail,
} from "../controllers/email.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

const router =
  express.Router();

// SEND CAMPAIGN EMAIL
router.post(
  "/send",
  protect,
  isAdmin,
  sendEmail
);

export default router;