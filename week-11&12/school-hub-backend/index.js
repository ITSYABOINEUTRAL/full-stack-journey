const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // lets Express read JSON sent in the request body

let students = [
  { id: 1, name: "Ada Obi", className: "JSS1" },
  { id: 2, name: "Tunde Bello", className: "JSS2" },
];

// READ all
app.get("/students", (req, res) => {
  res.json(students);
});

// READ one — :id is a route parameter
app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});

// CREATE
app.post("/students", (req, res) => {
  const newStudent = { id: students.length + 1, ...req.body };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// UPDATE
app.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) return res.status(404).json({ message: "Student not found" });
  Object.assign(student, req.body);
  res.json(student);
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  students = students.filter((s) => s.id !== id);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});