var db = require('../database');

function NewUser(name) {
    var sql = "INSERT INTO users VALUES ('" + name + "')";
    db.connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

function Greetings(name) {
    console.log('Greetings ' + name);
}

module.exports.newuser = NewUser;
module.exports.greet = Greetings;