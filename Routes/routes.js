const express = require('express')

const userController = require('../Controllers/userController')
const StudentController = require('../Controllers/studentController')

const jwtMiddle = require('../Middleware/jwtMiddleware')
const multerMiddle = require("../Middleware/multerConfig")


const router = express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)

router.post('/addstudent',jwtMiddle,multerMiddle.single('image'),StudentController.addStudent)
router.get("/getstudents",jwtMiddle,StudentController.getStudents)
router.delete("/deletestudent/:id",jwtMiddle,StudentController.deleteStudent)
router.put("/updatestudent/:sid",jwtMiddle,multerMiddle.single('image'),StudentController.updatestudent)

module.exports = router