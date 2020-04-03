/** framework para node */
const express = require("express");
const cors = require("cors");
const routes = require("./routes.js");
const errors = require("./errors/errors");

const app = express();

/** funcao para ser usado em navegadores externos  */
app.use(cors());

/** chamada para usar json no body */
app.use(express.json());

/** usar as rotas configurada */
app.use(routes);
app.use(errors);

module.exports = app;
