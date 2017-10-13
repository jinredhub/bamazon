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
	readProducts();
});

function readProducts(){
	connection.query("select * from products", function(err, res){
		if(err) throw err;
		console.log(res);
		placeOrder();
	});
};

function placeOrder(){
	inquirer.prompt([
		{
			type: "input",
			name: "id",
			message: "Type an ID of the product you would like to buy"
		},
		{
			type: "input",
			name: "quantity",
			message: "How many units of product would you like to buy?"
		}
	]).then(function(answers){
		// console.log(isNaN(answers.id));
		// var id = parseInt(answers.id);
		connection.query("select stock_quantity from products where item_id = " + answers.id, function(err, res){
			if (err) throw err;
			// console.log(res[0].stock_quantity);
			if (answers.quantity > res[0].stock_quantity){
				console.log("Insufficient quantity!");
			}
			else if (answers.quantity < res[0].stock_quantity) {
				// console.log("we have a lot of that!");
				connection.query("update products set ? where ?", 
					[{
						stock_quantity: res[0].stock_quantity - parseInt(answers.quantity),
					},{
						item_id: answers.id,
					}], function(err, res){
						if(err) throw err;
						connection.query("select price from products where item_id = " + answers.id, function(err, res){
							if(err) throw err;
							// console.log("1 price: ", res[0].price);
							console.log("The total cost of your purchase is $" + answers.quantity * res[0].price);
							var id = answers.id;
							var totalprice = answers.quantity * parseFloat(res[0].price);
							updateProductSales(id, totalprice);

						})
				})
			}
		
		})

	});
}

function updateProductSales(id, totalprice){
	connection.query("select * from products where item_id = " + id, function(err, res){
		if(err) throw err;
		// console.log(res);
		console.log("totalprice: ",totalprice);
		// console.log("db price: ", res[0].price);
		connection.query("update products set ? where ?", 
			[{
				product_sales: res[0].product_sales + parseFloat(totalprice)
			},{
				item_id: id
			}], function(err, res){
				if(err) throw err;
				console.log("product sales was updated");
		})
	})
};