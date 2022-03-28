// external modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const httpErrors = require("http-errors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const validator = require("express-validator");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
dotenv.config();

// internal modules
const {
  notFoundHandler,
  defaultErrorHandler,
} = require("./middleware/common/errorHandler");
const usersRouter = require("./router/usersRouter");
const loginRouter = require("./router/loginRouter");
const inboxRouter = require("./router/inboxRouter");

// DATABASE CONNECTION
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => console.log("Connection Successfull !"))
  .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// set view engine
app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// use cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup
app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// 404 error handling
app.use(notFoundHandler);

// common/default error handler
app.use(defaultErrorHandler);
app.listen(process.env.APP_PORT, () =>
  console.log("server is running on port " + process.env.APP_PORT)
);
