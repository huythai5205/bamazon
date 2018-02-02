const mysql = require('mysql2');
const inquirer = require('inquirer');
const cliTable = require('cli-table');
const Customer = require('./bamazonCustomer.js');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '1234',
//     database: 'bamazon'
// });

// connection.connect(function (error) {
//     if (error) throw error;
//     start();
// });

function start() {
    inquirer.prompt([{
        type: 'list',
        name: 'role',
        message: 'Pick your role:',
        choices: ['Customer', 'Manager', 'Supervisor']
    }]).then((data) => {
        switch (data.role) {
            case 'Customer':
                let customer = new Customer();
                customer.displayProducts(customer.sellPrompt);
                break;
            case 'Manager':
                console.log('Manager');
                break;
            case 'Supervisor':
                console.log('Supervisor');
                break;
            default:
                console.log('not valid');
        }
    });
}

start();