const connection = require('./connection');

class DataBase {
    constructor(connection) {
        this.connection = connection;
    };   
};

module.exports = new DataBase(connection);