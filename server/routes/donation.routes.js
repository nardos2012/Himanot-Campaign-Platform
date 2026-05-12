import express from "express";

import {
  createDonation,
  getDonations,
  updateDonationStatus,
  deleteDonation,
} from "../controllers/donation.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

const router = express.Router();

// PUBLIC DONATION
router.post(
  "/",
  createDonation
);

// ADMIN ROUTES
router.get(
  "/",
  protect,
  isAdmin,
  getDonations
);

router.put(
  "/:id",
  protect,
  isAdmin,
  updateDonationStatus
);

router.delete(
  "/:id",
  protect,
  isAdmin,
  deleteDonation
);

export default router;