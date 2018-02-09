const mysql = require('mysql2');

const sqlQueries = {
    // create the connection to database
    connection: mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'bamazon',

    }),

    queryTable: function (table, _callback, query) {
        this.connection.query(query,
            function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    results.forEach(element => {
                        table.push(Object.values(element));
                    });
                    console.log(table.toString());
                    return _callback(results);
                }

            }
        );
    },

    allQuery: function (query) {
        this.connection.query(query,
            function (err, results) {
                if (err) {
                    console.log(err);
                } else {
                    //console.log(results);
                }

            }
        );
    }
};

module.exports = sqlQueries;