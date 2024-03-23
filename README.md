[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/mMAYBnR0)

DevOps_SE-206255 Project
=
---
## UPDATE : 2024.03.09

### MEMBER (Please fill your name)
    642115501 Changseong Lee
    652115515 Tao Hu
    652115521 YING ZHANG
    652115019 Thanaphat Sanngoen


### SUMMARY
    This is the DevOps project using Node js., Docker, Kanban chart, javascript and etc.


### TASKS [insert X when certain task is complete.]
    
- TASK1 [ ]
- TASK2 [ ]
- TASK3 [ ]
- TASK4 [ ]
- TASKn [ ]

## SQL CREATE TABLE

user TABLE

    create table user(
    uid int auto_increment primary key,
    user_password varchar(20) not null,
    user_name varchar(30) not null,
    isSeller boolean not null
    );

category TABLE

    create table category(
    category_id int auto_increment primary key,
    category_name varchar(20) not null
    );`

product TABLE

    create table product(
    product_id int auto_increment primary key,
    date varchar(30) not null,
    product_category varchar(20) not null,
    product_name varchar(20) not null,
    product_description varchar(600) not null,
    product_sales_count int,
    product_price decimal(15,2) not null,
    product_image varchar(400),
    product_price_promotion varchar(50)
    );

other essential TABLE (please make a note above using the format under when new table is created.)

    create table newTable(
    ```
    
    add attributes.

    ```
    );

`
## SQL DUMMY INSERT INTO TABLE

user TABLE

    INSERT INTO user(id, password, name, seller)
    values('admin', 'admin0000', 'ADMIN', TRUE)
    ;

category TABLE

    INSERT INTO category(category_name) VALUES('${category}')

product TABLE

    `INSERT INTO product(date, product_category, product_name, product_description, product_sales_count, product_price, product_image, product_price_promotion)
    VALUES ('${date}', '${category}', '${itemName}', '${detail}', 0 , '${price}', '${image}', ' ')`


## SQL UPDATE

UPDATE "product" TABLE

    `UPDATE product SET product_name = '${itemName}' WHERE product_name = '${row[0].product_name}';`
    `UPDATE product SET product_category = '${category}' WHERE product_category = '${row[0].product_category}';`
    `UPDATE product SET product_description = '${detail}' WHERE product_description = '${row[0].product_description}';`
    `UPDATE product SET product_price = '${price}' WHERE product_price = '${row[0].product_price}';`
    `UPDATE product SET product_image = '${image}' WHERE product_image = '${row[0].product_image}';`
    `UPDATE product SET product_price_promotion = '${promotion}' WHERE product_price_promotion = '${row[0].product_price_promotion}';`


UPDATE "category" TABLE

    `UPDATE category SET category_name = '${newData}' WHERE category_name = '${oldData}'`    



## NPM 'IN USE'

Please install npm under to run.

    "axios"
    "body-parser"
    "ejs"
    "express"
    "express-session"
    "mysql2"
    "nodemon"

`

## OTHER 'IN USE'

- Bootstrap v5.3.2


\
\
\
[Go To TOP](#TOP)

