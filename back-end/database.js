
const mysql = require('mysql2');

var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "8050",
    database: "todolist"
});


module.exports = pool.promise();