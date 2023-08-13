import dal from "../2-utils/dal.js";
import { ResourceNotFoundErrorModel } from "./../4-models/error-model.js";

async function loadCart(userId) {
  const sql = `SELECT
  cart.itemId as id,
  p.productName AS name,
  p.productId as productId,
    p.productPrice AS price,
    c.categoryName AS category,
    
    COUNT(*) AS quantity
FROM
    cart AS cart
JOIN
    products AS p ON cart.productId = p.productId
JOIN
    categories AS c ON p.productCategory = c.categoryId
WHERE
    cart.userId = ?
GROUP BY
    p.productId;
`;
  const cart = await dal.execute(sql, [userId]);
  return cart;
}
async function addItemToCart(userId, productId) {
  const sql = `INSERT INTO cart VALUES(DEFAULT, ? ,?)`;
  const info = await dal.execute(sql, [userId, productId]);
  return info;
}
async function removeItemFromCart(userId, productId) {
  const sql = `DELETE FROM cart
  WHERE userId = ? AND productId = ?`;
  const info = await dal.execute(sql, [userId, productId]);
  if (info.affectedRows === 0)
    throw new ResourceNotFoundErrorModel("this Item");
}

export default {
  loadCart,
  addItemToCart,
  removeItemFromCart,
};
