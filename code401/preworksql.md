# SQL Practice

## [SQLBolt](https://sqlbolt.com/)

### Lesson 1

*To retrieve data from a SQL database, we need to write SELECT statements, which are often colloquially refered to as queries. A query in itself is just a statement which declares what data we are looking for, where to find it in the database, and optionally, how to transform it before it is returned.*

Select query for specific columns:

```SQL
SELECT column, another_column, …
FROM mytable;
```

- The result of this query will be a two-dimensional set of rows and columns, effectively a copy of the table, but only with the columns that we requested.

If we want to retrieve absolutely all the columns of data from a table, we can then use the asterisk (*) shorthand in place of listing all the column names individually:

```SQL
SELECT * 
FROM mytable;
```

![Lesson One Complete](../img/401.sqlbolt/sqlboltqueries1.png)

### Lesson 2

*In order to filter certain results from being returned, we need to use a WHERE clause in the query. The clause is applied to each row of data by checking specific column values to determine whether it should be included in the results or not.*

Select query with constraints:

```SQL
SELECT column, another_column, …
FROM mytable
WHERE condition
    AND/OR another_condition
    AND/OR …;
```

- More complex clauses can be constructed by joining numerous AND or OR logical keywords:

![Operator and Condition Table](../img/401.sqlbolt/sqllesson2table.png)

- SQL doesn't require you to write the keywords all capitalized, but as a convention, it helps people distinguish SQL keywords from column and tables names, and makes the query easier to read.

![Lesson Two Complete](../img/401.sqlbolt/sqlboltqueries2.png)

### Lesson 3

- When writing WHERE clauses with columns containing text data, SQL supports a number of useful operators to do things like case-insensitive string comparison and wildcard pattern matching

- All strings must be quoted so that the query parser can distinguish words in the string from SQL keywords.

![Operator and Condition Table](../img/401.sqlbolt/sqllesson3table.png)

![Lesson Three Complete](../img/401.sqlbolt/sqlboltqueries3.png)

Lesson 4
![Lesson Four Complete](../img/401.sqlbolt/sqlboltqueries4.png)

Lesson 5
![Lesson Five Complete](../img/401.sqlbolt/sqlboltqueries%20review1.png)

Lesson 6
![Lesson Six Complete](../img/401.sqlbolt/sqlboltqueries6.png)

Lesson 13
![Lesson 13 Complete](../img/401.sqlbolt/sqlbolt_DM13.png)

Lesson 14
![Lesson 14 Complete](../img/401.sqlbolt/sqlbolt_DM14.png)

Lesson 15
![Lesson 15 Complete](../img/401.sqlbolt/sqlbolt_DM15.png)

Lesson 16
![Lesson 16 Complete](../img/401.sqlbolt/sqlbolt_DM16.png)

Lesson 17
![Lesson 17 Complete](../img/401.sqlbolt/sqlbolt_DM17.png)

Lesson 18
![Lesson 18 Complete](../img/401.sqlbolt/sqlbolt_DM18.png)

## [Learn SQL](https://cdn2.hubspot.net/hubfs/392937/Learn%20SQL.pdf?__hstc=158613477.01e6fbf0aa8dadc2cabb137b246a03be.1662315576791.1662315576791.1662315576791.1&__hssc=158613477.1.1662315576791&__hsfp=12106724&hsCtaTracking=5829d6cd-cd1b-47f8-92d1-0b3ba8bc9ce7%7Ca4ebeaea-cc21-4256-99ef-eeed3c103120)
