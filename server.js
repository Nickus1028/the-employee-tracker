const inquirer = require('inquirer');
const cTable = require('console.table');

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
                console.log("Bye!");
                connection.end();
                break
      }
    })
};

 startEmployeeTracker();