const modelSales = require('../models/model.sales');
const modelProduct = require('../models/model.product');

const getAllService = async () => {
  const result = await modelSales.getAllModel();
  return { message: result, status: 200 };
};

const getByIdService = async (id) => {
  const result = await modelProduct.getByIdModel(id);
  if (result) {
    return { type: null, message: result };
  }
  return { type: 'error', message: 'Product not found' };
};

const insertService = async (array) => {
  const data = array.map((item) => modelProduct.getByIdModel(item.productId));
  const result = await Promise.all(data);
  const validateResult = result.some((item) => item === undefined);
  if (validateResult) return { type: 'error', message: 'Product not found' };
  const saleId = await modelSales.insertModel();
  array.forEach(async ({ productId, quantity }) => {
    await modelSales.insertModelSale(saleId, productId, quantity);
  });
  return { type: null, message: saleId };
};

const deleteSaleService = async (id) => {
  const result = await modelSales.deleteSaleModel(id);
  if (result === 0) {
    return { type: 'error', message: 'Sale not found' };
  }
  return { type: null, message: result };
};

module.exports = {
  getAllService,
  getByIdService,
  insertService,
  deleteSaleService,
};