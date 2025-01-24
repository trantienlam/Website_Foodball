const express = require("express");
const routes = express.Router();
const productsController = require("../../controllers/client/product.controllers");

routes.get("/", productsController.index);
module.exports = routes;
