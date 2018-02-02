const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

function selectQuery() {
    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

function updataQuery() {
    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}

function insertQuery() {
    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}