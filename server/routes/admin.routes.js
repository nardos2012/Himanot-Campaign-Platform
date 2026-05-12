import express from "express";
import { protect, isAdmin } from "../middleware/auth.js";
import { getStats } from "../controllers/admin.controller.js";


const router = express.Router();

router.get("/stats", protect, isAdmin, getStats);
// router.get("/stats", protect, authorizeRoles("admin"), getStats);

export default router;




