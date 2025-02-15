const express = require("express");
const routes = express.Router();

const productsController = require("../../controllers/admin/products.controller");

routes.get("/", productsController.products);
module.exports = routes;
