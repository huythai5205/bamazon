const mysql = require('mysql2');
const inquirer = require('inquirer');
const cliTable = require('cli-table');
const Customer = require('./bamazonCustomer.js');

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
                customer.displayProducts();
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