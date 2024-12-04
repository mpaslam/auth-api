// const Course =require()

const Course = require("../../model/course");
async function CourseCreation(req, res) {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { title, description, price, duration, category } = req.body;
    try {

        if (!title || !description || !price || !duration || !category) {
            return res.status(400).json({ error: "that was all required" });
        }

        const newCourse = new Course({

            title,
            description,
            price, duration, category

        });

        await newCourse.save();
        res.status(201).json({ message: 'Course registered successfully', newCourse });
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: "somthing went wrong" })
    }
}
module.exports = { CourseCreation }