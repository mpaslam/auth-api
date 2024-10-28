const express = require('express');
const app = express();
const port = 2000;

app.use(express.json()); // Middleware to parse JSON request bodies

// Temporary in-memory array to store user data
const users = [];

// POST route for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Simulate saving user data by pushing it into the users array
    const user = { username, password };
    users.push(user);

    res.status(201).json({ message: 'User registered successfully', user });
});



app.get('/users', (req, res) => {
    res.status(200).json(users);
});

// Start the server
app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});
