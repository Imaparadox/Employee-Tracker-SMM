// const mysql = require('mysql');
const cTable = require('console.table');
const inquirer = require('inquirer');
const { prompt } = require('inquirer');
const dB = require('./db');


async function mainPromptMenu() {
    let queries = [
        'View all Employees',
        'View all Roles',
        'View all Departments',
        'Add a Employee',
        'Add a Role',
        'Add a Department',
        'Update Employee Role',
        'Quit'
    ];
   prompt([
        {
            type: 'list',
            message: 'Main Menu:',
            choices: queries,
            name: 'choice'
        }
    ])
        .then((answer) => {
            switch (answer.choice) {
                case 'View all Employees':
                    //await  function
                    break;
                case 'View all Roles':
                    //await  function
                    break;
                case 'View all Departments':
                    //await  function
                    break;
                case 'Add a Employee':
                    await addEmployees();
                    break;
                case 'Add a Role':
                    await addRole();
                    break;
                case 'Add a Department':
                    await addDepartment();
                    break;
                case 'Update Employee Role':
                    await updateEmployeeRole();
                    break;
                case 'Confirm Input':
                    await confirmInput();
                    break;
                case "Quit":
                    break;
                default:
                    break;
            }
        

            function addEmployees() {
                return [{
                    type: 'input',
                    message: `Please enter employee's first name.`,
                    name: 'first_name'
                },
                {
                    type: 'input',
                    message: `Please enter employee's last name.`,
                    name: 'last_name',
                },
                {
                    type: 'list',
                    message: `Please select your employee's company role.`,
                    name: 'role',
                    choices: []
                },
                {
                    type: 'list',
                    message: `Please select your employee's manager.`,
                    name: 'manager',
                    choices: []
                }];
            }
            function addRole() {
                return [{
                    type: 'input',
                    message: `Please enter a name for your role.`,
                    name: 'title'
                },
                {
                    type: 'input',
                    message: `Please enter a salary amount.`,
                    name: 'salary'
                },
                {
                    type: 'list',
                    message: `Please select the department this role belongs to.`,
                    name: 'department',
                    choices: []
                }]
            }
            function addDepartment() {
                return {
                    type: 'input',
                    message: `Please enter a department name.`,
                    name: 'department'
                };
            }
            function updateEmployeeRole() {
                return [{
                    type: 'list',
                    message: `Please select an employee to edit.`,
                    choices: []
                },
                {
                    type: 'list',
                    message: `Please choose a new role for your employee.`,
                    choices: []
                }];
            }
            function confirmInput() {
                return {
                    type: "confirm",
                    message: "",
                    name: "confirm"
                };
            }


            module.exports = Questions;

