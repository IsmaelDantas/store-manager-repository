const express = require('express');

const controllerSales = require('../controllers/sales.controller');

const routerSales = express.Router();

routerSales.get('/', controllerSales.getAllController);

routerSales.get('/:id', controllerSales.getByIdController);

module.exports = {
  routerSales,
};