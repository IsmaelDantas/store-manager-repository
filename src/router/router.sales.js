const express = require('express');

const controllerSales = require('../controllers/sales.controller');

// const { validationProduct, validationQuantity } = require('../middlewares/validationSales');

const routerSales = express.Router();

routerSales.get('/', controllerSales.getAllController);

routerSales.get('/:id', controllerSales.getByIdController);

// routerSales.post('/', validationProduct, validationQuantity, controllerSales.insertController);

module.exports = {
  routerSales,
};