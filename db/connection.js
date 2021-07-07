const mysql = require('mysql2');

// Connect to database
const dbConnection = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '34%^Gh0stR3c0n117',
        database: 'employees'
    },
    console.log('Connected to the employees database.')
);


module.exports = dbConnection;