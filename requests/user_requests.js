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
        const { user_name } = req.body
        const result = await UserServices.changeName(user_name , req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error changeName requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function changeEmail(req, res) {
    try {
        // todo: verify body
        const { user_mail } = req.body
        const result = await UserServices.changeMail(user_mail , req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error changeEmail requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function changePassword(req, res) {
    try {
        // todo: verify body
        const { user_password } = req.body
        const result = await UserServices.changePassword(user_password, req.user)
        res.status(200).json(result)
    }
    catch (err) {
        console.log("error changePassword requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function connectUser(req, res) {
    try {
        // todo: verify body
        const { user_name, user_password, user_email } = req.body
        const result = await UserServices.connectUser(user_name, user_password, user_email)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error connectUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function deleteUser(req, res) {
    try {
        // todo: verify body
        const { user_name, user_password, user_email } = req.body
        const result = await UserServices.deleteUser(user_name, user_password, user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error deleteUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function nameVerification(req, res) {
    try {
        // todo: verify body
        const { user_name } = req.body
        const result = await UserServices.nameVerification(user_name)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error nameVerification requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getName(req, res) {
    try {
        // todo: verify body
        const { user_name } = req.body
        const result = await UserServices.getName(user_name, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getName requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

async function getEmail(req, res) {
    try {
        // todo: verify body
        const { user_email } = req.body
        const result = await UserServices.getEmail(user_email, req.user)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error getEmail requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}






module.exports.changeName = changeName;
module.exports.changePassword = changePassword;
module.exports.changeEmail = changeEmail;
module.exports.createUser = createUser;
module.exports.connectUser = connectUser;
module.exports.deleteUser = deleteUser;
module.exports.nameVerification = nameVerification;
module.exports.getName = getName;
module.exports.getEmail = getEmail;
