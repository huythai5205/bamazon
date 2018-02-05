DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE `products`(
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(30) NOT NULL,
  `department_name` varchar(30) NOT NULL,
  `price` float DEFAULT '0',
  `stock_quantity` int(11) DEFAULT '0',
  prodcut_sales float DEFAULT 0,
  PRIMARY KEY(`item_id`)
)

CREATE TABLE `departments`(
  `department_id` int(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(30) NOT NULL,
  `over_head_costs` float DEFAULT 0,
  PRIMARY KEY(`department_id`)
)


INSERT INTO departments (department_name, over_head_costs) VALUES('Appliances', 30000);
INSERT INTO departments (department_name, over_head_costs) VALUES('Clothes', 10000);
INSERT INTO departments (department_name, over_head_costs) VALUES('Electronics', 20000);