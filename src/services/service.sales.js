const modelSales = require('../models/model.sales');
const modelProduct = require('../models/model.product');

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

const insertService = async (array) => {
  const data = array.map((item) => modelProduct.getByIdModel(item.productId));
  const result = await Promise.all(data);
  const resultValidate = result.some((item) => item === undefined);
  if (resultValidate) return { type: 'error', message: 'Product not found' };
  const idSale = await modelSales.insertModel();
  array.forEach(async ({ productId, quantity }) => {
    await modelSales.insertModelSale(idSale, productId, quantity);
  });
  return { type: null, message: idSale };
};

module.exports = {
  getAllService,
  getByIdService,
  insertService,
};