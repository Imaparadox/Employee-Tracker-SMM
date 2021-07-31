const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };

    locateAllDepartments() {
        return this.connection.promise().query(
            `SELECT department.id, department.name FROM department;`
        );
    };

    locateAllRoles() {
        return this.connection.promise().query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    };

    locateAllEmployees() {
        return this.connection.promise().query(
            `SELECT * FROM employee_db.employee;`
        );
    };

    createDepartment(department) {
        return this.connection.promise().query("INSERT INTO department SET ?", department);
      }

};

module.exports = new DataBase(connection);