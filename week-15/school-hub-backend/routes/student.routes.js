const express = require("express");
const router = express.Router();
const { getAllStudents, getStudentById, createStudent, editStudentById, deleteStudentById } = require("../controllers/student.controllers")

router.get("/", getAllStudents)
.get("/:id", getStudentById)
.post("/", createStudent)
.patch("/:id", editStudentById)
.delete("/:id", deleteStudentById)


module.exports = router;
