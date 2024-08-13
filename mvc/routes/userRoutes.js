const express = require("express");
const userController = require("../controller/userController");

const routes = express.Router();

routes.post("/add",userController.createTicket);
routes.get('/data',userController.getData);
routes.put("/update",userController.updateDetails)

module.exports = routes;