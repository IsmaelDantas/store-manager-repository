const express = require('express');
const controllerProduct = require('../controllers/controller.product');

const routerProduct = express.Router();

routerProduct.get('/', controllerProduct.getAllController);

routerProduct.get('/:id', controllerProduct.getByIdController);
module.exports = {
  routerProduct,
};