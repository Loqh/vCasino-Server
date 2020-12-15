var db = require('../database');
const ChangeServices = require('../services/change_services.js')



async function changeMail(req, res) {
    try {
        // todo: verify body
        const {user_email } = req.body
        const result = await ChangeServices.changeMail(user_email)
        res.status(200).json(result)
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
        const result = await ChangeServices.changeName(user_name)
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
        const {user_password } = req.body
        const result = await ChangeServices.changePassword(user_password)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}








module.exports.changeMail = changeMail;
module.exports.changeName = changeName;
module.exports.changPassword = changePassword;