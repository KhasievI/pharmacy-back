const { Router } = require("express");
const router = Router();
const { medicineController } = require("../controllers/Medicine.controller");

router.post("/med", medicineController.addMedicine);
router.patch("/med/:id", medicineController.editMedicine);
router.delete("/med/:id", medicineController.deleteMedicine);
router.get("/med", medicineController.getMedicines);
router.get("/med/:id", medicineController.getMedicineById);

module.exports = router;
