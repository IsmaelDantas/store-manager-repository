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

const deleteModel = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );

  return affectedRows;
};

const updateModel = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  );
  if (result.affectedRows === 1) {
    return { id, name };
  }
  return null;
};

const queryGetBy = async (name) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE (name) LIKE (?)', [name],
  );
  return result;
};

module.exports = {
  getAllModel,
  getByIdModel,
  insertModel,
  deleteModel,
  updateModel,
  queryGetBy,
};