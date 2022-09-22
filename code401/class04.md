# Data Modeling

## [nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

### 1. What type of database is the best fit for the complex query intensive environment?

SQL databases: On a high-level, NoSQL don’t have standard interfaces to perform complex queries, and the queries themselves in NoSQL are not as powerful as SQL query language.

### 2. What type of database is the best fit for hierarchical data storage?

NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set (i.e for big data).

### 3. Describe the differences in scalability between a SQl and NoSQL database as though you were speaking to a non-technical friend.

In most typical situations, SQL databases are vertically scalable. You can manage increasing load by increasing the CPU, RAM, SSD, etc, on a single server. On the other hand, NoSQL databases are horizontally scalable. You can just add few more servers easily in your NoSQL database infrastructure to handle the large traffic.

## [sql modeling techniques](https://www.essentialsql.com/get-ready-to-learn-sql-7-simplified-data-modeling/)

### 1. Among data tables, what is a one-to-many relationship and how do we “relate” them?

When an entry in one table can be related to more than one entry in another.

### 2. Prior to designing your relational database, it might be useful to ___ a ___ of the database tables and their relationships.

Create a diagram

### 3. Explain the difference between a primary and foreign key.

The Primary Keys.  Remember the primary keys uniquely identify each row in a table.  A table typically has one primary key, but can have more.  When the key has more than one column, it is called a compound key.

Foreign Key – This is a column or set of columns which match a primary key in another table.

## [sql vs nosql](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### 1. How do we treat keywords and parameters differently in SQL syntax?

Keywords hold significance in SQL and are used for certain functions and as such need special treatment to be used as identifiers (e.g. table and column names)

Parameters are used to exchange data between stored procedures/functions and the application/tool that called the stored procedure or function

### 2. Define normalization within the context of schemas and data.

The process to eliminate data redundancy and enhance data integrity in the table. Helps to organize the data in the database.

### 3. Explain the difference between one-to-one, one-to-many, and many-to-many relationships to a non-technical recruiter.

One-to-one relationships associate one record in one table with a single record in the other table. One-to-many relationships associate one record in one table with many records in the other table. Many-to-many: Multiple records in one table are related to multiple records in another table.

## [Sequelize v6](https://sequelize.org/docs/v6/)
