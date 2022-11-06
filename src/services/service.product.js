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

const insertService = async (name) => {
  const result = await modelProduct.insertModel(name);

  return { type: null, message: result };
};

const deleteService = async (id) => {
  const result = await modelProduct.deleteModel(id);
  if (result === 0) {
    return { type: 'error', message: 'Product not found' };
  }
  return { type: null, message: result };
};

const updateService = async (name, id) => {
  const result = await modelProduct.updateModel(name, id);
  if (!result) return { type: 'error', message: 'Product not found' };
  return result;
};

const getByQueryService = async (name) => {
  const result = await modelProduct.queryGetBy(name);
  if (!result) return { type: 'error', message: 'Product not found' };
  return result;
};

module.exports = {
  getAllService,
  getByIdService,
  insertService,
  deleteService,
  updateService,
  getByQueryService,
};