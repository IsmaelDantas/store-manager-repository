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

const insertController = async (req, res) => {
  const array = req.body;
  const { type, message } = await serviceSales.insertService(array);
  if (type) return res.status(404).json({ message });
  return res.status(201).json({ id: message, itemsSold: array });
};

const deleteSaleController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceSales.deleteSaleService(Number(id));
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const array = req.body;
  const result = await serviceSales.updateSaleService(array, Number(id));
  if (result.type) return res.status(404).json({ message: result.message });
  res.status(200).json({ saleId: id, itemsUpdated: array });
};

module.exports = {
  getAllController,
  getByIdController,
  insertController,
  deleteSaleController,
  updateController,
};