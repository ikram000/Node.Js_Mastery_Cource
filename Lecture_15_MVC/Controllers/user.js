import {User} from '../Models/User.js'
export const userRegister = async (req, res) => {
    // console.log("getting tha data from body",req.body)
    try {
        let user = await User.create(req.body)
        res.json({
            message: 'User Created Successfully', NewUser: user, sucess: true
        });
    } catch (err) {
        res.json({ message: err.message })

    }
};
