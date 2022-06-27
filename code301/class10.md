# In memory storage

## [Understanding the JavaScript Call Stack](https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4)

### 1. What is a ‘call’?

  Function invocation

### 2. How many ‘calls’ can happen at once?

  In Asynchronous JavaScript, we have a callback function, an event loop, and a task queue. The callback function is acted upon by the call stack during execution after the call back function has been pushed to the stack by the event loop.

### 3. What does LIFO mean?

  Last In, First Out (LIFO)

### 4. Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.

  ![CALL STACK](/img/call%20stack.png)

### 5. What causes a Stack Overflow?

  A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.

## [JavaScript error messages](https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c)

### 1. What is a ‘reference error’?

  This is as simple as when you try to use a variable that is not yet declared. This is also a common thing when using const and let, they are hoisted like var and function but there is a time between the hoisting and being declared so when you try to access them a reference error occurs, the fact that this happens to let and const is called Temporal Dead Zone (TDZ).

### 2. What is a ‘syntax error’?

  This occurs when you have something that cannot be parsed in terms of syntax, like when you try to parse an invalid object using JSON.parse.

### 3. What is a ‘range error’?

  Try to manipulate an object with some kind of length and give it an invalid length and this kind of errors will show up.

### 4. What is a ‘tyep error’?

  Like the name indicates, this types of errors show up when the types (number, string and so on) you are trying to use or access are incompatible, like accessing a property in an undefined type of variable.

### 5. What is a breakpoint?

  In the debugger window, you can set breakpoints in the JavaScript code. At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values. After examining values, you can resume the execution of code (typically with a play button).

### 6. What does the word ‘debugger’ do in your code?

  Places a breakpoint in your code.