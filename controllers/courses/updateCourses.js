const Course = require("../../model/course");

async function updateCourse(req, res) {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { courseId, title, description, price, duration, category } = req.body;

    try {
        // Validate required fields
        if (!courseId || !title || !description || !price || !duration || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Find the course by ID and update it
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            { title, description, price, duration, category },
            { new: true } // Return the updated document
        );

        if (!updatedCourse) {
            return res.status(404).json({ error: "Course not found" });
        }

        res.status(200).json({ message: 'Course updated successfully', updatedCourse });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = { updateCourse };
