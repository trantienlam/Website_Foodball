const express = require("express");
require("dotenv").config();

const database = require("./config/database");
database.connect();

const systemConfix = require("./config/system");

const routesAdmin = require("./routes/admin/index.route");
const routes = require("./routes/client/index.route");

const app = express();
const port = process.env.PORT;

app.set("views", "./views");
app.set("view engine", "pug");

app.locals.prefixAdmin = systemConfix.prefixAmin;

app.use(express.static("public"));

routesAdmin(app);
routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
