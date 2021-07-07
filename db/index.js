const dbConnection = require('./connection');

class DB {
    constructor(dbConnection) {
         this.connection = dbConnection;
    }
}