const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    duration: String,
    category: String

}, { timestamps: true });


const Course = mongoose.model("Course", courseSchema);

module.exports = Course