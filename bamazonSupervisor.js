const inquire = require('inquirer');
const sqlQueries = require('./sqlQueries.js')
const table = require('./createTable.js');

class Supervisor {
    constructor() {}


    menuPrompt() {
        inquire.prompt([{
            type: 'list',
            name: 'view',
            message: 'What would you like to view:',
            choices: ['View Product Sales by Department']
        }]).then(((data) => {
            switch (data.view) {
                case 'View Product Sales by Department':
                    viewProducts();
                    break;
                default:
                    console.log('not valid');
            }
        }).bind(this)).catch((err) => {
            if (err) {
                console.log('something busted', err);
            }
        });
    };
}

module.exports = Supervisor;