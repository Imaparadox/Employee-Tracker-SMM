const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };  
    
viewAllDepartments() {
    return this.connection.promise().query('SELECT * FROM department')
}; 
};

module.exports = new DataBase(connection);