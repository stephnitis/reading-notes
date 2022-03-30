### [Expressions & Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

**Types of Operators in JavaScript:**

- Assignment operators
- Comparison operators
- Arithmetic operators
- Bitwise operators
- Logical operators
- String operators
- Conditional (ternary) operator
- Comma operator
- Unary operators
- Relational operators

- JavaScript has both *binary* and *unary* operators, and one special ternary operator, the conditional operator.
- A binary operator requires two operands, one before the operator and one after the operator e.g. : **operand1 operator operand2**
- A unary operator requires a single operand, either before or after the operator e.g. : **operator operand** or **operand operator**

**Assignment Operators:**

- An assignment operator assigns a value to its left operand based on the value of its right operand. The simple assignment operator is equal (=), which assigns the value of its right operand to its left operand. There are also compound assignment operators.
- If a variable refers to an object, then the left-hand side of an assignment expression may make assignments to properties of that variable.
- Chaining assignments or nesting assignments in other expressions can result in surprising behavior. For this reason, some JavaScript style guides discourage chaining or nesting assignments).
- By chaining or nesting an assignment expression, its result can itself be assigned to another variable. It can be logged, it can be put inside an array literal or function call, and so on.

**Comparison Operators**

- A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
- The operands can be numerical, string, logical, or object values.
- Strings are compared based on standard lexicographical ordering, using Unicode values.
- In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically.
- The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality

### [Loops & Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- Loops offer a quick and easy way to do something repeatedly
- You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another.
- There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times.

**for Statements:**

- A for loop repeats until a specified condition evaluates to false.
- A for statement looks as follows:
  - for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement

- When a for loop executes, the following occurs:
    1. The initializing expression initialExpression, if any, is executed. This expression usually initializes one or more loop counters, but the syntax allows an expression of any degree of complexity. This expression can also declare variables.
    2. The conditionExpression expression is evaluated. If the value of conditionExpression is true, the loop statements execute. Otherwise, the for loop terminates. (If the conditionExpression expression is omitted entirely, the condition is assumed to be true.)
    3. The statement executes. To execute multiple statements, use a block statement ({ ... }) to group those statements.
    4. If present, the update expression incrementExpression is executed.
    5. Control returns to Step 2.

**while Statements:**

- A while statement executes its statements as long as a specified condition evaluates to true. A while statement looks as follows:
  - while (condition)
  statement
- If the condition becomes false, statement within the loop stops executing and control passes to the statement following the loop.
- The condition test occurs before statement in the loop is executed. If the condition returns true, statement is executed and the condition is tested again. If the condition returns false, execution stops, and control is passed to the statement following while.
- To execute multiple statements, use a block statement ({ ... }) to group those statements.
- Avoid infinite loops. Make sure the condition in a loop eventually becomes false—otherwise, the loop will never terminate!
