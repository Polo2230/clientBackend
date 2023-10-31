const express = require("express");
const app = express();

const API_VERSION = "api/v1";

const userRoutes = require("./routes/user");
const serviceRoutes = require("./routes/service");
const authRoutes = require("./routes/auth");

// Pruebas con extensión REST Client
app.use(express.json());

//Pruebas desde postman
app.use(express.urlencoded({ extended: true }));

// http://localhost:3100/api/v1/users
app.use(`/${API_VERSION}/users`, userRoutes);
app.use(`/${API_VERSION}/services`, serviceRoutes);
app.use(`/${API_VERSION}/auth`, authRoutes);
// http://localhost:3100/api/auth/signin


module.exports = app;
