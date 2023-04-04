const { Router } = require("express");
const router = Router();
const { pharmacyController } = require("../controllers/Pharmacy.controller");
const checkAuth  = require('../utils/checkAuth.js')

router.post("/registrate", pharmacyController.registration);
router.post("/login", pharmacyController.login);
router.patch("/pharmacy/:id", pharmacyController.editPharmacy);
router.delete("/pharmacy/:id", pharmacyController.deletePharmacy);
router.get("/pharmacy", pharmacyController.getPharmacies);
router.get("/me", checkAuth, pharmacyController.getPharmacyById);

module.exports = router;
