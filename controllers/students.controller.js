const studentsModal = require('../models/students.model');
const add = (req, res) => {
    // add new students if already not exists
    studentsModal.findOne({ email: req.body.email }, (err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (student) {
            res.status(400).send({ message: "Student already exists" });
            return;
        }
        studentsModal.create(req.body, (err, student) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.json({
                message: "Student added successfully",
                data: student
            });
        });
    })
}

const updateByEmial = (req, res) => {
    //    update student by email check if student exists
    studentsModal.findOne({ email: req.params.email }, (err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!student) {
            res.status(400).send({ message: "Student not found" });
            return;
        }
        studentsModal.findOneAndUpdate({ email: req.params.email }, req.body, (err, student) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.json({
                message: "Student updated successfully",
                data: student
            });
        });
    })
}

const findByEmail = (req, res) => {
    studentsModal.findOne({ email: req.params.email }, (err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.json({
            message: "Student found successfully",
            data: student
        });
    });
}

const deleteStudentByEmail = (req, res) => {
    //    delete student by email check if student exists
    studentsModal.findOne({ email: req.params.email }, (err, student) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        if (!student) {
            res.status(400).send({ message: "Student not found" });
            return;
        }
        studentsModal.findOneAndDelete({ email: req.params.email }, (err, student) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }
            res.json({
                message: "Student deleted successfully",
                data: student
            });
        });
    })
}

const getAllStudents = (req, res) => {
    studentsModal.find({}, (err, students) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }
        res.json({
            message: "Students found successfully",
            data: students
        });
    });
}
module.exports = {
    add: add,
    updateByEmial: updateByEmial,
    findByEmail: findByEmail,
    deleteStudentByEmail: deleteStudentByEmail,
    getAllStudents: getAllStudents
}