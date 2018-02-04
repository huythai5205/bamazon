const mysql = require('mysql2');

const sqlQueries = {
    // create the connection to database
    connection: mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'bamazon'
    }),

    selectQuery: function (table, _callback) {
        let results;
        this.connection.query(
            'SELECT * FROM `products`',
            function (err, results) {
                results.forEach(element => {
                    table.push(
                        [element.item_id, element.product_name, element.price, element.stock_quantity]
                    );
                });
                console.log(table.toString());
                return _callback(results);
            }
        );
    },


    updateQuery: function (productId, quantity) {
        console.log(productId, quantity);
        this.connection.query(
            'UPDATE `products` SET ? WHERE ?', [{
                    stock_quantity: quantity
                },
                {
                    id: productId
                }
            ],
            function (err, results) {
                console.log(results); // results contains rows returned by server
            }
        );
    },

    insertQuery: function () {
        this.connection.query(
            'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    },
};

module.exports = sqlQueries;