const User = require("../../model/users");


async function getUser(req, res) {

console.log("gett user hello");

    try {
        const users = await User.find()
        res.status(200).json(users);
        console.log("gett user hello");


    } catch (error) {
        res.status(500).json({ error: "server error " })
    }

}

module.exports =  getUser 