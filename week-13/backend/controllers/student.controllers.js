let students = [
  { id: 1, name: "Ada Obi", className: "JSS1" },
  { id: 2, name: "Tunde Bello", className: "JSS2" },
];

const headerVariable = '123';

function getAllStudents (req, res) {
    const apiKey = req.headers['x-api-key'];

    if(!req.headers | !req) throw new Error("No Header");
    if (apiKey === headerVariable) {
        res.status(200).json({
            message: "Students fetched successfully",
            length: students.length,
            data: students
        });
    } 
    else {
        res.status(400).json({
            error: "No Headers 2"
        }) 
    }
    
}

function getStudentById (req, res) {
    const apiKey = req.headers['x-api-key'];
    const id = Number(req.params.id);
    const student = students.find((s) => s.id === id);
    if(!req.headers | !req) throw new Error("No Header");

    if (!student) {
        return res.status(404).json({message: "Student does not exist"});
    }
    if (apiKey === headerVariable){
        res.status(200).json(student);
    }
}


function createStudent (req, res) {
    const newStudent = { id: students.length + 1, ...req.body };
    students.push(newStudent);
    res.status(201).json(newStudent);
}

module.exports = { getAllStudents, getStudentById, createStudent }

