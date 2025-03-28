const express = require('express');
const Student = require('../models/student.model');
const router = express.Router();
const { getStudents, getStudent,createStudent,updateStudent,deleteStudent } = require('../controllers/student.controller');


router.get('/', getStudents);
router.get('/:id',getStudent);

router.post("/", createStudent);

//update a student
router.put("/:id", updateStudent);

//delete a student
router.delete("/:id",deleteStudent);




module.exports = router;