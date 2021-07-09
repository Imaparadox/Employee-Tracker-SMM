class Questions {
    get mainPromptMenu() {
        let choices = [
            'View all Employees',
            'View all Roles',
            'View all Departments',
            'Add a Employee',
            'Add a Role',
            'Add a Department',
            'Update Employees Role',
            'Quit'
        ];
        return {
            type: 'list',
            message: 'Main Menu:',
            choices: choices,
            name: 'choice',
            pageSize: choices.length
        };
    }
    get addEmployees() {
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
    get addRole() {
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
            message: `Please select the department this role belongs to. `,
            name: 'department',
            choices: []
        }]
    }
    get addDepartment() {
        return {
            type: 'input',
            message: `Please enter a department name`,
            name: 'department'
        }
    }
    get confirmInput() {
        return {
            type: "confirm",
            message: "",
            name: "confirm"
        }
    }
}

module.exports = Questions;