const jwt = require('jsonwebtoken');
require('dotenv').config(); // Ensure that you load the .env file

// Middleware to verify the JWT token
const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', ''); // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Access denied, token missing' });
    }

    try {
        // Verify the token using the secret key from .env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Attach the decoded token data (userId, username) to the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(400).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;
