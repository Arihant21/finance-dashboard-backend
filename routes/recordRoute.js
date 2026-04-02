import express from "express";
import { createRecord, getRecords, updateRecord, deleteRecord } from "../controllers/recordController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/create", authMiddleware, roleMiddleware(["admin"]), createRecord);
router.put("/update/:id", authMiddleware, roleMiddleware(["admin"]), updateRecord);
router.delete("/delete/:id", authMiddleware, roleMiddleware(["admin"]), deleteRecord);
router.get("/all", authMiddleware, roleMiddleware(["admin", "analyst"]), getRecords);

export default router;
