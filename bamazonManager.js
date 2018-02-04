const inquire = require('inquirer');
const sqlQueries = require('./sqlQueries.js')
const table = require('./createTable.js');

class Manager {
    constructor() {}

    viewProducts() {
        sqlQueries.selectQuery(table, this.menuPrompt);
    }

    viewLowInventory() {
        let query = '';
        sqlQueries.selectQuery(table, this.menuPrompt);
    }

    addInventory() {

    }

    addNewProduct() {

    }

    menuPrompt() {
        inquire.prompt([{
            type: 'list',
            name: 'view',
            message: 'What would you like to view:',
            choices: ['View Products for Sale', 'View Low Inventory', 'Add to Inventory', 'Add New Product']
        }]).then(((data) => {
            switch (data.view) {
                case 'View Products for Sale':
                    viewProducts();
                    break;
                case 'View Low Inventory':
                    viewLowInventory();
                    break;
                case 'Add to Inventory':
                    addInventory();
                    break;
                case 'Add New Product':
                    addNewProduct();
                    break;
                default:
                    code block
            }
        }).bind(this)).catch((err) => {
            if (err) {
                console.log('something busted', err);
            }
        });
    };
}

module.exports = Manager;