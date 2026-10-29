const express = require('express');
const morgan = require('morgan');
const studentRoutes = require("../routes/student.routes");

const app = express();

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());


// ROUTES
app.use("/api/students", studentRoutes);



module.exports = app;