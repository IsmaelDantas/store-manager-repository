const express = require('express');
const controllerProduct = require('../controllers/controller.product');

const routerProduct = express.Router();

routerProduct.get('/', controllerProduct.getAllController);

routerProduct.get('/:id', controllerProduct.getByIdController);

routerProduct.post('/', controllerProduct.insertController);

module.exports = {
  routerProduct,
};