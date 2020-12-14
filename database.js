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

function dbQuery(sql_str) {
    return new Promise((resolve, reject) => {
        con.query(sql_str, function (err, result) {
            console.log("err");
            console.log(err);
            console.log("result");
            console.log(result);
            if (err) {
                reject(err)
            }
            resolve(result)
        });
    })
}

module.exports.connection = con;
exports.dbQuery = dbQuery
