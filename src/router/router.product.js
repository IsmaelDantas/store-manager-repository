const express = require('express');
const controllerProduct = require('../controllers/controller.product');

const routerProduct = express.Router();

routerProduct.get('/', controllerProduct.controllerGetAll);

routerProduct.get('/:id', controllerProduct.controllerGetById);
module.exports = {
  routerProduct,
};