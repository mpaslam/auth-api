const Course = require("../../model/course");



async function getCourses(req, res) {
    console.log("get course heyy");
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
        console.log("courses fetched successfully");
    } catch (error) {
        res.status(500).json({ error: "server error " })
    }
}



async function getCoursesById(req, res) {



    console.log(req.params.id);
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
        console.log("courses fetched successfully");

    } catch (error) {
        res.status(500).json({ error: "server error " })
    }
}
module.exports = { getCourses, getCoursesById }