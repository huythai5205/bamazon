const inquire = require('inquirer');
const sqlQueries = require('./sqlQueries.js')
const createTable = require('./createTable.js');

class Supervisor {
    constructor() {}

    createDepartmentPrompt() {
        inquire.prompt([{
            type: 'inputs',
            name: 'name',
            message: 'Enter department name: '
        }, {
            type: 'inputs',
            name: 'headCost',
            message: 'Enter over head cost: '
        }]).then((data) => {
            let query = `INSERT INTO departments (department_name, over_head_costs) VALUES('${data.name}','${data.headCost}')`;
            sqlQueries.allQuery(query);
            return this.menuPrompt();
        }).catch((err) => {
            console.log(err);
        });
    }


    menuPrompt() {
        inquire.prompt([{
            type: 'list',
            name: 'view',
            message: 'What would you like to do: ',
            choices: ['View Product Sales by Department', 'Create New Department']
        }]).then((data) => {
            switch (data.view) {
                case 'View Product Sales by Department':
                    let table = createTable.create(['Department Id', 'Department Name', 'Over Head Costs', 'Products Sales', 'Profit']);
                    let query = 'SELECT department_id, department_name, over_head_costs, products_sales, (products_sales-over_head_costs) AS total_profit FROM departments';
                    console.log(this);
                    sqlQueries.queryTable(table, this.menuPrompt.bind(this), query);
                    break;
                case 'Create New Department':
                    this.createDepartmentPrompt();
                    break;
                default:
                    console.log('not valid');
            }
        }).catch((err) => {
            if (err) {
                console.log('something busted', err);
            }
        });
    };
}

module.exports = Supervisor;