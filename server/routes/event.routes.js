import express from "express";

import {
  createEvent,
  getEvents,
  deleteEvent,
  getEventById,
} from "../controllers/event.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

import upload from "../middleware/upload.js";

const router = express.Router();

// PUBLIC
router.get(
  "/",
  getEvents
);

router.get(
    "/:id",
    getEventById
  );
// ADMIN
router.post(
  "/",
  protect,
  isAdmin,
  upload.single("image"),
  createEvent
);

router.delete(
  "/:id",
  protect,
  isAdmin,
  deleteEvent
);

export default router;