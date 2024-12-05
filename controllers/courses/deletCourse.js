const Course = require("../../model/course");

async function deleteCourse(req, res) {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { courseId } = req.body;

    try {
        // Validate required fields
        if (!courseId) {
            return res.status(400).json({ error: "courseId is required" });
        }

        // Find the course by ID and update it
        const deleteCourse = await Course.findByIdAndDelete(
            courseId,
        );

        if (!deleteCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json({ message: 'Course deleted successfully', deleteCourse });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = { deleteCourse };
