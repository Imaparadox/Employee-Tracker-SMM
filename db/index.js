const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };

    findAllDepartment() {
        return this.connection.promise().query('SELECT * FROM department')
    }
};

module.exports = DataBase;