const dashboard = require("./dashboard.route");
const products = require("./products.route");
const PATH_ADMIN = require("../../config/system");
module.exports = (app) => {
  const admin = PATH_ADMIN.prefixAmin;

  app.use(admin + "/dashboard", dashboard);

  app.use(admin + "/products", products);
};
