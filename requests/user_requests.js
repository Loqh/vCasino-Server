var db = require('../database');
const UserServices = require('../services/user_services.js')


async function createUser(req, res) {
    try {
        // todo: verify body
        const { user_name, user_password, user_email } = req.body
        const result = await UserServices.createUser(user_name, user_password, user_email)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function changeName(req, res) {
    try {
        // todo: verify body
        const {user_name } = req.body
        const result = await UserServices.changeName(req.body.user_name , req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function changeMail(req, res) {
    try {
        // todo: verify body
        const {user_name } = req.body
        const result = await UserServices.changeMail(req.body.user_mail , req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function changePassword(req, res) {
    try {
        // todo: verify body
        const {user_name } = req.body
        const result = await UserServices.changePassword(req.body.user_password, req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}



module.exports.changeName = changeName;
module.exports.changePassword = changePassword;
module.exports.changeMail = changeMail;
module.exports.createUser = createUser;
module.exports.connectUser = connectUser;
module.exports.deleteUser = deleteUser;
module.exports.nameVerification = nameVerification;
module.exports.getName = getName;
module.exports.getEmail = getEmail;
