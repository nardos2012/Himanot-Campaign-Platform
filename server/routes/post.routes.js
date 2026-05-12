import express from "express";

import {
  createPost,
  getPosts,
  getPostById,
  deletePost,
} from "../controllers/post.controller.js";

import {
  protect,
  isAdmin,
} from "../middleware/auth.js";

import upload from "../middleware/upload.js";

const router = express.Router();

// PUBLIC ROUTES
router.get(
  "/",
  getPosts
);

router.get(
  "/:id",
  getPostById
);

// ADMIN ROUTES
router.post(
  "/",
  protect,
  isAdmin,
  upload.single("image"),
  createPost
);

router.delete(
  "/:id",
  protect,
  isAdmin,
  deletePost
);

export default router;