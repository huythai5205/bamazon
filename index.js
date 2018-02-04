const inquirer = require('inquirer');
const Customer = require('./bamazonCustomer.js');
const Manager = require('./bamazonManager.js');
const Supervisor = require('./bamazonSupervisor.js');

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
                let manager = new Manager();
                manager.menuPrompt();
                break;
            case 'Supervisor':
                let supervisor = new Supervisor();
                break;
            default:
                console.log('not valid');
        }
    });
}

start();