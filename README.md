# bamazon

Amazon-like storefront using MySQL with node.js

### Prerequisites

This project requires inquirer and mysql npm.

```
npm install
```

### Customer View

1. Run bamazonCustomer.js on node.js
2. App will display all of the items available for sale.
3. Type an ID of the product you would like to buy
4. Type the quantity of the unit
5. App will display Total price  
https://github.com/jinredhub/bamazon/blob/master/screenshots/1-customer%20view/1.png(screenshots/1-customer view/1.png)
6. App will update the database
pic reflect
7. If there is not enogh stock, it will prevent the order from going through
pic not enogh

### Manager View

#### View Products for Sale

1. Run bamazonManager.js on node.js
2. Choose View Products for Sale
pic 1-View Products for sale
3. App will display all products
pic 2-View products for sale

#### View Low Inventory

1. Run bamazonManager.js on node.js
2. Choose View Low Inventory
pic 1-View Low inventory
3. App will display low inventories
pic 2-View Low inventory

#### Add to Inventory

1. Run bamazonManager.js on node.js
2. Choose Add to Inventory
pic 1-Add to Inventory
3. Type an ID of the product to add inventory
pic 2-Add to Invetory
4. Type quantity
pic 3-Add to inventory
5. App will upadate the database
pic 4-Add to inventory

#### Add New Product

1. Run bamazonManager.js on node.js
2. Choose Add new product
pic 1
3. Type the name of product
4. Choose department
5. Type the price
6. Type the stock quantity
pic 5
7. App will update the database

### Supervisor View

#### View Product Sales by Department

1. Run bamazonSupervisor.js on node.js
2. Choose View product sales by department
pic 1
3. App will display summarized product informaiton
pic sum
