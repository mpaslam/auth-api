const { CourseCreation } = require("../../controllers/courses/createCourses");


const router =require("express").Router();
router.post('/createCourse',CourseCreation)


module.exports = router