const modelSales = require('../models/model.sales');

const getAllService = async () => {
  const result = await modelSales.getAllModel();
  return { message: result, status: 200 };
};

const getByIdService = async (id) => {
  const result = await modelSales.getByIdModel(id);
  if (result.length > 0) {
    return { type: null, message: result };
  }
  return { type: 'error', message: 'Sale not found' };
};

module.exports = {
  getAllService,
  getByIdService,
};