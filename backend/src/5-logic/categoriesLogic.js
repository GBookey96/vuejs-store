import dal from "../2-utils/dal.js";
import { ResourceNotFoundErrorModel } from "./../4-models/error-model.js";

async function getAllCategories() {
  const sql = `SELECT * FROM categories`;
  const categories = await dal.execute(sql);
  return categories;
}

async function addCategory(category) {
  const sql = `INSERT INTO categories VALUES(DEFAULT, ? , ?)`;
  const addedCategory = await dal.execute(sql, [
    category.categoryName,
    category.categoryDescription,
  ]);
  return addedCategory;
}

async function removeCategory(categoryId) {
  const sql = `DELETE FROM categories WHERE categoryId = ?`;
  const info = await dal.execute(sql, [categoryId]);
  if (info.affectedRows === 0) throw new ResourceNotFoundErrorModel(categoryId);
}

async function editCategory(category) {
  console.log(category)
  const sql = `UPDATE categories SET 
  categoryName = ?,
  categoryDescription = ?
  WHERE categoryId = ?`;
  const info = await dal.execute(sql, [
    category.categoryName,
    category.categoryDescription,
    category.categoryId,
  ]);
  console.log(info)
  if (info.affectedRows === 0) throw new ResourceNotFoundErrorModel(category.categoryId);
  return category;
}

export default {
  getAllCategories,
  addCategory,
  removeCategory,
  editCategory,
};
