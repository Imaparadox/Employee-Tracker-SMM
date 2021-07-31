// const mysql = require('mysql');
const connection = require('./db/connection');
const cTable = require('console.table');
const { prompt } = require('inquirer');
const db = require('./db');
const { promise } = require('./db/connection');

function mainPromptMenu() {
    let queries = [
        'View all Departments',
        'View all Roles',
        'View all Employees',
        'Add a Department',
        'Add a Role',
        'Add a Employee',
        'Update Employee Role',
        'Quit'
    ];
    prompt([
        {
            type: 'rawlist',
            name: 'choice',
            message: 'Main Menu:',
            choices: queries
        }
    ])
        .then((answer) => {
            switch (answer.choice) {
                case 'View all Departments':
                    viewAllDepartments();
                    break;
                case 'View all Roles':
                    viewAllRoles();
                    break;
                case 'View all Employees':
                    viewAllEmployees();
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
                case "Quit":
                    break;
                default:
                    break;
            }
        })
};

function viewAllDepartments() {
    db.locateAllDepartments()
        .then(([rows]) => {
            let departRows = rows;
            console.log("\n");
            console.table(departRows);
        })
        .then(() => {
            mainPromptMenu()
        });
};


function viewAllRoles() {
    return this.connection.promise().query('SELECT * FROM role')
};

async function viewAllEmployees() {
    const employees = await db.locateAllEmployees();
    console.table(employees);
};

function addDepartment() {
    //use prompt to make it run inquirer
    //THEN re run the function that asks the initial inquirer prompts 
    //BUILD sql language in function
    prompt({
        type: 'input',
        message: `Please enter a department name.`,
        name: 'department'
    })
        .then((answers) => {
            const sql = `INSERT INTO department (name)
        VALUES (?)`
            const result =
                db.query(sql, params => {
                    body.aDepartment()
                })

        });

};

function addRole() {
    prompt([{
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
    }])
};

function addEmployees() {
    prompt([{
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
    }]);
};

function updateEmployeeRole() {
    prompt([{
        type: 'list',
        message: `Please select an employee to edit.`,
        choices: []
    },
    {
        type: 'list',
        message: `Please choose a new role for your employee.`,
        choices: []
    }]);
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
