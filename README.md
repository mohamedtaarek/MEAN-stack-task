# MEAN-Stack-Technical-Task

EasyKash MEAN Stack technical task

```mysql
CREATE DATABASE easykash;
use easykash;
CREATE TABLE transactions(
    id 		int PRIMARY KEY AUTO_INCREMENT,
	title 	varchar(30) not null,
	image	varchar(100),
	price	float(5,3) not null,
	last_updated	timestamp DEFAULT now() ON UPDATE now()
    );

```
