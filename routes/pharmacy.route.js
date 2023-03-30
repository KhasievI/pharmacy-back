const { Router } = require("express");
const router = Router();
const { pharmacyController } = require("../controllers/Pharmacy.controller");

router.post("/register", pharmacyController.registration);
router.post("/login", pharmacyController.login);
router.patch("/pharmacy/:id", pharmacyController.editPharmacy);
router.delete("/pharmacy/:id", pharmacyController.deletePharmacy);
router.get("/pharmacy", pharmacyController.getPharmacies);
router.get("/pharmacy/:id", pharmacyController.getPharmacyById);

module.exports = router;
