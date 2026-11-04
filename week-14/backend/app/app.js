const express = require("express");
const authRoutes = require('../routes/auth.routes')
const studentRoutes = require('../routes/student.routes')

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "School Management API is running" });
});

// ROUTES
app.use('/api/v1/auth/', authRoutes);
app.use("/api/v1/students", studentRoutes);

module.exports = app;