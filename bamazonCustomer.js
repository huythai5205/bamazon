const inquire = require('inquirer');
const sqlQueries = require('./sqlQueries.js')
const createTable = require('./createTable.js');

class Customer {
    constructor() {}

    checkStock(products, productId) {
        return products.find((item) => {
            return item.item_id === productId;
        });
    }

    getInvoice(item, buyQuantity) {
        let total = item.price * buyQuantity;
        console.log('Your order has been placed.\nYour total: $' + total);
        return this.displayProducts();
    }

    sellPrompt(products) {
        inquire.prompt([{
                type: 'inputs',
                name: 'buyId',
                message: 'Enter the product id you want to buy:'
            },
            {
                type: 'inputs',
                name: 'buyQuantity',
                message: 'How many would you like to buy:'
            }
        ]).then(((data) => {
            let item = this.checkStock(products, +data.buyId);
            if (item.stock_quantity >= data.buyQuantity) {
                let leftInStock = item.stock_quantity - data.buyQuantity;
                let updateProducts = `UPDATE products SET stock_quantity = ${leftInStock} WHERE item_id = ${data.buyId}`;
                let updateDepartment = `UPDATE departments SET products_sales = (products_sales + ${item.price * data.buyQuantity}) WHERE department_name = ${item.department_name}`;
                sqlQueries.allQuery(updateProducts);
                sqlQueries.allQuery(updateDepartment);
                return this.getInvoice(item, data.buyQuantity);
            } else {
                console.log('Sorry, not enough in stock. You can reorder item in a smaller amount or another item.');
                return this.sellPrompt(products);
            }
        }).bind(this)).catch((err) => {
            if (err) {
                console.log('something busted', err);
            }
        });
    }


    displayProducts() {
        let query = `SELECT item_id, product_name, department_name, price, stock_quantity FROM products`;
        let table = createTable.create(['Product Id', 'Product Name', 'Department_name', 'Price', 'In Stock']);
        return sqlQueries.queryTable(table, this.sellPrompt.bind(this), query);
    }
}

module.exports = Customer;