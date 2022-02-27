const connection = require('./connection');

function getDepartments() {
    return connection.promise().query("SELECT * FROM departments")
};

module.exports = getDepartments;