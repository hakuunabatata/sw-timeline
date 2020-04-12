const express = require("express");
const routes = express.Router();
const mediacontroller = require('./controllers/mediacontroller')

routes.get("/media", mediacontroller.index);
routes.post("/media", mediacontroller.create);

module.exports = routes;
