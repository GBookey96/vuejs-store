import express from "express";
import cartLogic from "../5-logic/cartLogic.js";

const router = express.Router();

router.get("/cart/:userId", async (request, response, next) => {
  try {
    const userId = +request.params.userId;
    const cart = await cartLogic.loadCart(userId);
    response.status(200).json(cart);
  } catch (err) {
    next(err);
  }
});

router.post("/cart", async (request, response, next) => {
  try {
    const userId = +request.query.userId;
    const productId = +request.query.productId;
    const addedProduct = await cartLogic.addItemToCart(userId, productId);
    response.status(201).json(addedProduct);
  } catch (err) {
    next(err);
  }
});
router.delete("/cart", async (request, response, next) => {
  try {
    const userId = +request.query.userId;
    const productId = +request.query.productId;
    await cartLogic.removeItemFromCart(userId, productId);
    response.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
export default router;
