const { Router } = require("express");
const router = Router();
const { categoryController } = require("../controllers/Category.controller");

router.post("/category", categoryController.addCat);
router.patch("/category/:id", categoryController.editCat);
router.delete("/category/:id", categoryController.deleteCat);
router.get("/category", categoryController.getCat);
router.get("/category/:id", categoryController.getCatById);

module.exports = router;
