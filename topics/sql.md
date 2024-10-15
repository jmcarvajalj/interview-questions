# Relational Databases (SQL)

## What is a relational database

A relational database (RDB) is type of database that stores a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables usually represent some object that is connected to your business domain, i.e. you might have table Users to store all your users. Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. There are many data types in RDB: strings, integers, decimals, binary and even json, so you can store any kind of data.

The rows in the table represent a record and contains all values from its columns. Each row in a table should be marked with some unique identifier called a primary key. Like everyone has its own unique passport number that helps to identify you, so every row in table has its own unique identifier. By using primary keys we can build relations between objects, i.e. tax office may store information about you and uses your passport number (or other unique identifier, depending on your country) to identify and check all your operations. So basically there is a relation between records in different tables build by using unique identifiers.

You can think about RDB as a set of tables in your Excel document, each table represents a tab, and you added some unique identifier to each row (primary key or PK). So let's imagine a common e-commerce application, where users can buy some stuff. When you register, system creates a record in Users table, assigns a unique key to you and stores all your data there, let it be your name and age for simplicity. When someone makes a purchase, system may create a record and store it in Purchases table. To maintain a relation and to track who actually made purchases, system stores your PK from Users table.

Thanks to these relationships, unlike in NoSQL where you need to consider the table structure and object compositions in advance because it impacts how you can retrieve data and build relationships, in RDB, data can be accessed in various ways without having to reorganize the database tables themselves.

## What is RDBMS

The software used to store, manage, query, and retrieve data stored in a relational database is called a relational database management system (RDBMS). The RDBMS provides an interface between users and applications and the database, as well as administrative functions for managing data storage, access, and performance. A RDBMS incorporates the relational-data model, basics of which we have described above, normally including a Structured Query Language (SQL) application programming interface. So just like there are several Web browsers on the market, each with some unique features but still they support JS, HTML and CSS, the same situation with RDBMS. There are several of them, each has its own features, performance, maintainability costs and can even have extended SQL syntax, like new operators etc. But they are all built on top of the relational model and support common SQL syntax.

Here is the list of the most popular RDBMS, you might have heard of some of them.

-   MySQL is a database by Oracle Corporation, first released in 1995. It's one of the most stable open-source databases available today. Facebook and Uber use it in their applications. YouTube uses MySQL to store all the metadata for the videos. While it is a good place to start, MySQL is not the best if you want advanced data protection features like throttling and masking. It is also not the best with semi-structured data like JSON.

-   PostgreSQL is another open source database. It uses and extends SQL (hence the name), and is broadly extensible to a range of use cases beyond mere transactional data. It handles semi-structured data such as JSON and has great support for distributed SQL. The latter is useful when working with millions of transactions on the web.

-   Oracle - developed in 1979 by the current CTO of Oracle, Larry Ellison, Oracle remains a popular SQL database especially for enterprise-grade RDBMSs. It is indeed quite advanced, offers wonderful features for both structured and semi-structured data, supports blockchain tables, facilitates lightning-fast transactions. However, it does have a major downside compared to the other two databases discussed so far: it is not open source, and it is not pocket-friendly.

-   SQL Server is a popular Microsoft database offering in the market. SQL Server is a paid database; it garners corporate support due to the Microsoft brand name and the compatibility support for other Microsoft applications.

## Transactions and ACID

One of the greatest features of relational databases is transactions. A transaction is some set of database operations that is treated as a "whole". It has to either complete successfully all its operations or not to make any changes at all.

Let's consider the following example: you want to transfer 20$ to your friend, you open your bank app in your phone and transfer funds. What happens under the hood? Probably, transfer consists of several operations, at first 20$ are withdrawn from your accounts, and on the next step are added to your friends account. But what would happen if some error was thrown in application after 1st step?

Money were withdrawn, but not transferred, you and your friend are unhappy, and probably your bank hired developers who don't know about transactions. This two operations should be wrapped into database transaction, so if such error was thrown database would revert all changes, and you would have all your money.

All database transactions in any RDBMS are ACID compliant or **Atomic**, **Consistent**, **Isolated** and **Durable** to ensure data integrity.

-   **Atomicity** defines that all operations in transaction treated as one "unit", which either succeeds completely or fails completely: if any of the statements constituting a transaction fails to complete, the entire transaction fails and the database is left unchanged. In previous example transaction consists of two operations with different bank accounts and its naturally that bank wants to roll back any changes if something goes wrong.

-   **Consistency** ensures that a transaction can only bring the database from one valid state to another. Database can have some constraints in tables, i.e. unique columns, cascades, triggers, foreign keys etc. and any data written to the database must be valid according to all defined rules. This prevents database corruption by an illegal transaction.

-   **Isolation** helps to isolate one transaction from another, because often operations are run simultaneously one transaction may affect results of another if changes are persisted immediately. In RDBMS changes usually can be seen only after transaction is finished,so the effects of an incomplete transaction might not even be visible to other transactions.

-   **Durability** guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure (e.g., power outage or crash). This usually means that completed transactions are recorded not is some cache but in non-volatile memory immediately, unlike from eventually consistent NoSql.

## When do I need RDB for my project

SQL is a good choice when working with related, structured data. Relational databases are efficient, flexible and easily accessed by any application. A benefit of a relational database is that when one user updates a specific record, every instance of the database automatically refreshes, and that information is provided in real-time.

SQL and a relational database make it easy to handle a great deal of information, scale based on your needs and allow flexible access to data — only needing to update data once instead of changing multiple files, for instance. Thanks to ACID properties it’s also best for assessing data integrity. Since each piece of information is stored in a single place, there’s no problem with former versions confusing the picture. However, SQL databases are not easily scaled horizontally. Unlike from NoSQL, which can be sharded easily, most SQL databases require you to scale-up vertically (migrate to a larger, more expensive server) when you exceed the capacity requirements of your current server, or manually distribute data between several servers and process it in your application logic.

## Data modelling

### Normalization

Before you start creation of your database you need to understand what tables and what relations there will be. Usually you can start from some very simple excel-like form of real data and apply normalisation techniques to build your model. Normalisation is a database design technique that reduces data redundancy and eliminates undesirable characteristics like Insertion, Update and Deletion Anomalies. Normalisation rules divides larger tables into smaller tables and links them using relationships. The purpose of Normalisation in SQL is to eliminate redundant (repetitive) data and ensure data is stored logically. There are 6 normal forms, however, in most practical applications, normalisation achieves its best in 3rd Normal Form.

#### Anomalies

-   **Update Anomaly** happens because information is duplicated in several rows. If your database has 10 rows it's not a problem, but what if it has millions of rows?

-   **Deletion Anomaly** happens when removing a row causes removal of more than one set of facts.

-   **Insert Anomaly** presents when we cannot insert record until we know information for the entire row.

#### Normal Forms

**1 Normal form**

To satisfy First normal form, each column of a table must have a single value. Columns which contain sets of values or nested records are not allowed, each record needs to be unique. A common technique is to move nested data into separate table, and link two tables using primary keys.

**2 Normal form**

If a table has a single column primary key, it automatically satisfies 2NF, but if a table has a multi-column or composite key then it may not satisfy 2NF.

**3 Normal form**

The third normal form states that you should eliminate fields in a table that do not depend on the key.

-   A Table is already in 2 NF
-   Non-Primary key columns shouldn’t depend on the other non-Primary key columns
-   There is no transitive functional dependency

In a simple words, values in a record that are not part of that record's key do not belong in the table. In general, anytime the contents of a group of fields may apply to more than a single record in the table, consider placing those fields in a separate table.

**CAUTION**

Adhering to the third normal form, while theoretically desirable, is not always practical. If you have a Customers table and you want to eliminate all possible duplications, you must create separate tables for cities, ZIP codes, customer classes, and any other factor that may be duplicated in multiple records. Intheory, normalization is worth pursing. However, many small tables may degrade performance or exceed open file and memory capacities.

### Relationships

There are three types of relationships between the data you are likely to encounter: one-to-one, one-to-many, and many-to-many. To be able to identify these relationships, you need to examine the data and have an understanding of what business rules apply to the data and tables.

#### One-to-one

A one-to-one (1:1) relationship means that each record in Table A relates to one, and only one, record in Table B, and each record in Table B relates to one, and only one, record in Table A.

#### One-to-many

One-to-many relationships are the most common type of relationships between tables in a database. In a one-to-many (sometimes called many-to-one) relationship, a record in one table corresponds to zero, one, or many records in another table. Relationship is also maintained by FK column in one of the tables.

#### Many-to-many

A many-to-many relationship indicates that multiple records in a table are linked to multiple records in another table. Those records may only be associated with a single record (or none at all) but the key is that they can and often are linked to more than one. Many-to-many relation is implemented by creating a third table, known as a join table, and create one-to-many relationships between it and your two starting tables.

### Indexes and keys

A KEY in SQL is a value used to identify records in a table uniquely. An SQL KEY is a single column or combination of multiple columns used to uniquely identify rows or tuples in the table. SQL Key is used to identify duplicate information, and it also helps establish a relationship between multiple tables in the database.

**NOTE**

Columns in a table that are NOT used to identify a record uniquely are called non-key columns.

#### What is a Primary Key (or PK)?

A primary is a single column value used to identify a database record uniquely.

It has following attributes:

-   A primary key cannot be NULL
-   A primary key value must be unique
-   The primary key values should rarely be changed
-   The primary key must be given a value when a new record is inserted.

#### What is Composite Key?

A composite key is a primary key composed of multiple columns used to identify a record uniquely.

#### What is Foreign Key?

We have already used Foreign Keys (FK) during normalization process to build relations.

Foreign Key references the primary key of another Table! It helps connect your Tables.

-   A foreign key can have a different name from its primary key
-   It ensures rows in one table have corresponding rows in another
-   Unlike the Primary key, they do not have to be unique. Most often they aren’t
-   Foreign keys can be null even though primary keys can not

You will only be able to insert values into your foreign key that exist in the unique key in the parent table. This helps in referential integrity.

#### Indexes

Indexing is the way to get an unordered table into an order that will maximize the query’s efficiency while searching. When there is no index, and you try to search something in database its engine has to scan through every row to find all matching records. While nowadays hardware can be really performant still such operations are time-consuming, especially if you have millions and millions of rows. Looking through every single row is not very efficient.

What indexing does is sets up the column in a sorted order to assist in optimizing query performance. The index causes the database to create a data structure,and this structure type is very likely a B-Tree. While the advantages of the B-Tree are numerous, the main advantage for our purposes is that it is sortable.

As you see B-Tree greatly reduces the number of comparisons. What it does under the hood is also stores pointers which are simply reference information for the location of the additional information in memory. Basically the index holds the column value and that particular row’s home address on the memory disk. With that index, the query can search for only the rows in the column that have 15 value and then using the pointers can go into the table to find the specific rows where that pointer lives.

**CAUTION**

Keep in mind that indexes are separate datastructures, and they need additional disk and memory space. When new record is inserted or indexed column value is updated B-Tree should be updated too. So you cannot simply throw index on every column in your 50-column table. Technically its possible of course, but performance will degrade over time as the numbers of rows in table increases.

Use indexes on the most "popular" columns, that are used in queries frequently.

## SQL basics

There is special language to manipulate data in RDB - SQL. Structured Query Language(SQL) is the database language by the use of which we can perform certain operations on the existing database, and also we can use this language to create a database. SQL uses certain commands like Create, Drop, Insert, etc. to carry out the required tasks.

These SQL commands are mainly categorized into four categories as:

-   DDL – Data Definition Language
-   DQl – Data Query Language
-   DML – Data Manipulation Language
-   DCL – Data Control Language

### DDL (Data Definition Language)

DDL or Data Definition Language actually consists of the SQL commands that can be used to define the database schema. It simply deals with descriptions of the database schema and is used to create and modify the structure of database objects in the database. DDL is a set of SQL commands used to create, modify, and delete database structures but not data.

#### Create

This command is used to create the database or its objects (like table, index, function, views, store procedure, and triggers).

**NOTE**

The syntax for creating entities may vary among different databases. Therefore: Check the syntax for your database. We will use PostgreSQL syntax in next examples;

To create database:

```sql
CREATE DATABASE test;
```

To create index on Name column of Employee table (docs):

```sql

CREATE INDEX idx_name
ON Employee (Name);
```

To create table:

```sql

CREATE TABLE [IF NOT EXISTS] table_name (
column1 datatype(length) column_contraint,
column2 datatype(length) column_contraint,
column3 datatype(length) column_contraint,
table_constraints
);
```

Let's create some tables from our previous examples. To create Employee and Hardware tables with relation we need to execute next commands:

```sql

CREATE TABLE Employee (
id serial PRIMARY KEY,
name character varying NOT NULL,
joinDate TIMESTAMP WITH TIME ZONE NOT NULL
);

CREATE TABLE Harware (
"Serial" character varying PRIMARY KEY,
os character varying NOT NULL,
year integer NOT NULL,
ram integer NOT NULL,
employeeId integer,
CONSTRAINT fk_employee FOREIGN KEY(employeeId) REFERENCES Employee(id)
);
```

Note how we marked foreign and primary keys in each table and applied NOT NULL constraints on columns. It means that if we won't provide some values database will throw an error, another good way to maintain data integrity. Also, we have to use quotes with Serial column name, because serial is a datatype, so it's a reserved word.

#### Drop

DROP is a DDL command used to delete/remove the database objects from the SQL database. We can easily remove the entire table, view, or index from the database using this DDL command.

To drop database:

```sql

DROP DATABASE database_name;
```

Suppose, you want to delete the Employee table from the SQL database. To do this, you have to write the following DDL command:

```sql

DROP TABLE Employee;
```

To delete index:

```sql

DROP INDEX index_name;
```

#### Alter

ALTER is a DDL command which changes or modifies the existing structure of the database, and it also changes the schema of database objects. We can also add and drop constraints of the table using the ALTER command.

Suppose, you want to add the 'Surname' column in the existing Employee table. To do this, you have to write the following DDL command:

```sql

ALTER TABLE Employee ADD Surname varchar;
```

If you want to remove some column from the existing Employee table, you can use following DDL command:

```sql

ALTER TABLE Employee DROP Surname;
```

### DML (Data Manipulation Language)

DML is an abbreviation of Data Manipulation Language. The DML commands in Structured Query Language change the data present in the SQL database. We can easily access, store, modify, update and delete the existing records from the database using DML commands.

Following are the four main DML commands in SQL:

-   SELECT Command
-   INSERT Command
-   UPDATE Command
-   DELETE Command

#### Insert

INSERT is a data manipulation command in SQL, which allows users to insert data in database tables and has next syntax:

```sql

INSERT INTO TABLE_NAME ( column_Name1 , column_Name2 , column_Name3 , .... column_NameN ) VALUES (value_1, value_2, value_3, .... value_N ) ;
```

Let`s say we need to insert record to Hardware table from our previous examples. For this you need to execute such command:

```sql

INSERT INTO Hardware ("Serial", os, ram) VALUES ('1dfg124sd2a', 'MAC', 32);
```

You can insert multiple records in one query:

```sql

INSERT INTO Hardware ("Serial", os, ram) VALUES
('1dfg124sd2a', 'MAC', 32),
('aa45g5dd71a', 'Windows', 64),
('gh26s2h61sd', 'Windows', 16);
```

#### Select

SELECT is one of the most frequently used commands in SQL. The SELECT command shows the records of the specified table. It also shows the particular record of a particular column by using the WHERE clause.

```sql

SELECT column_Name_1, column_Name_2, ….., column_Name_N FROM Name_of_table;
```

Here, column_Name_1, column_Name_2, ….., column_Name_N are the names of those columns whose data we want to retrieve from the table. If we want to retrieve the data from all the columns of the table, we have to use the following SELECT command:

```sql

SELECT * from Table
```

We can apply some filters using WHERE keyword. Let's say we want to retrieve all hardware which has 16 or more gigs of RAM.

```sql

SELECT * from Hardware WHERE ram >= 16
```

There are lots of other keywords that can be used in SELECT, i.e. GROUP BY, LIMIT, OFFSET,ORDER BY but they are not in scope of this course.

#### Update

UPDATE is a command in SAL, which allows users to update or modify the existing data in database tables and has next syntax:

```sql

UPDATE Table_name SET [column_name1= value_1, ….., column_nameN = value_N] WHERE CONDITION;
```

Here, 'UPDATE', 'SET', and 'WHERE' are the SQL keywords, and 'Table_name' is the name of the table whose values you want to update.

If you need to update someone's office in Employee table you can execute such query

```sql

UPDATE Employee SET office_id = 2 WHERE id = 2;
```

You can update multiple columns in one query:

```sql

UPDATE Employee SET office_id = 2, Name = 'Bilbo Beggins' WHERE id = 2;
```

#### Delete

DELETE is a DML command which allows SQL users to remove single or multiple existing records from the database tables. We use the WHERE clause with the DELETE command to select specific rows from the table. Syntax of DELETE Command:

```sql

DELETE FROM Table_Name WHERE condition;
```

Suppose, you want to delete that hardware from the Hardware table which serial number is 'serial123'. To do this, you have to write the following DML DELETE command:

```sql

Delete from Hardware where "serial" = 'serial123';
```

### How to query relations

In lots of situations you will want to get information from several tables in one request. I.e. we would like to get information about employee and his hardware, or about all projects of employee. There is JOIN operator in SQL that is used in such situation. A JOIN clause is used to combine rows from two or more tables, based on a related column between them. There are 4 different types of the JOINs in SQL:

-   (INNER) JOIN: Returns records that have matching values in both tables
-   LEFT JOIN: Returns all records from the left table, and the matched records from the right table
-   RIGHT JOIN: Returns all records from the right table, and the matched records from the left table
-   FULL JOIN: Returns all records when there is a match in either left or right table

### Transactions

As we discussed previously, transaction is a unit of work that is performed against a database. Transactions are units or sequences of sql commands accomplished in a logical order, whether in a manual fashion by a user or automatically by some sort of database program.

Practically, you will club many SQL queries into a group, and you will execute all of them together as a part of a transaction.

In PostgreSQL, a transaction is set up by surrounding the SQL commands of the transaction with BEGIN and COMMIT commands. Let`s create a transaction for our very first example, when Bob is trying to transfer 100$ to his friend Alice.

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100.00
WHERE name = 'Bob';

UPDATE accounts SET balance = balance + 100.00
WHERE name = 'Alice';

COMMIT;
```

If, partway through the transaction, we decide we do not want to commit (perhaps we just noticed that Alice's balance went negative) or something goes wrong in application, we (node driver) can issue the command ROLLBACK instead of COMMIT, and all our updates so far will be canceled.

## Node postgres module

node-postgres is a collection of node.js modules for interfacing with PostgreSQL database. It has support for callbacks, promises, async/await, connection pooling, prepared statements, cursors, streaming results, C/C++ bindings, rich type parsing, and more. It's a library for low level interactions, so you can have a full control over your database and queries, however it also requires more effort to control everything. To use it install pg npm package

```bash

npm install pg
```

After that you can import module and create Client instance for interaction with DB;

```javascript
import pg from "pg";

const client = new pg.Client({
	host: "localhost",
	port: 5432,
	user: "node",
	password: "password123",
	database: "node",
});

await client.connect();
```

Here we used configuration object which was passed to Client constructor. We specified DB host, port, user and password for our instance of PostgreSQL which is running inside Podman container.

Now we can use query method to execute any sql operation. Let's first create two tables from previous example:

```javascript
await client.query(`
    CREATE TABLE IF NOT EXISTS Employee (
        id serial PRIMARY KEY,
        name character varying NOT NULL,
        joinDate TIMESTAMP WITH TIME ZONE NOT NULL);`);

await client.query(`
    CREATE TABLE IF NOT EXISTS Hardware (
        "Serial" character varying PRIMARY KEY,
        os character varying NOT NULL,
        year integer NOT NULL,
        ram integer NOT NULL,
        employeeId integer,
        CONSTRAINT fk_employee FOREIGN KEY(employeeId) REFERENCES Employee(id)
);`);
```

Query method supports not only raw text sql but also parameterized input. If you are passing parameters to your queries you will want to avoid string concatenating parameters into the query text directly. This can (and often does) lead to sql injection vulnerabilities. node-postgres supports parameterized queries, passing your query text unaltered as well as your parameters to the PostgreSQL server where the parameters are safely substituted into the query with parameter substitution code within the server itself.

```javascript
await client.query(`
    INSERT INTO Employee (name, joinDate) 
    VALUES 
    ('John Wick', '2021-01-14'),
    ('Alex Green', '2019-04-14') 
`);

//we pass only Serial, os,year,ram column values, employeeId is empty
await client.query(`
    INSERT INTO Hardware 
    VALUES 
    ('serialNum1', 'MAC',2019,18),
    ('serialNum2', 'Windows', 2019, 36)`);
```

We created 2 records in Employee table and 2 records in Hardware table. But they are not linked yet, laptops are not assigned to anyone, because we did not know id of new records beforehand. So now lets try to assign machines to employees.

```javascript
const employee = await client.query(`SELECT id from Employee where name = $1`, [
	"John Wick",
]);

console.log(employee.rows); // [ { id: 1 } ]

await client.query(`UPDATE Hardware SET employeeId = $1 where "Serial" = $2`, [
	employee.rows[0].id,
	"serialNum1",
]);
```

First we execute request to get employee id, we use parameter as the best practice. An object is returned and data is located in rows property. Only id property is present because we selected only this column in query. Then we simply execute update statement and set employee id with this value. Now we can select employee and his laptop in one query if we need

```javascript
const result = await client.query(
	`SELECT * from Employee JOIN Hardware ON id = employeeId`
);

console.log(result.rows);
/*
[                                      
  {                                    
    id: 1,                             
    name: 'John Wick',                 
    joindate: 2021-01-14T00:00:00.000Z,
    Serial: 'serialNum1',              
    os: 'MAC',                         
    year: 2019,                        
    ram: 18,                           
    employeeid: 1                      
  }                                    
]    
 */
```

## ORM

In previous examples we were using SQL to manipulate data in database. But such approach has its own disadvantages. First of all you need to manually type lots of queries, and they may be really long. Also, you are using syntax which is specific to one particular RDBMS, so if you had had to switch to another it would have become a problem. Another problem is when you need to build query programmatically, i.e. when you need to apply some filters from user input. You would need to start concatenating string with sql parts, then apply arguments in right order, all this not only looks bad in code but also a place for potential bugs or SQL injections. Another point is that response from queries often is not structured, it`s a plain array/object (look in previous JOIN call), while it would be nice to have nested objects with theirs relation.

ORM solves most of these problems. Object-relational mapping lets people interact with databases using their programming languages rather than forcing them to use SQL. Developers can use tools called object-relational mappers. They show the data in a structured way that helps users understand the content and layout of a database without using SQL. One of the major benefits is that it saves time compared to entering SQL queries.

An object-relational mapper works as a translator that converts code from one form to another. The tool creates objects representing a virtual map of the database. The user can then interact with the objects rather than directly engaging with code. On the example below you can see how MikroORM is used to query two tables.

```typescript
import { Entity, LoadStrategy, OneToMany, ManyToOne } from "@mikro-orm/core";

@Entity()
export class Author {
	@OneToMany(() => Book, (b) => b.author)
	books = new Collection<Book>(this);
}

@Entity()
export class Book {
	@ManyToOne()
	author: Author;
}

const authorRepository = orm.em.getRepository(Author);
const jon1 = await authorRepository.findOne(1); // Select * from Author where id = 1 limit 1
const jon2 = await authorRepository.findOne({ name: "Jon Snow" }); //Select * from Author where name='Jon Snow' limit 1
const jon3WithBook = await authorRepository.find(
	{ name: "Jon Snow" },
	{ populate: ["books"] }
);
// Select * from Author where name='Jon Snow'
// Select * from Book where authorId in (ids from previous call)
// each author  will have book property in result
```

Using typescript we have all types safety features, and we can define all our models using decorators. We need to define them one time, and then we are able to execute queries from our code and even create database from them.

**CAUTION**

Everything has its own price. You need to understand that ORM is a layer between your code and Database and in the end it still uses SQL to execute queries. So technically it's may affect application performance. Also, it can generate not optimized SQL, or trigger some unnecessary sql requests. And when you need to write huge and complex SQL request you may face that it's simply impossible to use ORM for that, and you will be forced to use raw SQL query.

## How to make a transaction in SQL

Asi se hacen transacciónes en puro SQL

```sql
-- Desactiva autocommit
SET autocommit = 0;

-- Inicia la transacción
START TRANSACTION;

-- Primera consulta
INSERT INTO usuarios (nombre, email) VALUES ('Juan', 'juan@example.com');

-- Segunda consulta
UPDATE cuentas SET saldo = saldo - 1000 WHERE id_usuario = 1;

-- Ahora puedes decidir:

-- - Si quieres confirmar los cambios: COMMIT;
COMMIT

-- - Si quieres revertir todo: ROLLBACK;
ROLLBACK

-- y preferiblemente activar de nuevo autocommit
SET autocommit = 1;
```
