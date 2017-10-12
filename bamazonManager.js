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
			choices: ["View products for sale", "View low inventory", "Add to inventory", "Add new product"],
		}
	]).then(function(answers){
		console.log(answers.menu);
		if (answers.menu === "View products for sale"){
			viewProductForSale();
		}
		else if(answers.menu === "View low inventory"){
			viewLowInventory();
		}
		else if(answers.menu === "Add to inventory"){
			addToInventory();
		}
		else if(answers.menu === "Add new product"){
			addNewProduct();
		}
	})
};

function viewProductForSale(){
	connection.query("select * from products", function(err, res){
		if(err) throw err;
		console.log(res);
	});
}

function viewLowInventory(){
	connection.query("select * from products where stock_quantity < 5", function(err, res){
		if (err) throw err;
		console.log(res);
	});
}

function addToInventory(){
	inquirer.prompt([
		{
			type: "input",
			name: "id",
			message: "Type an ID of the product you would like to add more inventory",
		},
		{
			type: "input",
			name: "quantity",
			message: "How many?"
		}
	]).then(function(answers){
		connection.query("select stock_quantity from products where item_id = " + answers.id, function(err, res){
			if(err) throw err;
			console.log(answers.quantity);
			connection.query("update products set ? where ?", 
				[{
					stock_quantity: res[0].stock_quantity+parseInt(answers.quantity),
				},
				{
					item_id: answers.id,
				}], function(err, res){
					if(err) throw err;
					console.log("Inventory was updated");
			})
		});

	});
}

function addNewProduct(){
	inquirer.prompt([
		{
			type: "input",
			name: "productName",
			message: "What is the name of product?",
		},
		{
			type: "list",
			name: "department",
			message: "Which department is it?",
			choices: ["books", "movies", "electronics", "home", "beauty"],
		},
		{
			type: "input",
			name: "price",
			message: "What is the price?",
		},
		{
			type: "input",
			name: "stocks",
			message: "How many stocks?",
		},
	]).then(function(answers){
		connection.query("insert into products set ?", 
			{
				product_name: answers.productName,
				department_name: answers.department,
				price: answers.price,
				stock_quantity: answers.stocks
			}, function(err, res){
				if(err) throw err;
				console.log("Added new product");
		})
	});
}