### [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

**An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.**

**There are differences between arrow functions and traditional functions, as well as some limitations:**

- Arrow functions don't have their own bindings to this, arguments or super, and should not be used as methods.
- Arrow functions don't have access to the new.target keyword.
- Arrow functions aren't suitable for call, apply and bind methods, which generally rely on establishing a scope.
- Arrow functions cannot be used as constructors.
- Arrow functions cannot use yield, within its body.

**Additional Resources:**

[Can I Use?](https://caniuse.com/?search=arrow%20functions)
[JavaScript Arrow Functions by Wes Bos](https://wesbos.com/arrow-functions)

**CAVEATS**

- the `this` context is not reset within an arrow function.
- The value of `this` is therefore the same as the `this` of the enclosing scope (the surrounding non-arrow function). If there isn’t a non-arrow function scope surrounding, the this context will be, in the browser, the global window object.

- Why does this happen? It happens because arrow functions retain the `this` value of the enclosing functional scope. Therefore, you will want to avoid using an arrow function in a constructor (where we need the contextual `this` to be the object we are building) or any method that needs to use `this` to behave properly.