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

### [Loops & Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)

- A comparison operator compares its operands and returns a logical value based on whether the comparison is true.
- The operands can be numerical, string, logical, or object values.
- Strings are compared based on standard lexicographical ordering, using Unicode values.
- In most cases, if the two operands are not of the same type, JavaScript attempts to convert them to an appropriate type for the comparison. This behavior generally results in comparing the operands numerically.
- The sole exceptions to type conversion within comparisons involve the === and !== operators, which perform strict equality and inequality comparisons. These operators do not attempt to convert the operands to compatible types before checking equality
