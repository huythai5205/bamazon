DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE `products`
(
  `item_id` int
(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar
(30) NOT NULL,
  `department_name` varchar
(30) NOT NULL,
  `price` float DEFAULT '0',
  `stock_quantity` int
(11) DEFAULT '0',
  PRIMARY KEY
(`item_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8

CREATE TABLE `departments`
(
  `department_id` int
(11) NOT NULL AUTO_INCREMENT,
  `department_name` varchar
(30) DEFAULT NULL,
  `over_head_costs` float DEFAULT NULL,
  PRIMARY KEY
(`department_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8