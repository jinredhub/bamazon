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

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/1-customer%20view/1.png)
6. App will update the database  

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/1-customer%20view/reflect%20stock.png)
7. If there is not enogh stock, it will prevent the order from going through  

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/1-customer%20view/not%20enogh.png)

### Manager View

#### View Products for Sale

1. Run bamazonManager.js on node.js
2. Choose View Products for Sale

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/1-View%20Products%20for%20Sale.png)

3. App will display all products

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/2-View%20Products%20for%20Sale.png)

#### View Low Inventory

1. Run bamazonManager.js on node.js
2. Choose View Low Inventory

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/1-View%20Low%20Inventory.png)

3. App will display low inventories

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/2-View%20Low%20Inventory.png)

#### Add to Inventory

1. Run bamazonManager.js on node.js
2. Choose Add to Inventory

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/1-Add%20to%20Inventory.png)

3. Type an ID of the product to add inventory

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/2-Add%20to%20Inventory.png)

4. Type quantity

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/3-Add%20to%20Inventory.png)

5. App will upadate the database

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/2-manager%20view/4-Add%20to%20Inventory.png)

#### Add New Product

1. Run bamazonManager.js on node.js
2. Choose Add new product

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/3-rrr/1.png)

3. Type the name of product
4. Choose department
5. Type the price
6. Type the stock quantity

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/3-rrr/5.png)

7. App will update the database

### Supervisor View

#### View Product Sales by Department

1. Run bamazonSupervisor.js on node.js
2. Choose View product sales by department

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/4-rrr/1.png)

3. App will display summarized product informaiton

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/4-rrr/sum.png)

#### Create new department

1. Run bamazonSupervisor.js on node.js
2. Choose Create new department

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/4-rrr/new%20depart1.png)

3. Type the name of the new department
4. Type overhead cost
5. App will update the database

![alt text](https://github.com/jinredhub/bamazon/blob/master/screenshots/4-rrr/new%20depart2.png)

