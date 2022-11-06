const serviceProduct = require('../services/service.product');

const getAllController = async (_req, res) => {
  const result = await serviceProduct.getAllService();
  res.status(result.status).json(result.message);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceProduct.getByIdService(id);
  if (type) return res.status(404).json({ message });
  res.status(200).json(message);
};

const insertController = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await serviceProduct.insertService(name);
  if (type) return res.status(404).json({ message });
  res.status(201).json({ id: message, name });
};

const deleteController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await serviceProduct.deleteService(id);
  if (type) return res.status(404).json({ message });
  res.status(204).json();
};

const updateController = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await serviceProduct.updateService(name, Number(id));
  if (result.type) return res.status(404).json({ message: result.message });
  res.status(200).json({ id: result.id, name });
};

const getByQueryController = async (req, res) => {
  const { q } = req.query;
  const name = `%${q}%`;
  const result = await serviceProduct.getByQueryService(name);
  if (result.type) return res.status(404).json([]);
  res.status(200).json(result);
};

module.exports = {
  getAllController,
  getByIdController,
  insertController,
  deleteController,
  updateController,
  getByQueryController,
};