import { Router } from "express";
import { createCartItem, getCart, getAllCarts, updateCart } from "../controllers/Cart.controller.js";
const router = new Router()

router.post("/cart", createCartItem);
router.patch("/cart/:id", updateCart);
router.get("/cart/:id", getCart);
router.get("/cart", getAllCarts);

export default router 