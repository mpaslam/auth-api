const bcrypt = require('bcrypt');
const User = require('../../model/users');

async function registerAuth(req, res) {

    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }
    const hashed = bcrypt.hashSync(password, 10);
    console.log(hashed);
    // Simulate saving user data by pushing it into the users array
    const newUser = new User({
        username,
        password: hashed
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully', newUser });

}


module.exports = { registerAuth }