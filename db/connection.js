const mysql = require('mysql2');

// Connect to database
const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '34%^Gh0stR3c0n117',
    database: 'employees_db'
});
dbConnection.connect((err) => {
    if (err) {
        console.log('Error connecting to database');
        return;
    }
    console.log('Connected to the employees database.');
});


module.exports = connection;