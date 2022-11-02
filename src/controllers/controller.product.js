const serviceProduct = require('../services/service.product');

const getAllController = async (_req, res) => {
  const result = await serviceProduct.getAllService();
  res.status(result.status).json(result.message);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceProduct.serviceGetById(id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAllController,
  getByIdController,
};