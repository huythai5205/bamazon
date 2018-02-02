const inquire = require('inquirer');
const mysql = require('mysql2');
const Table = require('cli-table');

let products;

class Customer {
    constructor() {

    }

    displayProducts(_callback) {
        const table = new Table({
            head: ['Product Id', 'Product Name', 'Price', 'In Stock'],
            chars: {
                'top': '═',
                'top-mid': '╤',
                'top-left': '╔',
                'top-right': '╗',
                'bottom': '═',
                'bottom-mid': '╧',
                'bottom-left': '╚',
                'bottom-right': '╝',
                'left': '║',
                'left-mid': '╟',
                'mid': '─',
                'mid-mid': '┼',
                'right': '║',
                'right-mid': '╢',
                'middle': '│'
            }
        });

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1234',
            database: 'bamazon'
        });

        connection.connect(function (error) {
            if (error) throw error;
        });

        connection.query(
            'SELECT * FROM `products`',
            function (err, results) {
                results.forEach(element => {
                    table.push(
                        [element.item_id, element.product_name, element.price, element.stock_quantity]
                    );
                });
                console.log(table.toString());
                _callback();
            }
        );
    }

    sellPrompt() {
        inquire.prompt([{
                type: 'inputs',
                name: 'productId',
                message: 'Enter product id you want to buy:'
            },
            {
                type: 'inputs',
                name: 'productQuantity',
                message: 'How many would you like to buy:'
            }
        ]).then((data) => {
            console.log(data);
        });
    }
}

module.exports = Customer;