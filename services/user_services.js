var { dbQuery } = require('../database');
const crypto = require('crypto')

async function changeMail(user_email, user_id) {
    console.log("changeMail req user");
    console.log(user_email);
    console.log(user_id)
    var sql = "UPDATE users SET user_email = '" + user_email + "' WHERE user_id = " + user_id
    console.log(sql);
        try {
            const result = await dbQuery(sql);
            console.log(result)

        }
        catch(err) {
            console.log("changeMail error");
            console.log(err);
            throw new Error('Cannot change mail')
        }
    }


async function changeName(req, res) {
    var sql = "UPDATE users SET user_name = '" + req.user_name + "' WHERE user_id = " + user_id
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("changeName error");
        console.log(err);
        throw new Error('Cannot change Name')
    }
}


async function changePassword(req, res) {
    password = crypto.createHash('sha512').update(password).digest('hex')
    var sql = "UPDATE users SET user_password = '" + password + "' WHERE user_id = " + user_id
    console.log(sql);
    try {
        const result = await dbQuery(sql);
        console.log(result)

    }
    catch(err) {
        console.log("changePassword error");
        console.log(err);
        throw new Error('Cannot change Password')
    }
}


function connectUser(req, res) {
    console.log(req);
    var sql = "SELECT user_id FROM users WHERE user_email='" + req.user_email + "' && user_password ='" + req.user_password + "'";
    db.connection.query(sql, function (err, result) {
        if (result.length === 0) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result[0].user_id);
        }
    });
}



function deleteUser(req, res) {
    var sql = "DELETE FROM users WHERE id='"+user_id+"'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result);
        }
    });
}

function nameVerification (req, res) {
    console.log(req.user_name);
    var sql = "SELECT user_name FROM users WHERE user_name='" + req.user_name
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.error(err)
            return res.status(500).end()
        }
        if (!result || result.length === 0) {
            console.log("name is available");
            res.status(200).send();

        } else {
            console.log('name is already taken');
            res.status(400).send('Something broke!');
        }
    });
}

function getName (req, res) {
    var sql = "SELECT user_name FROM users WHERE id=" + req.user_id + "'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result);
        }
    });
}

function getEmail (req, res) {
    var sql = "SELECT user_email FROM users WHERE id=" + req.user_id + "'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+ result);
        }
    });
}



exports.connectUser = connectUser;
exports.deleteUser = deleteUser;
exports.nameVerification = nameVerification;
exports.getName = getName;
exports.getEmail = getEmail;
exports.changeMail = changeMail;
exports.changeName = changeName;
exports.changePassword = changePassword;