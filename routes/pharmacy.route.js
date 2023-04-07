import { Router } from "express";
import { registratePharmacy, login, editPharmacy, deletePharmacy, getPharmacies, getPharmacyById } from "../controllers/Pharmacy.controller.js";
import {checkAuth}  from '../utils/checkAuth.js'
const router = new Router()

router.post("/registrate", registratePharmacy);
router.post("/login", login);
router.patch("/pharmacy/:id", editPharmacy);
router.delete("/pharmacy/:id", deletePharmacy);
router.get("/pharmacy", getPharmacies);
router.get("/me", checkAuth, getPharmacyById);

export default router

