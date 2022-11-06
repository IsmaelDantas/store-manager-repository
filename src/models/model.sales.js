const connection = require('./database/connection');

const getAllModel = async () => {
  const [result] = await connection.execute(
  `SELECT sp.sale_id AS saleId, sp.product_id AS productId, sp.quantity AS quantity, s.date AS date
  FROM StoreManager.sales_products as sp
  INNER JOIN StoreManager.sales AS s
  ON sp.sale_id = s.id
  ORDER BY sp.sale_id ASC`,
  );

  return result;
};

const getByIdModel = async (id) => {
  const [result] = await connection.execute(
    `SELECT sp.product_id AS productId, sp.quantity AS quantity, s.date AS date
     FROM StoreManager.sales_products AS sp
     INNER JOIN StoreManager.sales as s
     ON sp.product_id = s.id = ${id}`,
    [id],
  );
  console.log('model', result);
  return result;
};

const insertModelSale = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

const insertModel = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
  );
  
  return insertId;
};

module.exports = {
  getAllModel,
  getByIdModel,
  insertModelSale,
  insertModel,
};