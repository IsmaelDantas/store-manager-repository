const serviceSales = require('../services/service.sales');

const getAllController = async (_req, res) => {
  const result = await serviceSales.getAllService();
  res.status(result.status).json(result.message);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceSales.getByIdService(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

// const insertController = async (req, res) => {
//   const array = req.body;
//   const { type, message } = await serviceSales.insertService(array);
//   if (type) return res.status(404).json({ message: 'Product not found' });
//   return res.status(201).json({ id: message, itemsSold: array });
// };

module.exports = {
  getAllController,
  getByIdController,
  // insertController,
};