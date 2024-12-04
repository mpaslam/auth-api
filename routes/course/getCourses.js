const { getCourses, getCoursesById } = require("../../controllers/courses/getCourses");


const router = require("express").Router();
router.get('/getCourse', getCourses)


router.get('/getCourse/by/:id',getCoursesById)

module.exports = router