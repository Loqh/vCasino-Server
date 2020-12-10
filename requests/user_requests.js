var db = require('../database');

function createUser(req, res) {
    var sql = "INSERT INTO users VALUES ('0','" + req.name + "','" + req.password + "','" + req.email + "')";
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send(result.insertId);
        }
    });
}

function connectUser(req, res) {
    var sql = "SELECT id FROM users WHERE email='" + req.email + "' && password ='" + req.password + "'";
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK, the id is:'+ result.insertId);
        }
    });
}

function changeMail(req, res) {
    var sql = "UPDATE users SET email =" + req.email + "' WHERE id = " + req.id + "')";
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK');
        }
    });
}

function changeName(req, res) {
    var sql = "UPDATE users SET name =" + req.name + "' WHERE id = " + req.id + ""
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK');
        }
    });
}

function changePassword(req, res) {
    var sql = "UPDATE users SET password =" + req.password + "' WHERE id = " + req.id + ""
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK');
        }
    });
}

function deleteUser(req, res) {
    var sql = "DELETE FROM users WHERE id='"+req.id+"'"
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(400).send('Something broke!');
        } else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK');
        }
    });
}

module.exports.createUser = createUser;
module.exports.connectUser = connectUser;
module.exports.changeMail = changeMail;
module.exports.changeName = changeName;
module.exports.changePassword = changePassword;
module.exports.deleteUser = deleteUser;
