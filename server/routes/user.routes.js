import express from "express";
import {
  getUserStats,
  getUsers,
  deleteUser,
  updateUserRole,
} from "../controllers/user.controller.js";

import { protect, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/stats", protect, isAdmin, getUserStats);
router.get("/", protect, isAdmin, getUsers);
router.delete("/:id", protect, isAdmin, deleteUser);
router.put("/:id/role", protect, isAdmin, updateUserRole);



export default router;

