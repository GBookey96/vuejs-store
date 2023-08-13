import express, { response } from "express";
import productsLogic from "../5-logic/productsLogic.js";

const router = express.Router();

router.get("/products", async (_, response, next) => {
  try {
    const allProducts = await productsLogic.getAllProducts();
    response.json(allProducts);
  } catch (err) {
    next(err);
  }
});

router.post("/products", async (request, response, next) => {
  try {
    const addedProduct = await productsLogic.addProduct(request.body);
    response.status(201).json(addedProduct);
  } catch (err) {
    next(err);
  }
});

router.delete("/products/:id", async (request, response, next) => {
  try {
    const id = +request.params.id;
    await productsLogic.deleteProduct(id);
    response.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.patch("/products/:id", async (request, response, next) => {
  try {
    request.body.id = +request.params.id;
    const updatedProduct = await productsLogic.editProduct(request.body);
    response.json(updatedProduct);
  } catch (err) {
    next(err);
  }
});

export default router;
