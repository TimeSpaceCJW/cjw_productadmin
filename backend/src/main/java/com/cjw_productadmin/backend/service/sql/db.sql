create table admin (id serial primary key, name varchar(40), deptname varchar(40));
create table product (id serial primary key, name varchar(40), detail varchar(255), price int);

create sequence id start with 1 increment by 1;

insert into admin (id, name, deptname) values (1, '최주욱', 'SI사업본부');
insert into admin (id, name, deptname) values (2, '김보성', 'SI사업본부');

insert into product (id, name, detail, price) values (1, 'ELDEN RING', 'FromSoftware Game', 68000);


select * from admin;
select * from product;
