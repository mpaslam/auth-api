const express = require('express');
const router = express.Router();
const { CourseCreation } = require('../../controllers/courses/createCourses');
const verifyToken = require('../../middlewares/verifyToken');

// Route to create a course, only accessible to authenticated users
router.post('/create', verifyToken, CourseCreation);

module.exports = router;
