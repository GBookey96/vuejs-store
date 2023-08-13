import express from "express";
import categoriesLogic from "../5-logic/categoriesLogic.js";

const router = express.Router();

router.get("/categories", async (_, response, next) => {
  try {
    const categories = await categoriesLogic.getAllCategories();
    response.json(categories);
  } catch (err) {
    next(err);
  }
});

router.post("/categories", async (request, response, next) => {
  try {
    const addedCategory = await categoriesLogic.addCategory(request.body);
    response.json(addedCategory);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete("/categories/:id", async (request, response, next) => {
  try {
    await categoriesLogic.removeCategory(+request.params.id);
    response.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

router.patch("/categories/:id", async (request, response, next) => {
  try {
    request.body.categoryId = +request.params.id
    const updatedCategory = await categoriesLogic.editCategory(request.body);
    response.json(updatedCategory);
  } catch (err) {
    next(err);
  }
});

export default router;
