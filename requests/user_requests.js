var db = require('../database');

function createUser(req, res) {
    var sql = "INSERT INTO users VALUES (0, '" + req.name + "')";
    db.connection.query(sql, function (err, result) {
        if (err) {
            console.log('error on something');
            //console.log(err);
            res.status(500).send('Something broke!');
        }
        else {
            console.log("1 record inserted");
            res.status(200).send('Everything OK');
        }
    });
}

module.exports.newuser = createUser;