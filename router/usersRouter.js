const express = require("express");
const usersRouter = express.Router();
const userController = require("./../controller/usersController");
const decorateHtmlResponse = require("./../middleware/common/decorateHtmlResponse");
usersRouter.get("/", decorateHtmlResponse("Users"), userController);
module.exports = usersRouter;
