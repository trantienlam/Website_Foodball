const express = require("express");
const routes = express.Router();
const homeController = require("../../controllers/client/home.controllers");

routes.get("/", homeController.index);
module.exports = routes;
