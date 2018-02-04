const inquire = require('inquirer');
const Table = require('cli-table');
const sqlQueries = require('./sqlQueries.js')

class Customer {

    constructor() {}

    checkStock(products, productId, productQuantity) {
        let isInStock = false;
        products.forEach(element => {
            if (element.item_id === productId) {
                if (element.stock_quantity >= productQuantity) {
                    isInStock = true;
                }
            }
        });
        console.log(isInStock);
        return isInStock;
    }

    sellPrompt(products) {
        inquire.prompt([{
                type: 'inputs',
                name: 'productId',
                message: 'Enter the product id you want to buy:'
            },
            {
                type: 'inputs',
                name: 'productQuantity',
                message: 'How many would you like to buy:'
            }
        ]).then(((data) => {
            if (this.checkStock(products, +data.productId, +data.productQuantity)) {
                sqlQueries.updateQuery(data.productId, );
            } else {
                console.log('Sorry, not enough in stock.');
            }
        }).bind(this)).catch((err) => {
            if (err) {
                console.log('something busted', err);
            }
        });
    };


    displayProducts() {
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
        sqlQueries.selectQuery(table, this.sellPrompt.bind(this));
    }
};

module.exports = Customer;