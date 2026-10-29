const express = require("express");
const router = express.Router();
const { getAllStudents, getStudentById, createStudent } = require("../controllers/student.controllers")

router.get("/", getAllStudents)
.get("/:id", getStudentById)
.post("/", createStudent)

module.exports = router;
