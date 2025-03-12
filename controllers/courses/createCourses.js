const Course = require("../../model/course");
const verifyToken = require("../../middlewares/verifyToken"); // Import the verifyToken middleware

async function CourseCreation(req, res) {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { title, description, price, duration, category } = req.body;
    
    try {
        // Check if all required fields are provided
        if (!title || !description || !price || !duration || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newCourse = new Course({
            title,
            description,
            price,
            duration,
            category
        });

        // Save the new course to the database
        await newCourse.save();
        res.status(201).json({ message: 'Course registered successfully', newCourse });

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

module.exports = { CourseCreation };
