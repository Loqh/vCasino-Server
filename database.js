var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "vcasino",

});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports.connection = con;
