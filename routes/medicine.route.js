import { Router } from "express";
import { addMedicine, editMedicine, deleteMedicine, getMedicines, getMedicineById } from "../controllers/Medicine.controller.js";
const router = Router();

router.post("/med", addMedicine);
router.patch("/med/:id", editMedicine);
router.delete("/med/:id", deleteMedicine);
router.get("/meds", getMedicines);
router.get("/med/:id", getMedicineById);

export default router

