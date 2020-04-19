const express = require("express");
const routes = express.Router();
const mediacontroller = require('./controllers/mediacontroller')

routes.get("/infos", mediacontroller.index);
routes.post("/media", mediacontroller.create);

module.exports = routes;
