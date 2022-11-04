const validationProduct = async (req, res, next) => {
  const sale = req.body;
  const productNull = sale.some((item) => !item.productId);
  if (productNull) return res.status(400).json({ message: '"productId" is required' });
  return next();
};

const validationQuantity = (req, res, next) => {
  const sale = req.body;
  const quantityNull = sale.some((item) => item.quantity === undefined);
  if (quantityNull) { return res.status(400).json({ message: '"quantity" is required' }); }
  const quantityNegative = sale.some((item) => item.quantity < 1);
  if (quantityNegative) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validationProduct,
  validationQuantity,
};