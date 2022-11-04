const express = require('express');
const controllerProduct = require('../controllers/controller.product');
const { validationName } = require('../middlewares/validationName');

const routerProduct = express.Router();

routerProduct.get('/', controllerProduct.getAllController);

routerProduct.get('/:id', controllerProduct.getByIdController);

routerProduct.post('/', validationName, controllerProduct.insertController);

module.exports = {
  routerProduct,
};