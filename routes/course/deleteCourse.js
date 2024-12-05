const { deleteCourse } = require("../../controllers/courses/deletCourse");


const router =require("express").Router();
router.delete('/deleteCourse',deleteCourse)


module.exports = router