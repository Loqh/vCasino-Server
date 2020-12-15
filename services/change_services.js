var { dbQuery } = require('../database');
const crypto = require('crypto')

async function changeMail(req, res) {
    var sql = "UPDATE users SET user_email = '" + req.user_email + "' WHERE user_id = " + req.user_id + ""
    console.log(sql);
        try {
            const result = await dbQuery(sql);
            console.log(result)

        }
        catch(err) {
            console.log("createUser error");
            console.log(err);
            throw new Error('Cannot change mail')
        }
    }


async function changeName(req, res) {
    var sql = "UPDATE users SET user_name = '" + req.user_name + "' WHERE user_id = " + req.user_id
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("createUser error");
        console.log(err);
        throw new Error('Cannot change Name')
    }
}


async function changePassword(req, res) {
    password = crypto.createHash('sha512').update(password).digest('hex')
    var sql = "UPDATE users SET user_password = '" + password + "' WHERE user_id = " + req.user_id
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("createUser error");
        console.log(err);
        throw new Error('Cannot change Password')
    }
}


exports.changeMail = changeMail;
exports.changeName = changeName;
exports.changePassword = changePassword;