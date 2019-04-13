var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '29tarunkantiwal',
    database: 'Hospital',
})

module.exports = connection;