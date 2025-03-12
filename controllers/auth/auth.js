const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../model/users');
require('dotenv').config();  // Make sure to load environment variables

async function registerAuth(req, res) {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Check if user already exists (optional)
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
    }

    // Hash the password before saving
    const hashed = bcrypt.hashSync(password, 10);
    console.log(hashed);

    // Create new user object and save to database
    const newUser = new User({
        username,
        password: hashed
    });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign(
        { userId: newUser._id, username: newUser.username },  // Payload: user data
        process.env.JWT_SECRET,  // Use the secret key from the .env file
        // { expiresIn: never }  // Token expiration (1 hour in this case)
    );

    // Send success response with token
    res.status(201).json({
        message: 'User registered successfully',
        newUser,
        token  // Send the JWT token in the response
    });
}

module.exports = { registerAuth };
