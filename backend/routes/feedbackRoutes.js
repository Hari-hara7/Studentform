import express from "express";
import { submitFeedback, getAllFeedbacks } from "../controllers/feedbackController.js";
import { verifyToken, isAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, submitFeedback);
router.get("/", verifyToken, isAdmin, getAllFeedbacks);

export default router;
