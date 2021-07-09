const mysql = require('mysql');
const cTable = require('console.table');
const inquirer = require('inquirer');

// const initSearch = () => {
//     inquirer
//         .prompt([
//             {
//                 type: "list",
//                 name: "mainMenu",
//                 message: `Please select from the following options below`,
//                 choices: [
//                     'Find all Departments',
//                     'Find all Roles',
//                     'Find all Employees',
//                     'Edit Department',
//                     'Edit Role',
//                     'Edit Employees',
//                 ]
//             }
//         ])
//         .then((answer) => {
//             switch (answer.mainMenu) {
//                 case 'Find all Departments':
//                     //function
//                     break;
//                 case 'Find all Roles':
//                     //function
//                     break;
//                 case 'Find all Employees':
//                     //function
//                     break;
//                 case 'Edit Department':
//                     //function
//                     break;
//                 case 'Edit Role':
//                     //function
//                     break;
//                 case 'Edit Employees':
//                     //function
//                     break;
//             };
//         });
// }

// getAllDepartments()