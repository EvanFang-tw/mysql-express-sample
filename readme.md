
### Run mysql docker
```sh
# Start mysql
./start-db.sh

# Enter mysql
docker exec -it mysql bash

# Login as root
mysql -u root -p
# Enter: adminpw
```

> Use `./teardown-db.sh` to remove mysql container and related files.

### MySQL commands
```sql
show databases;

show schemas;

-- Create database
create database `mydb`;

-- Create user
create user 'appuser' identified with mysql_native_password by 'password';

-- Or use '@' to restrict connection domain
-- create user 'appuser'@'172.17.0.1' identified with mysql_native_password by 'password';

-- Grant user on mydb
grant all privileges on mydb.* to 'appuser';

flush privileges;

-- Login again as user
exit
mysql -u appuser -p
-- Enter: password
```

```sql
-- Use database
use mydb;

-- Create table
create table products (
  id int not null AUTO_INCREMENT,
  name varchar(50) not null,
  remark varchar(200),
  price int not null,
  primary key(id)
);

-- Insert
insert into products (name, remark, price)
values ("Javascript", "A note for js", 990);

insert into products (name, remark, price)
values ("Docker", "Docker is fantastic", 890);

-- Select
select * from products;

-- Update
update products
set price = 1800
where name = 'Javascript';

-- Delete
delete from products
where name = 'Docker';
```

### Start express app
```sh
cd app && npm start
```
