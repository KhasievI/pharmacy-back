import { Router } from "express";
import { addCat, editCat, deleteCat, getCat, getCatById } from "../controllers/Category.controller.js";
const router = new Router()

router.post("/category", addCat);
router.patch("/category/:id", editCat);
router.delete("/category/:id", deleteCat);
router.get("/category", getCat);
router.get("/category/:id", getCatById);

export default router