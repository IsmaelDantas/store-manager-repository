const connection = require('./database/connection');

const getAllModel = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const getByIdModel = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

module.exports = {
  getAllModel,
  getByIdModel,
};