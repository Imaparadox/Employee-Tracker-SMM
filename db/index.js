const dbConnection = require('./connection');

class DataBase {
    constructor(dbConnection) {
         this.connection = dbConnection;
    };   
};

module.exports = dbConnection