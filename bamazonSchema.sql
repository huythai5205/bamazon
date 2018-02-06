DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE `products`(
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `department_name` varchar(30) NOT NULL,
  `price` float DEFAULT '0',
  `stock_quantity` int(11) DEFAULT '0',
  `product_sales` float DEFAULT '0',
  PRIMARY KEY(`item_id`)
);

CREATE TABLE `departments`(
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(30) NOT NULL,
  `over_head_costs` float DEFAULT 0,
  PRIMARY KEY(`department_id`)
);

INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('Toaster','Appliances',10,100,1000);
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('Blender','Appliances',15,50,10000);
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('T-shirt','Clothes',10,100,1000);
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('Pants','Clothes',10,100,1000);
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('TV','Electronics',100,100,3000);
INSERT INTO products(product_name, department_name, price, stock_quantity, product_sales) VALUES('Laptop','Electronics',1000,100,7000);

INSERT INTO departments (department_name, over_head_costs) VALUES('Appliances', 30000);
INSERT INTO departments (department_name, over_head_costs) VALUES('Clothes', 10000);
INSERT INTO departments (department_name, over_head_costs) VALUES('Electronics', 20000);