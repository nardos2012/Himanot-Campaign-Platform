import express from "express";

import {
  createSupporter,
  getSupporters,
  deleteSupporter,
} from "../controllers/supporter.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

const router = express.Router();

// PUBLIC
router.post(
  "/",
  createSupporter
);

// ADMIN
router.get(
  "/",
  protect,
  isAdmin,
  getSupporters
);

router.delete(
  "/:id",
  protect,
  isAdmin,
  deleteSupporter
);

export default router;