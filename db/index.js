const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };

    LocateAllDepartments() {
        return this.connection.promise().query(
            `SELECT department.id, department.name FROM department;`
        );
    };

    LocateAllEmployees() {
        return this.connection.promise().query(
            `SELECT * FROM employee_db.employee;`
        );
    };
};

module.exports = new DataBase(connection);