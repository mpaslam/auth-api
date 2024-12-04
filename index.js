const express = require('express');
const app = express();
const port = 2000;
const connectDB = require('./config/db_connect');
const User = require('./model/users');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bcrypt = require('bcrypt');



app.use(express.json()); // Middleware to parse JSON request bodies
connectDB();
// Temporary in-memory array to store user data



app.use("/api",require('./routes/auth/auth'));
app.use("/api",require('./routes/user/user'));
app.use("/api",require('./routes/course/createCourse'));
app.use("/api",require('./routes/course/getCourses'));


// POST route for user registration
// app.post('/registerr', async (req, res) => {

//     console.log('====================================');
//     console.log(req.body);
//     console.log('====================================');
//     const { username, password } = req.body;

//     if (!username || !password) {
//         return res.status(400).json({ error: 'Username and password are required' });
//     }

//     const hashed = bcrypt.hashSync(password, 10);
//     console.log(hashed);

//     // Simulate saving user data by pushing it into the users array
//     const newUser = new User({
//         username,
//         password: hashed


//     });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully', newUser });
// });




// //get users
// app.get('/users', async (req, res) => {
//     const users = await User.find()
//     res.status(200).json(users);
// });



// login
app.post('/login', async (req, res) => {
    console.log('=========***************===========');
    console.log(req.body);
    console.log('=========***************===========');

    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: "name and password is required " });
    }
    const user = await User.findOne({ username, });
    if (!user) {
        return res.status(400).json({ error: "your not registered" });
    }

    const comparePassword=bcrypt.compareSync(password,user.password)
    if (!comparePassword) {

        res.status(400).json({error:"password error "})
        
    }
    res.status(201).json({ message: 'User logged successfully', user });

}
)


app.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
});