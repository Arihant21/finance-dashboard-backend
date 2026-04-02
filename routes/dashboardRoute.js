import express from "express"
import {
    getSummary, getCategorySummary,
    getMonthlySummary,
    getRecentRecords
} from "../controllers/dashboardController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/summary", authMiddleware, getSummary);
router.get("/category", authMiddleware, getCategorySummary);
router.get("/monthly", authMiddleware, getMonthlySummary);
router.get("/recent", authMiddleware, getRecentRecords);

export default router;