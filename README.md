# bamazon

It's an Amazon-like storefront utilizing MySQL database to keep tracking of products sale by customer, view and update inventories by manager, and create departments and get departments' profit by supervisor.


run 'npm install' to install npm packages.

type 'node ,/index.js' to start program and pick from choices of Customer, Manager, or Supervisor.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/start-up.PNG)

## Customer Interface:

Once pick Customer, you get a display of products with id, name, department, price and number in stock.  Customer can buy an item by the 'Product Id' and how many they want.  If there are enough in stock, a total will display else you are ask to buy another item or lower your purchase.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/customer-interface.PNG)
![Image](https://github.com/kennyt85/bamazon/blob/master/images/not-enough.PNG)

## Manager Interface:

Manager is given a list to
    * View Products for Sale
    * View Low Inventory
    * Add to Inventory
    * Add New Product.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/manager-interface.PNG)

### View Products for Sale

Manager can view current products in stock for sale.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/view-product.PNG)

### View Low Inventory

Manager can view products with low inventory less than five.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/low-inventory.PNG)

### Add Inventory

Manage can add inventory to current stock.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/add-inventory.PNG)

### Add New Product

Manager can add new products and it will be add to database.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/view-product.PNG)

## Supervisor Interface

### View Product Sales by Department

Supervisor can view departments' sales and profit.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/view-departments.PNG)

### Create New Department

Supervisor can create new departments.

![Image](https://github.com/kennyt85/bamazon/blob/master/images/add-department.PNG)