const express = require('express');
const app = express();
const port = 2000;
const connectDB = require('./config/db_connect');
const User = require('./model/users');

app.use(express.json()); // Middleware to parse JSON request bodies
connectDB();
// Temporary in-memory array to store user data

// POST route for user registration
app.post('/register', async (req, res) => {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Simulate saving user data by pushing it into the users array
    const newUser = new User({
        username,
        password
    });

    await newUser.save();


    res.status(201).json({ message: 'User registered successfully', newUser });
});



app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});
