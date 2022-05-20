## JavaScript & JQuery by Jon Ducket

- Every statement in a script lives in one of three execution contexts:
  - Global context: code that is in the script, but not in a function. There is only one global context per page.
  - Function context: code that is being run within a function. Each function has its own function context.
  - Eval context (not shown): Text is executed like code in an internal function called eval()
- The JavaScript interpreter processes one line of code at a time. When a statement needs data from another function, it stacks (or piles) the new function on top of the current task.
- Each time a script enters a new execution context, there are two phases of activity:
  1. Prepare:
  - The new scope is created
  - Variables, functions, and arguments are created.
  - The preparation phase is often described as taking all of the variables and functions and *hoisting* them to the top of the execution context.  
  2. Execute
  - Now it can assign values to variables
  - Reference functions and run their code
  - Execute statements
In the interpreter, each execution context has its own `variables` object. It holds the variables, functions, and parameters available within it. Each execution context can also access its parent's `variables` object.
- Functions in JavaScript are said to have lexical scope. They are linked to the object they are defined within. The *scope* is the current execution context's `variables` object *plus* the `variables` object for each parent execution context.
- Debugging is the process of finding errors. It involves a process of deduction.
- The console helps narrow down the area in which the error is located, so you can try to find the exact error.
JavaScript has 7 different types of errors. Each creates its own error object, which can tell you its line number and gives a description of the error.
- Handle errors gracefully using `try`, `catch`, `throw` and `finally` statements.
