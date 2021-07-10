// const mysql = require('mysql');
const connection = require('./db/connection');
const cTable = require('console.table');
const { prompt } = require('inquirer');
const db = require('./db');

function mainPromptMenu() {
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
            type: 'rawlist',
            message: 'Main Menu:',
            choices: queries,
            name: 'choice'
        }
    ])
        .then((answer) => {
            switch (answer.choice) {
                case 'View all Departments':
                    viewAllDepartments();
                    break;
                case 'View all Roles':
                    viewAllRoles();
                    console.log(viewAllRoles());
                    break;
                case 'View all Employees':
                    viewAllEmployees();
                    console.log(viewAllEmployees());
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add a Employee':
                    addEmployees();
                    break;
                case 'Update Employee Role':
                    updateEmployeeRole();
                    break;
                // case 'Confirm Input':
                //     confirmInput();
                //     break;
                case "Quit":
                    break;
                default:
                    break;
            }
        })
};

function viewAllDepartments() {
    db.viewAllDepartments().then(([results]) => {
        console.log(results)
    })
    //THEN re run the function that asks the initial inquirer prompts 
};
// console.log(viewAllDepartments());

function viewAllRoles() {
    return this.connection.promise().query('SELECT * FROM role')
};

function viewAllEmployees() {
    return this.connection.promise().query('SELECT * FROM employee')
};

function addDepartment() {
    //use prompt to make it run inquirer
    //THEN re run the function that asks the initial inquirer prompts 
    //BUILD sql language in function
    return {
        type: 'input',
        message: `Please enter a department name.`,
        name: 'department'
    };
};

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
};

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
};

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
};

// function confirmInput() {
//     return {
//         type: "confirm",
//         message: "",
//         name: "confirm"
//     };
// };

mainPromptMenu();


// get the prompts to show up in terminal and then be able to console log the answers that i choose
//IF the answers are showing up make sure I can send them to the database.
//IF they show up in the database make sure you can get a response from the database back. 
//(ie get the same data back in the form of a console log or something.) 
