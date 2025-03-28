const Student = require('../models/student.model');

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }

}

const getStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);

        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }

        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(200).send(student);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const student = await Student.findByIdAndUpdate(id, req.body);

        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        const updatedStudent = await Student.findById(id);
        res.status(200).send(updatedStudent);

    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent,
};