import express from "express";

import {
  exportSupporters,
  exportDonations,
  exportEvents,
} from "../controllers/export.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

const router =
  express.Router();

// SUPPORTERS
router.get(
  "/supporters",
  protect,
  isAdmin,
  exportSupporters
);

// DONATIONS
router.get(
  "/donations",
  protect,
  isAdmin,
  exportDonations
);

// EVENTS
router.get(
  "/events",
  protect,
  isAdmin,
  exportEvents
);

export default router;