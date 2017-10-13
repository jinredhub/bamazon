var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "my456123",
  database: "bamazon_db"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("connected as id ", connection.threadId);
	menuOptions();
});

function menuOptions(){
  inquirer.prompt([
    {
      type: "list",
      name: "menu",
      message: "What would you like to do?",
      choices: ["View Product Sales by Department", "Create New Department"],
    }
  ]).then(function(answers){
    console.log(answers.menu);
    if (answers.menu === "View Product Sales by Department"){
      viewProductForSale();
    }
    else if(answers.menu === "Create New Department"){
      createNewDepartment();
    }
  })
};

function viewProductForSale(){
  connection.query("select department_id, products.department_name, over_head_cost, sum(product_sales),  sum(product_sales) -  over_head_cost as total_profit from products inner join department on products.department_name = department.department_name group by department_name", function(err, res){
    if(err) throw err;
    console.log(res);
  });
}

function createNewDepartment(){
  inquirer.prompt([
    {
      type: "input",
      name: "department",
      message: "What is the name of new dapartment?",
    },    
    {
      type: "input",
      name: "overhead",
      message: "What is overhead cost?",
    }
  ]).then(function(answers){
    connection.query("insert into department set ?", 
      {
        department_name: answers.department,
        over_head_cost: answers.overhead
      }, function(err, res){
        if(err) throw err;
        console.log("New department was created");
    })
  })
}