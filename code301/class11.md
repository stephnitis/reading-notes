# Mongo and Mongoose

## [nosql vs sql](https://www.thegeekstuff.com/2014/01/sql-vs-nosql-db/?utm_source=tuicool)

### 1. What kind of data is a good fit for an SQL database?

  SQL databases are not best fit for hierarchical data storage. SQL databases are best fit for heavy duty transactional type applications, as it is more stable and promises the atomicity as well as integrity of the data. On a high-level, we can classify SQL databases as either open-source or close-sourced from commercial vendors.

### 2. Give a real world example.

  MySQL database is very popular open-source database. It is generally been stacked with apache and PHP, although it can be also stacked with nginx and server side javascripting using Node js.

### 3. What kind of data is a good fit a NoSQL database?

  NoSQL databases are document based, key-value pairs, graph databases or wide-column stores. NoSQL database fits better for the hierarchical data storage as it follows the key-value pair way of storing data similar to JSON data. NoSQL database are highly preferred for large data set (i.e for big data). 

### 4. Give a real world example.

  Mongodb is one of the most popular document based NoSQL database as it stores data in JSON like documents. It is non-relational database with dynamic schema. It has been developed by the founders of DoubleClick, written in C++ and is currently being used by some big companies like The New York Times, Craigslist, MTV Networks.

### 5. Which type of database is best for hierarchical data storage?

  NoSQL

### 6. Which type of database is best for scalability?

  SQL

## [Video](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)

### 1. What does SQL stand for?

  Structured Query Language

### 2. What is a relational database?

  A relational database is a collection of information that organizes data points with defined relationships for easy access.

### 3. What type of structure does a relational database work with?

  The relational model means that the logical data structures—the data tables, views, and indexes—are separate from the physical storage structures. This separation means that database administrators can manage physical data storage without affecting access to that data as a logical structure.

### 4. What is a ‘schema’?

  The database schema is a structure of a database described in a formal language supported by the database management system. The term "schema" refers to the organization of data as a blueprint of how the database is constructed.

### 5. What is a NoSQL database?

  NoSQL, also referred to as “not only SQL”, “non-SQL”, is an approach to database design that enables the storage and querying of data outside the traditional structures found in relational databases.

### 6. How does it work?
  
  Data can be fetched and new data can be added. There are no relations, but instead collections of data. And it isn't saying that values are null, you can have totally different documents in one collection. This means you have less relation merging going on and have super fast & efficient queries.

### 7. What is inside of a Mongo database?

  It has collections which have documents, but they don't have to use the same schema or relations.

### 8. Which is more flexible - SQL or MongoDB? and why.

  MongoDB because you can add new data and it doesn't have to all be consistent amongst. It can also be scaled horizontally and vertically, has great performance for large read and write requests.

### 9. What is the disadvantage of a NoSQL database?

  If write requests effect multiple collections, NoSQL has very few relations. As such there can be such widely varied collections, you may not be sure if all of the data adheres to your format, and you may have some duplicate data, which can be more complex to update.