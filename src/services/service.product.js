const modelProduct = require('../models/model.product');

const getAllService = async () => {
  const result = await modelProduct.getAllModel();

  return {
    message: result,
    status: 200,
  };
};

const getByIdService = async (id) => {
  const result = await modelProduct.getByIdModel(id);

  if (result) {
    return {
      type: null,
      message: result,
    };
  }

  return {
    type: 'error',
    message: 'Product not found',
  }; 
};

module.exports = {
  getAllService,
  getByIdService,
};