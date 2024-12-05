const { updateCourse } = require("../../controllers/courses/updateCourses");


const router =require("express").Router();
router.put('/updateCourse',updateCourse)


module.exports = router