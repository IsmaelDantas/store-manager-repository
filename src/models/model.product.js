const connection = require('./database/connection');

const getAllModel = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id ASC',
  );
  return result;
};

const getByIdModel = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const insertModel = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

module.exports = {
  getAllModel,
  getByIdModel,
  insertModel,
};