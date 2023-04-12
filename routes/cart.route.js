import { Router } from "express";
import { createCartItem, getCartByPharm, getAllCarts, updateCart, deleteCart } from "../controllers/Cart.controller.js";
const router = new Router()

router.post("/cart", createCartItem);
router.patch("/cart/:id", updateCart);
router.get("/cart/:id", getCartByPharm);
router.delete("/cart/:id", deleteCart);
router.get("/cart", getAllCarts);

export default router 