const mysql = require('mysql2');
const inquirer = require('inquirer');
const cliTable = require('cli-table');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'bamazon'
});

connection.connect(function (error) {
    if (error) throw err;
    start();
});

function start() {
    inquirer.prompt([{
        type: 'list',
        name: 'role',
        choices: ['Customer', 'Manager', 'Supervisor']
    }]).then((data) => {
        console.log('data.name');
        switch (data.name) {
            case 'Customer':
                code block
                break;
            case 'Manager':
                code block
                break;
            default:
                code block
        }
    });
}