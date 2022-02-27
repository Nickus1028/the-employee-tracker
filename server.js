const inquirer = require('inquirer');
const cTable = require('console.table');
const connection = require('./utils/connection');
const getDepartments = require ('./utils/queryDB');

let departmentNamesArr = [];

// Starter menu
function startEmployeeTracker() {
    console.log("---Welcome To The Employee Tracker Database---");
    inquirer
    .prompt({
      type: "list",
      name: "search",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update an employee role",
        "Exit"
    ]
  
}).then (function (answer) {
      switch (answer.search) {
            case "View all departments":
              viewAllDepartments();
              break;
  
            case "View all roles":
              viewAllRoles();
              break;
  
            case "View all employees":
               viewAllEmployees();
               break;
  
            case "Add a department":
              addDepartment();
              break;
  
            case "Add a role":
              addRole();
              break;
  
            case "Add an employee":
                addEmployee();
                break;
  
            case "Update an employee role":
                updateEmployeeRole();
                break;
            
            case "Exit":
                console.log("Leaving the Employee Tracker Database!");
                connection.end();
                break
      }
    });
};

// Views all departments from our DB by quering departments
function viewAllDepartments() {
  const query = connection.query("SELECT * FROM departments", function (err, res) {
      if (err) throw err
      console.log("\n Departments in database \n");
      console.table(res);
      startEmployeeTracker();
  });
};

// Views all roles from our DB by department id
function viewAllRoles() {
  const query = connection.query("SELECT roles.id, roles.title, roles.salary, departments.name as department FROM roles JOIN departments ON roles.department_id = departments.id", function (err, res) {
      if (err) throw err
      console.log("\n All Roles \n")
      console.table(res);
      startEmployeeTracker();
  });
};

// View all employees from our DB
function viewAllEmployees() {
  const query = connection.query("SELECT e1.id, e1.first_name, e1.last_name, roles.title as role, departments.name AS department, roles.salary, Concat(e2.first_name, ' ', e2.last_name) AS manager FROM employees e1 LEFT JOIN roles ON e1.role_id = roles.id LEFT JOIN departments ON roles.department_id = departments.id LEFT JOIN employees e2 ON e2.id = e1.manager_id", function (err, res) {
      if (err) throw err
      console.log ("\n All Employees \n");
      console.table(res);
      startEmployeeTracker();
  });
};

function addDepartment() {
  inquirer.prompt ({
      type: 'input',
      name: 'department',
      message: 'What is the name of the new department?'
  }).then(function(input) {
      const query = connection.query(
        'INSERT INTO departments SET ?',
        {
          name: input.department
        },
        function(err, res) {
          if (err) throw err;
          console.log('Department added successfully!\n');
          startEmployeeTracker();
        });
  });
};

function addRole () {
 
  getDepartments().then((rows) => {  
      let departmentArray = rows[0];          
      for (var i=0; i < departmentArray.length; i++) {
        let department = departmentArray[i].name;
        departmentNamesArr.push(department);
      };
  });



  inquirer.prompt([
    {
        type: "input",
        name: "roleTitle",
        message: "What is the new role title? "
    },
    {
        type: "number",
        name: "salary",
        message: "What is the new role salary? "
    },
    {   
        type: "list",
        name: "department",
        message: "What department does the new role reside in? ",
        choices: departmentNamesArr
    }]);
};

 startEmployeeTracker();