const express = require("express");
const router = express.Router();
const studentsController = require("../controllers/students.controller");

router.post("/", studentsController.add);
router.put("/:email", studentsController.updateByEmial);
router.get("/:email", studentsController.findByEmail);
router.delete("/:email", studentsController.deleteStudentByEmail);
router.get("/", studentsController.getAllStudents);
module.exports = router;