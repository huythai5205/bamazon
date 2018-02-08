DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE `products`(
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `department_name` varchar(30) NOT NULL,
  `price` float DEFAULT '0',
  `stock_quantity` int(11) DEFAULT '0',
  PRIMARY KEY(`item_id`)
);

CREATE TABLE `departments`(
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(30) NOT NULL,
  `over_head_costs` float DEFAULT 0,
  `products_sales` float DEFAULT '0',
  PRIMARY KEY(`department_id`)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Toaster','Appliances',10,100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Blender','Appliances',15,50);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('T-shirt','Clothes',10,100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Pants','Clothes',10,100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('TV','Electronics',100,100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES('Laptop','Electronics',1000,100);

INSERT INTO departments (department_name, over_head_costs, products_sales) VALUES('Appliances', 30000, 32000);
INSERT INTO departments (department_name, over_head_costs, products_sales) VALUES('Clothes', 10000, 20324);
INSERT INTO departments (department_name, over_head_costs, products_sales) VALUES('Electronics', 20000, 53480);