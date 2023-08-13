import dal from "../2-utils/dal.js";
import { ResourceNotFoundErrorModel } from "./../4-models/error-model.js";

async function getAllProducts() {
  const sql = `SELECT
  p.productId AS id,
  p.productName AS name,
  p.productDescription AS description,
  p.productStockLevel AS stockLevel,
  p.productPrice AS price,
  p.productCategory AS categoryId,
  c.categoryName AS category
FROM
  products p
JOIN
  categories c ON p.productCategory = c.categoryId;
`;
  const products = await dal.execute(sql);
  return products;
}

async function addProduct(product) {
  const sql = `INSERT INTO products VALUES (DEFAULT, ?, ?, ?, ?, ?);`;
  const info = await dal.execute(sql, [
    product.name,
    product.description,
    product.stockLevel,
    product.category,
    product.price,
  ]);
  product.productId = info.insertId;

  return product;
}

async function editProduct(product) {
  console.log(product)
  console.log(product);
  const sql = `UPDATE products SET 
  productName = ?,
  productDescription = ?,
  productStockLevel = ?,
  productCategory = ?,
  productPrice = ?
  WHERE productId = ?`;
  const updatedProduct = await dal.execute(sql, [
    product.name,
    product.description,
    product.stockLevel,
    product.category,
    product.price,
    product.id,
  ]);
  if (updatedProduct.affectedRows === 0)
    throw new ResourceNotFoundErrorModel(product.productId);
  return updatedProduct;
}

async function deleteProduct(id) {
  const sql = `DELETE FROM products WHERE productId = ?`;
  const info = await dal.execute(sql, [id]);
  if (info.affectedRows === 0) throw new ResourceNotFoundErrorModel(id);
}

export default {
  getAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
};
