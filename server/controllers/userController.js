const User = require('../models/user')

module.exports = {
    signup : async (req, res, next) =>{
        // const { username, email, password } = req.body;
        // const user = await User.create({
        //     name,
        //     bio,
        //     website
        //})

        //return res.send(user)
    },

    signin : async (req, res) => {
        const user = await User.find()
        return res.send(user)
    },
    secret    : async (req, res) => {
       const { id } = req.params;
       const user = await User.findById(id).populate('posts');

        res.send(user.posts);
    }
}
