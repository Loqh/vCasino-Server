var db = require('../database');
const AuthServices = require('../services/auth_services.js')

async function createUser(req, res) {
    try {
        // todo: verify body
        const { user_name, user_password, user_email } = req.body
        const result = await AuthServices.createUser(user_name, user_password, user_email)
        res.status(200).json({ token: result })
    }
    catch (err) {
        console.log("error createUser requests")
        console.log(err);
        res.status(500).json({ message: err.message })
    }
}

function createWallet(req, res, id) {
    var sql = "INSERT INTO user_wallet VALUES ('0','" + id + "','0','0')";
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('createWallet error');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(""+id);
        }
    });
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

/*function changeMail(req, res) {
    var sql = "UPDATE users SET user_email = '" + req.user_email + "' WHERE user_id = " + req.user_id + ""
    db.connection.query(sql, function (err, result) {
        console.log(result);
        if (result == null) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send();
        }
    });
}*/

function changeName(req, res) {
    var sql = "UPDATE users SET user_name = '" + req.user_name + "' WHERE user_id = " + req.user_id
    db.connection.query(sql, function (err, result) {
        console.log(result);
        if (result == null) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send();
        }
    });
}

function changePassword(req, res) {
    var sql = "UPDATE users SET user_password = '" + req.user_password + "' WHERE user_id = " + req.user_id
    db.connection.query(sql, function (err, result) {
        console.log(result);
        if (result == null) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("pass updated");
            res.status(200).send();
        }
    });
}

function deleteUser(req, res) {
    var sql = "DELETE FROM users WHERE id='"+req.user_id+"'"
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

module.exports.createUser = createUser;
module.exports.connectUser = connectUser;
//module.exports.changeMail = changeMail;
module.exports.changeName = changeName;
module.exports.changePassword = changePassword;
module.exports.deleteUser = deleteUser;
module.exports.nameVerification = nameVerification;
module.exports.getName = getName;
module.exports.getEmail = getEmail;
